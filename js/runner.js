/* ============================================================
 * 判题引擎：Pyodide（浏览器内 Python）
 * - CDN 多源回退
 * - 输入提示(input的prompt)单独捕获，不污染输出比对
 * - 语句数/时间双看门狗，防死循环卡死页面
 * - turtle 模拟（canvas 绘图）
 * - matplotlib / jieba / openpyxl 懒加载
 * ============================================================ */

const Engine = {
  status: 'idle',        // idle | loading | ready | error
  pyodide: null,
  _loadingPromise: null,

  chip(text, cls) {
    const el = document.getElementById('engine-chip');
    if (!el) return;
    el.textContent = text;
    el.className = 'chip' + (cls ? ' ' + cls : '');
  },

  /** 确保引擎就绪。返回 true/false */
  async ensure() {
    if (this.status === 'ready') return true;
    if (this._loadingPromise) return this._loadingPromise;
    this._loadingPromise = this._load();
    return this._loadingPromise;
  },

  async _load() {
    this.status = 'loading';
    this.chip('判题引擎：加载中…');
    for (const base of window.CONFIG.pyodideCDNs) {
      try {
        await this._loadScript(base + 'pyodide.js');
        const py = await window.loadPyodide({ indexURL: base });
        this.pyodide = py;
        py.runPython(HARNESS_PY);
        this.status = 'ready';
        this.chip('判题引擎：就绪 ✓', 'chip-ok');
        return true;
      } catch (e) {
        console.warn('Pyodide CDN 失败，尝试下一个源', base, e);
      }
    }
    this.status = 'error';
    this.chip('判题引擎：加载失败（可用“对照自评”模式）', 'chip-err');
    this._loadingPromise = null;
    return false;
  },

  _loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error('脚本加载失败: ' + src));
      document.head.appendChild(s);
    });
  },

  /** 运行用户代码。
   *  opts: {stdin='', files=[{name,content}], timeoutS=8, maxEvents=2_000_000,
   *         packages=['matplotlib'|'jieba'|'openpyxl'], container=null}
   *  返回 {ok, stdout, prompts, error, hasCanvas} */
  async run(code, opts = {}) {
    const unsup = unsupportedCheck(code);
    if (unsup) {
      return { ok: false, stdout: '', prompts: '', error: unsup, hasCanvas: false, unsupported: true };
    }
    const ready = await this.ensure();
    if (!ready) return { ok: false, stdout: '', prompts: '', error: '判题引擎未加载（需联网首次加载，约 10~20MB）', hasCanvas: false };
    const py = this.pyodide;
    const id = 'pyout' + Math.random().toString(36).slice(2, 8);
    // turtle 画布挂载点
    let mountId = '';
    if (opts.mount && opts.mount.nodeType) {
      if (!opts.mount.id) opts.mount.id = 'mount' + id;
      mountId = opts.mount.id;
    }
    try {
      // 需要的第三方包懒加载
      const pkgs = opts.packages || detectPackages(code);
      for (const p of pkgs) {
        if (p === 'matplotlib') await py.loadPackage('matplotlib');
        else await py.loadPackage('micropip').then(() => py.runPythonAsync(
          `import micropip; await micropip.install('${p}')`));
      }
      // 内存文件
      if (opts.files && opts.files.length) {
        py.runPython(`
import os
os.makedirs('/home/pyodide/data', exist_ok=True)
os.chdir('/home/pyodide/data')
`);
        for (const f of opts.files) {
          py.globals.set('_fname', f.name);
          py.globals.set('_fcontent', f.content);
          py.runPython(`
_d = _fname.split('/')
_p = '/home/pyodide/data'
for seg in _d[:-1]:
    _p = _p + '/' + seg
    os.makedirs(_p, exist_ok=True)
with open('/home/pyodide/data/' + _fname, 'w', encoding='utf-8') as _f:
    _f.write(_fcontent)
`);
        }
        py.globals.set('_fname', null); py.globals.set('_fcontent', null);
      }
      py.globals.set('_code', code);
      py.globals.set('_stdin', opts.stdin || '');
      py.globals.set('_timeout', opts.timeoutS || 8);
      py.globals.set('_maxev', opts.maxEvents || 2000000);
      py.globals.set('_cid', mountId);
      const raw = py.runPython(`
_run_user(_code, _stdin, _timeout, _maxev, _cid)
`);
      const obj = raw.toJs({ dict_converter: Object.fromEntries });
      raw.destroy();
      obj.hasCanvas = !!document.getElementById(id);
      return obj;
    } catch (e) {
      return { ok: false, stdout: '', prompts: '', error: String(e.message || e), hasCanvas: false };
    }
  }
};

/* 侦测代码需要的第三方包 */
function detectPackages(code) {
  const pkgs = [];
  if (/\bimport\s+matplotlib|from\s+matplotlib\b/.test(code)) pkgs.push('matplotlib');
  if (/\bimport\s+openpyxl|from\s+openpyxl\b/.test(code)) pkgs.push('openpyxl');
  return pkgs;
}

/* 浏览器端无法支持的库 → 中文提示（考点仍在，判题走对照自评） */
const UNSUPPORTED = {
  jieba: 'jieba 分词库无法在浏览器判题环境中加载（官方只有源码包，无 wheel）。本题为“读代码理解”题：请对照参考答案，掌握“jieba.lcut 分词 → 字典计数 → sorted 排序”的套路即可。',
  wordcloud: 'wordcloud 词云库无法在浏览器判题环境中安装（含 C 扩展）。本题为“读代码理解”题：请对照参考答案掌握套路。',
  tkinter: 'tkinter 窗口库无法在浏览器中运行。GUI 题为读代码理解题，请对照参考答案。'
};

function unsupportedCheck(code) {
  for (const [mod, msg] of Object.entries(UNSUPPORTED)) {
    if (new RegExp('\\bimport\\s+' + mod + '\\b|\\bfrom\\s+' + mod + '\\b').test(code)) {
      return '⚠ ' + msg;
    }
  }
  return null;
}

/* ============================================================
 * 注入 Pyodide 的判题 harness（与 tools/harness.py 行为一致）
 * ============================================================ */
const HARNESS_PY = `
import sys, io, time, builtins, traceback, json, os

class _Watchdog(Exception):
    pass

class _Ctx:
    __slots__ = ('inputs', 'i', 'events', 'deadline', 'max_events', 'prompts')

def _run_user(code, stdin_text, timeout_s=8.0, max_events=2000000, canvas_id=None):
    ctx = _Ctx()
    ctx.inputs = stdin_text.split('\\n') if stdin_text != '' else []
    if ctx.inputs and ctx.inputs[-1] == '':
        ctx.inputs.pop()
    ctx.i = 0
    ctx.events = 0
    ctx.max_events = max_events
    ctx.deadline = time.monotonic() + timeout_s
    ctx.prompts = []

    out = io.StringIO()

    def _input(prompt=''):
        if prompt:
            ctx.prompts.append(str(prompt))
        if ctx.i >= len(ctx.inputs):
            raise EOFError('程序请求输入，但测试输入已用完（请检查 input() 调用次数或输入数据）')
        v = ctx.inputs[ctx.i]
        ctx.i += 1
        return v

    def _trace(frame, event, arg):
        ctx.events += 1
        if ctx.events > ctx.max_events or time.monotonic() > ctx.deadline:
            raise _Watchdog('执行超时：程序运行时间过长或存在死循环（判题已中止）')
        return _trace

    env = {'__name__': '__main__', 'input': _input, 'raw_input': _input}

    # turtle 支持：注册 canvas 版 turtle 模块，使 import turtle / from turtle import * 均可用
    _turtle_mod = None
    try:
        import turtle_shim
        _turtle_mod = turtle_shim.make_turtle(canvas_id)
        if _turtle_mod is not None:
            env['turtle'] = _turtle_mod
            sys.modules['turtle'] = _turtle_mod
    except Exception:
        _turtle_mod = None

    saved_stdin = sys.stdin
    saved_stdout = sys.stdout
    sys.stdin = io.StringIO(stdin_text)
    sys.stdout = out
    old_input = builtins.input
    builtins.input = _input
    err = ''
    tb = ''
    try:
        sys.settrace(_trace)
        try:
            exec(compile(code, '<student>', 'exec'), env)
        finally:
            sys.settrace(None)
    except _Watchdog as w:
        err = str(w)
    except EOFError as e:
        err = '输入不足：' + str(e)
    except SystemExit:
        pass
    except BaseException as e:
        err = e.__class__.__name__ + ': ' + str(e)
        tb = ''.join(traceback.format_exception_only(type(e), e)).strip()
    finally:
        builtins.input = old_input
        sys.stdin = saved_stdin
        sys.stdout = saved_stdout
        if _turtle_mod is not None:
            try:
                del sys.modules['turtle']
            except Exception:
                pass

    return {'ok': err == '', 'stdout': out.getvalue(), 'prompts': '\\n'.join(ctx.prompts),
            'error': err, 'tb': tb, 'echo': ''}
`;

/* ============================================================
 * turtle 画布模拟（在 Pyodide 内运行，绘制到页面 canvas）
 * ============================================================ */

const TURTLE_SHIM_SRC = `
import math, types

def _install(js):
    class _Canvas:
        def __init__(self, cid):
            self.cid = cid
            self.cv = None
            self.ctx = None
            if cid:
                doc = js.document
                host = doc.getElementById(cid)
                if host is not None:
                    cv = doc.createElement('canvas')
                    cv.width = 480
                    cv.height = 360
                    cv.setAttribute('data-turtle', '1')
                    cv.style.background = '#fff'
                    cv.style.border = '1px solid #d5dde7'
                    cv.style.maxWidth = '100%'
                    host.appendChild(cv)
                    self.cv = cv
                    self.ctx = cv.getContext('2d')

        def line(self, x1, y1, x2, y2, color, width=2):
            if not self.ctx:
                return
            c = self.ctx
            c.strokeStyle = color
            c.lineWidth = width
            c.beginPath()
            c.moveTo(240 + x1, 180 - y1)
            c.lineTo(240 + x2, 180 - y2)
            c.stroke()

        def dot(self, x, y, color, r=3):
            if not self.ctx:
                return
            c = self.ctx
            c.fillStyle = color
            c.beginPath()
            c.arc(240 + x, 180 - y, r, 0, 2 * math.pi)
            c.fill()

        def poly(self, pts, color):
            if not self.ctx or len(pts) < 3:
                return
            c = self.ctx
            c.fillStyle = color
            c.beginPath()
            c.moveTo(240 + pts[0][0], 180 - pts[0][1])
            for px, py in pts[1:]:
                c.lineTo(240 + px, 180 - py)
            c.closePath()
            c.fill()

        def text(self, x, y, s, color):
            if not self.ctx:
                return
            c = self.ctx
            c.fillStyle = color
            c.font = '14px monospace'
            c.fillText(s, 240 + x, 180 - y)

    class Turtle:
        def __init__(self, cid=None):
            self.wrap = _Canvas(cid)
            self.x, self.y, self.heading = 0.0, 0.0, 0.0
            self.pen_down = True
            self.color_v = '#000000'
            self.fillcolor_v = '#000000'
            self.filling = False
            self.fill_pts = []
            self.speed_v = 6

        def _seg(self, nx, ny):
            if self.pen_down:
                self.wrap.line(self.x, self.y, nx, ny, self.color_v)
            self.x, self.y = nx, ny

        def forward(self, d):
            r = math.radians(self.heading)
            self._seg(self.x + d * math.cos(r), self.y + d * math.sin(r))
        fd = forward

        def backward(self, d):
            self.forward(-d)
        bk = back = backward

        def right(self, a):
            self.heading -= float(a)
        rt = right

        def left(self, a):
            self.heading += float(a)
        lt = left

        def goto(self, x, y=None):
            if y is None:
                x, y = x
            self._seg(float(x), float(y))
        setpos = setposition = goto

        def setx(self, x):
            self._seg(float(x), self.y)

        def sety(self, y):
            self._seg(self.x, float(y))

        def setheading(self, a):
            self.heading = float(a)
        seth = setheading

        def home(self):
            self.goto(0, 0)
            self.setheading(0)

        def circle(self, r, extent=None, steps=None):
            r = float(r)
            extent = 360.0 if extent is None else float(extent)
            steps = steps or max(8, int(abs(extent) / 5))
            if abs(r) < 1e-9:
                return
            cx = self.x + r * math.cos(math.radians(self.heading + 90))
            cy = self.y + r * math.sin(math.radians(self.heading + 90))
            a0 = math.radians(self.heading - 90)
            for i in range(1, steps + 1):
                a = a0 + math.radians(extent) * i / steps
                nx = cx + abs(r) * math.cos(a)
                ny = cy + abs(r) * math.sin(a)
                if r >= 0:
                    self._seg(nx, ny)
                else:
                    self._seg(2 * self.x - nx, 2 * self.y - ny)
            self.heading += extent

        def dot(self, size=1, color=None):
            self.wrap.dot(self.x, self.y, color or self.color_v, max(2, float(size) / 2))

        def penup(self):
            self.pen_down = False
        pu = up = penup

        def pendown(self):
            self.pen_down = True
        pd = down = pendown

        def pencolor(self, *a):
            if a:
                self.color_v = a[0] if len(a) == 1 else '#%02x%02x%02x' % tuple(a)
            return self.color_v

        def fillcolor(self, *a):
            if a:
                self.fillcolor_v = a[0] if len(a) == 1 else '#%02x%02x%02x' % tuple(a)
            return self.fillcolor_v

        def color(self, *a):
            if a:
                self.pencolor(*a[:1])
                if len(a) > 1:
                    self.fillcolor(a[1])
            return (self.color_v, self.fillcolor_v)

        def begin_fill(self):
            self.filling = True
            self.fill_pts = [(self.x, self.y)]

        def end_fill(self):
            if self.filling:
                self.wrap.poly(self.fill_pts, self.fillcolor_v)
            self.filling = False
            self.fill_pts = []

        def write(self, s, *a, **k):
            self.wrap.text(self.x, self.y, str(s), self.color_v)

        def speed(self, s):
            self.speed_v = s

        def hideturtle(self):
            pass
        ht = hideturtle

        def showturtle(self):
            pass
        st = showturtle

        def tracer(self, *a):
            pass

        def update(self):
            pass

        def done(self):
            pass

        def exitonclick(self):
            pass

        def mainloop(self):
            pass

        def screensize(self, *a):
            pass

        def setup(self, *a, **k):
            pass

        def title(self, *a):
            pass

        def bgcolor(self, *a):
            pass

        def colormode(self, *a):
            pass

        def mode(self, *a):
            pass

        def reset(self):
            self.x, self.y, self.heading = 0.0, 0.0, 0.0
            self.pen_down = True

        def clear(self):
            pass

        def position(self):
            return (self.x, self.y)
        pos = position

        def xcor(self):
            return self.x

        def ycor(self):
            return self.y

        def towards(self, *a):
            return 0.0

        def distance(self, *a):
            return 0.0

        def pen(self, *a, **k):
            pass

        def isdown(self):
            return self.pen_down

        def isvisible(self):
            return True

        def window_width(self):
            return 480

        def window_height(self):
            return 360

    class Screen:
        def __getattr__(self, name):
            def _noop(*a, **k):
                return None
            return _noop

    def make_turtle_module(cid):
        mod = types.ModuleType('turtle')
        state = {'t': None}

        def _get():
            if state['t'] is None:
                state['t'] = Turtle(cid)
            return state['t']

        def _module_getattr(name):
            t = _get()
            return getattr(t, name)

        mod.__getattr__ = _module_getattr
        mod.Turtle = Turtle
        mod.Pen = Turtle
        mod.RawTurtle = Turtle
        mod.Screen = Screen
        mod.getscreen = lambda *a, **k: Screen()
        names = ['Turtle', 'Pen', 'RawTurtle', 'Screen', 'getscrenn', 'forward', 'fd',
                 'backward', 'bk', 'back', 'right', 'rt', 'left', 'lt', 'goto', 'setpos',
                 'setposition', 'setx', 'sety', 'setheading', 'seth', 'home', 'circle',
                 'dot', 'penup', 'pu', 'up', 'pendown', 'pd', 'down', 'pencolor',
                 'fillcolor', 'color', 'begin_fill', 'end_fill', 'write', 'speed',
                 'hideturtle', 'ht', 'showturtle', 'st', 'tracer', 'update', 'done',
                 'exitonclick', 'mainloop', 'screensize', 'setup', 'title', 'bgcolor',
                 'colormode', 'reset', 'clear', 'position', 'pos', 'xcor', 'ycor',
                 'towards', 'distance', 'pen', 'isdown', 'isvisible', 'window_width',
                 'window_height']
        names[4] = 'getscreen'
        mod.__all__ = names
        return mod

    return make_turtle_module

def make_turtle(cid):
    import js
    factory = _install(js)
    return factory(cid)
`;

/* 把 turtle shim 注册进 Pyodide（作为独立模块 turtle_shim） */
Engine._installTurtleShim = function () {
  if (!this.pyodide) return;
  this.pyodide.globals.set('_turtle_src', TURTLE_SHIM_SRC);
  this.pyodide.runPython(`
import sys, types
_mod = types.ModuleType('turtle_shim')
exec(compile(_turtle_src, 'turtle_shim.py', 'exec'), _mod.__dict__)
sys.modules['turtle_shim'] = _mod
del _turtle_src
`);
};

/* 包装 _load：在 harness 注入后安装 turtle shim */
const _origLoad = Engine._load.bind(Engine);
Engine._load = async function () {
  const ok = await _origLoad();
  if (ok) {
    try { this._installTurtleShim(); } catch (e) { console.warn('turtle shim 安装失败', e); }
  }
  return ok;
};
