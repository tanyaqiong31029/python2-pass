/* ============================================================
 * Py2 通关 · 主应用（hash 路由 SPA）
 * ============================================================ */

const LEVEL_META = [
  { no: 1,  title: '基础语法与数据类型', sub: '语法元素 · 输入输出 · 运算符 · 六大基本类型' },
  { no: 2,  title: '控制流程与异常',     sub: 'if 分支 · while/for 循环 · break/continue · 异常' },
  { no: 3,  title: '组合数据类型',       sub: '字符串 · 列表 · 元组 · 字典 · 集合' },
  { no: 4,  title: '函数与代码复用',     sub: '参数传递 · 作用域 · 高阶函数 · 递归' },
  { no: 5,  title: '文件与数据分析',     sub: '文件读写 · 编码 · CSV · 词频统计' },
  { no: 6,  title: '常用库与生态',       sub: 'random/math/time · turtle · jieba · 第三方库' },
  { no: 7,  title: '冲刺三级（选学）',   sub: '正则 · SQLite · 面向对象 · GUI · 数据可视化' }
];

const PLAN = [
  { w: 1, date: '第1周', goal: 'L1+L2 基础语法与控制流程', items: ['过一遍 L1、L2 知识点速览并标记已读', '刷完两关全部选择题（目标正确率 ≥80%）', '完成两关全部代码题，重点：input/print、if-elif、while/for、九九乘法表、素数判断'] },
  { w: 2, date: '第2周', goal: 'L3 组合数据类型（重中之重）', items: ['字符串切片/方法、列表增删改排、字典计数、集合去重逐个吃透', '刷完 L3 选择题 + 代码题', '自测：不查资料默写 10 个常用字符串方法'] },
  { w: 3, date: '第3周', goal: 'L4 函数 + 第一次模拟考', items: ['函数定义/参数/作用域/高阶函数全部通关', '完成第一次 150 分钟全真模拟（#mock）', '错题本清零'] },
  { w: 4, date: '第4周', goal: 'L5 文件与数据分析（编程大题主战场）', items: ['文件读写、with 语句、编码、CSV 逐行处理全部通关', '练熟“读文件→split→统计→输出”套路', '每天 1 道文件编程题保持手感'] },
  { w: 5, date: '第5周', goal: 'L6 常用库 + 第二次模拟考', items: ['random/math/time/calendar、turtle 绘图通关', 'jieba/wordcloud 文本分析代码过一遍（能默写套路）', '完成第二次全真模拟'] },
  { w: 6, date: '第6周', goal: 'L7 冲刺提升 + 错题总攻', items: ['正则、SQLite、面向对象选学（冲三级/优秀）', '错题本全部重做至通过', '完成第三次全真模拟'] },
  { w: 7, date: '第7周', goal: '考前保温', items: ['只做错题与已通过题目快速复写', '每天 1 次限时 30 分钟选择题冲刺', '考前一天：休息，检查准考证与考试环境'] }
];

const App = {
  current: '',

  init() {
    State.init();
    window.addEventListener('hashchange', () => this.render());
    this.render();
    // 空闲 3 秒后自动预热判题引擎（不阻塞浏览）
    setTimeout(() => { Engine.ensure(); }, 3000);
    this._tick = setInterval(() => this.updateCountdown(), 30000);
  },

  /* ---------- 路由 ---------- */
  parse() {
    const hash = location.hash.replace(/^#/, '') || 'home';
    return hash.split('/');
  },

  render() {
    const app = document.getElementById('app');
    const parts = this.parse();
    this.current = parts[0];
    document.querySelectorAll('#mainnav a').forEach(a => {
      a.classList.toggle('active', a.dataset.nav === parts[0]);
    });
    this.updateCountdown();
    window.scrollTo(0, 0);
    try {
      if (parts[0] === 'home') return this.viewHome(app);
      if (parts[0] === 'plan') return this.viewPlan(app);
      if (parts[0] === 'bank') return this.viewBank(app);
      if (parts[0] === 'level' && parts[1]) return this.viewLevel(app, +parts[1], parts[2] || 'lesson');
      if (parts[0] === 'mock') return this.viewMock(app);
      if (parts[0] === 'wrong') return this.viewWrong(app);
      if (parts[0] === 'resources') return this.viewResources(app);
      if (parts[0] === 'about') return this.viewAbout(app);
      app.innerHTML = '';
      app.append(h('div', { class: 'card' }, '页面不存在，', h('a', { href: '#home' }, '返回首页')));
    } catch (e) {
      console.error(e);
      app.innerHTML = '';
      app.append(h('div', { class: 'card' }, '页面渲染出错：', String(e.message || e)));
    }
  },

  updateCountdown() {
    const el = document.getElementById('countdown-chip');
    if (!el) return;
    const cd = fmtCountdown(State.examDate());
    el.textContent = `⏳ 距考试 ${cd.text}`;
    const d = new Date(State.examDate());
    el.title = `考试时间：${d.toLocaleString('zh-CN')}（可在首页修改倒计时目标）`;
  },

  /* ============================================================
   * 首页
   * ============================================================ */
  viewHome(app) {
    app.innerHTML = '';
    const prog = State.totalProgress();
    const cleared = LEVEL_META.filter(m => State.levelStat(m.no).cleared).length;

    const hero = h('div', { class: 'hero' },
      h('div', { class: 'hero-main' },
        h('h1', null, '通关这本网站，就是 Python 二级水平'),
        h('p', null, '依据《上海市高等学校信息技术水平考试大纲（2025年版）》制作：7 个关卡覆盖全部考点，浏览器内在线判题（无需装 Python），选择题 + 程序填空 + 调试改错 + 编程题全真题型，通关全部关卡即达到二级要求。')
      ),
      h('div', { class: 'hero-count' },
        h('div', { class: 'lbl' }, '距离考试'),
        h('div', { class: 'num' }, String(fmtCountdown(State.examDate()).d)),
        h('div', { class: 'lbl' }, '天'),
        h('div', { class: 'date' }, new Date(State.examDate()).toLocaleDateString('zh-CN') + ' · 点此', h('a', { href: 'javascript:App.askExamDate()', style: 'color:inherit' }, '修改')),
        h('div', { style: 'margin-top:10px' }, h('a', { class: 'btn btn-sm', href: '#mock' }, '直接开一场模拟考'))
      )
    );

    const progCard = h('div', { class: 'card' },
      h('h2', null, '总进度'),
      h('div', { class: 'progressbar' }, h('div', { style: `width:${(prog * 100).toFixed(1)}%` })),
      h('div', { class: 'progress-meta' },
        h('span', null, `已通过 ${Math.round(prog * 100)}%`),
        h('span', null, `已通关 ${cleared}/${LEVEL_META.length} 关`)
      )
    );

    const map = h('div', { class: 'levelmap' });
    for (const m of LEVEL_META) {
      const st = State.levelStat(m.no);
      const B = window.BANK;
      const mcqN = B.mcq.filter(q => q.level === m.no).length;
      const codeN = B.blanks.filter(q => q.level === m.no).length +
        B.fixes.filter(q => q.level === m.no).length +
        B.coding.filter(q => q.level === m.no).length;
      map.append(
        h('a', { class: 'levelcard' + (st.cleared ? ' done' : ''), href: `#level/${m.no}/lesson` },
          h('div', { class: 'lv-no' }, '0' + m.no),
          h('h3', null, m.title),
          h('div', { class: 'lv-sub' }, m.sub),
          h('div', { class: 'lv-stats' },
            h('span', null, '速览 ', h('b', null, st.read ? '✓' : '○')),
            h('span', null, `选择 ${st.mcqDone}/${mcqN}`),
            h('span', null, `代码 ${st.codeDone}/${codeN}`)
          )
        )
      );
    }

    const quick = h('div', { class: 'card' },
      h('h2', null, '快捷入口'),
      h('div', { style: 'display:flex;gap:10px;flex-wrap:wrap' },
        h('a', { class: 'btn', href: '#level/1/lesson' }, '从第 1 关开始'),
        h('a', { class: 'btn btn-ghost', href: '#bank' }, '按题型刷题'),
        h('a', { class: 'btn btn-ghost', href: '#mock' }, '全真模拟考'),
        h('a', { class: 'btn btn-ghost', href: '#wrong' }, '错题本'),
        h('a', { class: 'btn btn-ghost', href: '#resources' }, '资源库'),
        h('a', { class: 'btn btn-ghost', href: '#about' }, '考试说明')
      )
    );

    app.append(hero, progCard, h('h2', { style: 'margin:18px 0 10px' }, '关卡地图'), map, quick);
  },

  askExamDate() {
    const cur = State.examDate().slice(0, 10);
    const v = prompt('设置考试日期（用于倒计时），格式 2026-11-28：', cur);
    if (v && /^\d{4}-\d{2}-\d{2}/.test(v.trim())) {
      State.setExamDate(v.trim() + ' 09:00');
      this.updateCountdown();
      this.render();
    }
  },

  /* ============================================================
   * 备考计划
   * ============================================================ */
  viewPlan(app) {
    app.innerHTML = '';
    app.append(h('h1', { class: 'page-title' }, '🗓 七周备考计划'), h('p', { class: 'page-sub' }, '从今天到考试日的节奏表：每周一个主攻关卡 + 一场模拟考。可与关卡地图配合使用。'));
    for (const p of PLAN) {
      app.append(h('div', { class: 'plan-week' },
        h('div', { class: 'wk' }, p.date, h('small', null, p.goal.split(' ')[0])),
        h('div', { class: 'wk-body' }, h('b', null, p.goal), h('ul', { style: 'margin:6px 0 0;padding-left:20px' }, p.items.map(i => h('li', null, i))))
      ));
    }
    app.append(h('div', { class: 'notice' }, h('b', null, '提示：'),
      ' 官方等第线不公布，本站模拟考给出的“合格/优秀”是自估参考线（90/128 分）。真正的目标是：每关全部通关 + 至少两次模拟考达到合格线。'));
  },

  /* ============================================================
   * 题库总览
   * ============================================================ */
  viewBank(app) {
    app.innerHTML = '';
    const B = window.BANK;
    app.append(h('h1', { class: 'page-title' }, '📚 题库刷题'), h('p', { class: 'page-sub' },
      `共 ${B.mcq.length} 道单选 · ${B.blanks.length} 道程序填空 · ${B.fixes.length} 道调试改错 · ${B.coding.length} 道编程题`));
    const grid = h('div', { class: 'levelmap' });
    for (const m of LEVEL_META) {
      const st = State.levelStat(m.no);
      grid.append(h('a', { class: 'levelcard' + (st.cleared ? ' done' : ''), href: `#level/${m.no}/mcq` },
        h('h3', null, `第 ${m.no} 关 · ${m.title}`),
        h('div', { class: 'lv-sub' }, m.sub),
        h('div', { class: 'lv-stats' }, h('span', null, `正确率 ${(st.mcqAcc * 100).toFixed(0)}%`), h('span', null, `代码通过 ${st.codeDone}/${st.codeTotal}`))
      ));
    }
    app.append(grid);
  },

  /* ============================================================
   * 关卡页（tabs：知识点 / 单选 / 填空 / 改错 / 编程）
   * ============================================================ */
  viewLevel(app, level, tab) {
    app.innerHTML = '';
    const meta = LEVEL_META.find(m => m.no === level);
    if (!meta) { app.append(h('div', { class: 'card' }, '关卡不存在')); return; }
    const B = window.BANK;
    const st = State.levelStat(level);
    const counts = {
      lesson: st.read ? '✓' : '',
      mcq: B.mcq.filter(q => q.level === level).length,
      blank: B.blanks.filter(q => q.level === level).length,
      fix: B.fixes.filter(q => q.level === level).length,
      coding: B.coding.filter(q => q.level === level).length
    };
    const tabs = h('div', { class: 'tabs' },
      h('a', { href: `#level/${level}/lesson`, class: tab === 'lesson' ? 'active' : '' }, '📖 知识点速览 ', counts.lesson ? h('span', { class: 'done-tick' }, counts.lesson) : ''),
      h('a', { href: `#level/${level}/mcq`, class: tab === 'mcq' ? 'active' : '' }, `✅ 单选题（${counts.mcq}）`),
      counts.blank ? h('a', { href: `#level/${level}/blank`, class: tab === 'blank' ? 'active' : '' }, `✏️ 程序填空（${counts.blank}）`) : null,
      counts.fix ? h('a', { href: `#level/${level}/fix`, class: tab === 'fix' ? 'active' : '' }, `🐞 调试改错（${counts.fix}）`) : null,
      counts.coding ? h('a', { href: `#level/${level}/coding`, class: tab === 'coding' ? 'active' : '' }, `💻 编程题（${counts.coding}）`) : null
    );
    app.append(
      h('h1', { class: 'page-title' }, `第 ${meta.no} 关 · ${meta.title}`),
      h('p', { class: 'page-sub' }, meta.sub),
      tabs
    );
    const box = h('div');
    app.append(box);
    if (tab === 'lesson') this.renderLesson(box, level);
    if (tab === 'mcq') this.renderMcqs(box, level);
    if (tab === 'blank') this.renderCodeTasks(box, 'blank', B.blanks.filter(q => q.level === level));
    if (tab === 'fix') this.renderCodeTasks(box, 'fix', B.fixes.filter(q => q.level === level));
    if (tab === 'coding') this.renderCodeTasks(box, 'coding', B.coding.filter(q => q.level === level));

    // 关底导航
    const next = LEVEL_META.find(m => m.no === level + 1);
    const foot = h('div', { class: 'pagination' });
    if (level > 1) foot.append(h('a', { class: 'btn btn-ghost', href: `#level/${level - 1}/lesson` }, `← 第 ${level - 1} 关`));
    const clearedBanner = st.cleared
      ? h('div', { class: 'tip' }, '🎉 本关已通关！继续保持，前往下一关或直接来一场模拟考检验（', h('a', { href: '#mock' }, '#mock'), '）')
      : h('div', { class: 'notice' }, h('b', null, '通关条件：'), '阅读速览（点“标记已读”）+ 单选题正确率 ≥80% + 本关全部代码题通过。');
    foot.append(next ? h('a', { class: 'btn', href: `#level/${next.no}/lesson` }, `第 ${next.no} 关 →`) : h('a', { class: 'btn', href: '#mock' }, '去模拟考 →'));
    app.append(clearedBanner, foot);
  },

  renderLesson(box, level) {
    const md = window.BANK.lessons[level];
    if (!md) { box.append(h('div', { class: 'card' }, '本关知识点整理中…')); return; }
    const wrap = h('div', { class: 'card lesson' });
    wrap.innerHTML = miniMd(md);
    box.append(wrap);
    box.append(h('div', { style: 'margin:6px 0 20px' },
      h('button', { class: 'btn btn-green', onclick: () => { State.markLessonRead(level); App.render(); } }, State.lessonReadStat(level) ? '✓ 已标记已读（再点一次重新渲染）' : '我已读完本关速览，标记已读')
    ));
  },

  /* ---------- 单选题渲染 ---------- */
  renderMcqs(box, level) {
    const qs = window.BANK.mcq.filter(q => q.level === level);
    if (!qs.length) { box.append(h('div', { class: 'card' }, '本关暂无选择题')); return; }
    let done = 0;
    qs.forEach((q, idx) => {
      const st = State.mcqStat(q.id);
      box.append(this.mcqCard(q, idx + 1, st));
      if (st) done++;
    });
    box.append(h('p', { class: 'muted small' }, `已作答 ${done}/${qs.length} · 重进本页可重做未通过题`));
  },

  mcqCard(q, no, st) {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const card = h('div', { class: 'qcard' });
    card.append(h('div', { class: 'qhead' },
      h('span', { class: 'qno' }, `${no}. `),
      h('span', { class: 'qtag' }, q.topic || '')
    ));
    card.append(h('div', { class: 'qtext', html: miniMdInline(q.q) }));
    const opts = h('div', { class: 'opts' });
    const locked = !!(st && st.correct);   // 答对锁定；答错可重试
    const attempted = !!st;                 // 有作答记录就给即时反馈
    q.opts.forEach((optText, i) => {
      const cls = ['opt'];
      if (locked) {
        cls.push('disabled');
        if (i === q.ans) cls.push('right');
        if (st.choice === i && !st.correct) cls.push('wrong');
      } else if (st && st.choice === i) cls.push('selected');
      const opt = h('div', { class: cls.join(' '), onclick: () => {
        if (locked) return;
        const correct = i === q.ans;
        State.answerMcq(q.id, i, correct);
        // 重绘本题（答错保留反馈并允许再试）
        const nc = App.mcqCard(q, no, State.mcqStat(q.id));
        card.replaceWith(nc);
      } },
        h('span', { class: 'opt-key' }, letters[i] + '.'),
        h('span', { html: miniMdInline(optText) })
      );
      opts.append(opt);
    });
    card.append(opts);
    if (attempted) {
      if (st.correct) {
        card.append(h('div', { class: 'explain' },
          h('span', { class: 'verdict ok' }, '✓ 回答正确　'),
          h('span', { class: 'muted' }, `正确答案：${letters[q.ans]}`),
          h('div', { html: miniMdInline(q.exp || '') })
        ));
      } else {
        // 答错：立即提示，解析与正确答案点按钮后才展开（保留再试的价值）
        const reveal = h('div', { class: 'explain', style: 'display:none' },
          h('span', { class: 'muted' }, `正确答案：${letters[q.ans]}　`),
          h('div', { html: miniMdInline(q.exp || '') }));
        card.append(h('div', { class: 'explain' },
          h('span', { class: 'verdict no' }, '✗ 回答错误，再试一次　'),
          h('button', { class: 'btn btn-ghost btn-sm', onclick: (e) => {
            reveal.style.display = reveal.style.display === 'none' ? 'block' : 'none';
            e.target.textContent = reveal.style.display === 'none' ? '看解析' : '收起解析';
          } }, '看解析')),
          reveal);
      }
    }
    return card;
  },

  /* ---------- 代码题（填空/改错/编程）渲染 ---------- */
  renderCodeTasks(box, kind, qs) {
    if (!qs.length) { box.append(h('div', { class: 'card' }, '本类题目整理中…')); return; }
    const kindName = { blank: '程序填空', fix: '调试改错', coding: '编程题' }[kind];
    box.append(h('div', { class: 'notice' },
      h('b', null, '判题说明：'),
      ' 代码在浏览器内真实运行（首次判题会加载引擎，约 10~20MB，需联网）。程序请求输入时，测试输入会自动喂给 input()；',
      '比对输出时空行与行尾空格会被忽略。若引擎加载失败，可展开参考答案对照自评。'));
    qs.forEach((q, idx) => box.append(this.codeCard(kind, q, idx + 1)));
  },

  codeCard(kind, q, no) {
    const kindName = { blank: '程序填空', fix: '调试改错', coding: '编程题' }[kind];
    const st = State.codeStat(kind, q.id);
    const card = h('div', { class: 'qcard' });
    card.append(h('div', { class: 'qhead' },
      h('span', { class: 'qno' }, `${no}. ${q.title || ''}`),
      h('span', { class: 'qtag' }, kindName + (st && st.passed ? ' · 已通过 ✓' : ''))
    ));
    if (q.desc) card.append(h('div', { class: 'qtext', html: miniMdInline(q.desc) }));

    /* 填空题：空白输入框 */
    let blankInputs = [];
    if (kind === 'blank') {
      const wrap = h('div', { style: 'margin:8px 0' });
      (q.blanks || []).forEach(b => {
        wrap.append(h('div', { style: 'display:flex;gap:8px;align-items:center;margin:4px 0' },
          h('span', { class: 'inline-code', style: 'min-width:52px;text-align:center' }, `第${b.n}空`),
          h('input', { class: 'blank-input', 'data-n': b.n, placeholder: '在此填写代码，如 len(s)', style: 'flex:1;padding:7px 10px;border:1.5px solid var(--line);border-radius:8px;font-family:var(--mono);font-size:13.5px' })
        ));
      });
      card.append(wrap);
      blankInputs = Array.from(card.querySelectorAll('.blank-input'));
    }

    /* 代码编辑器 */
    let editor = null;
    if (kind !== 'blank') {
      const initial = kind === 'fix' ? q.buggy : (q.starter || `# ${q.title || '在此编写代码'}\n`);
      editor = h('textarea', { class: 'code-editor', spellcheck: 'false' });
      editor.value = initial;
      editor.addEventListener('keydown', e => {
        if (e.key === 'Tab') {
          e.preventDefault();
          const s = editor.selectionStart, epos = editor.selectionEnd;
          editor.value = editor.value.slice(0, s) + '    ' + editor.value.slice(epos);
          editor.selectionStart = editor.selectionEnd = s + 4;
        }
      });
      card.append(h('div', { class: 'editor-wrap' }, editor));
    }

    /* 测试输入预览 */
    const tests = kind === 'coding' ? (q.tests || [{ stdin: q.stdin || '', expected: q.expected || '' }]) : [{ stdin: q.stdin || '', expected: q.expected || '' }];
    if (tests.some(t => t.stdin)) {
      card.append(h('div', { class: 'io-label' }, '测试输入（自动喂给 input()）：'));
      tests.forEach(t => { if (t.stdin) card.append(h('pre', { class: 'output' }, t.stdin)); });
    }

    const outBox = h('div');
    card.append(outBox);

    const btnRow = h('div', { style: 'display:flex;gap:10px;margin-top:10px;flex-wrap:wrap' });
    const runBtn = h('button', { class: 'btn btn-green' }, st && st.passed ? '▶ 重新运行判题' : '▶ 运行并判题');
    const showRefBtn = h('button', { class: 'btn btn-ghost btn-sm', style: 'display:none' }, '显示参考答案');
    const refBox = h('div', { style: 'display:none;margin-top:10px' });
    btnRow.append(runBtn, showRefBtn);
    card.append(btnRow, refBox);

    showRefBtn.addEventListener('click', () => {
      if (refBox.style.display === 'none') {
        refBox.style.display = 'block';
        refBox.innerHTML = '';
        refBox.append(h('div', { class: 'io-label' }, '参考答案：'), codeBlock(q.ref || '# 无'));
        if (kind === 'fix' && q.errors) {
          refBox.append(h('div', { class: 'io-label' }, '错误点提示：'));
          q.errors.forEach(e => refBox.append(h('div', { class: 'pitfall' }, `第 ${e.line} 行：${e.hint}`)));
        }
        showRefBtn.textContent = '收起参考答案';
      } else {
        refBox.style.display = 'none';
        showRefBtn.textContent = '显示参考答案';
      }
    });

    runBtn.addEventListener('click', async () => {
      outBox.innerHTML = '';
      runBtn.disabled = true;
      runBtn.textContent = '⏳ 运行中…';
      const canvasBox = h('div', { class: 'canvas-box' });
      let code = '', passes = [], details = [];
      try {
        if (kind === 'blank') {
          const answers = blankInputs.map(inp => inp.value);
          if (answers.some(a => !a.trim())) {
            outBox.append(h('div', { class: 'result-banner fail' }, '请先填写所有空白（每一空都要填）'));
            runBtn.disabled = false; runBtn.textContent = '▶ 运行并判题'; return;
          }
          code = substituteBlanks(q.code, answers);
          outBox.append(canvasBox);
          const r = await Engine.run(code, { stdin: q.stdin || '', files: q.files, mount: canvasBox });
          passes = [r.ok && compareOutput(r.stdout, q.expected || '').ok];
          // 逐空反馈
          const perBlank = (q.blanks || []).map((b, i) => matchBlank(b, answers[i]));
          renderResult(outBox, r, q.expected || '', passes[0], perBlank);
        } else {
          code = editor.value;
          let allPass = true;
          outBox.append(canvasBox);
          for (const t of tests) {
            const r = await Engine.run(code, { stdin: t.stdin || '', files: q.files, mount: canvasBox });
            const cmp = compareOutput(r.stdout, t.expected || '');
            passes.push(r.ok && cmp.ok);
            if (!(r.ok && cmp.ok)) allPass = false;
            details.push({ r, t, cmp });
          }
          renderResult(outBox, null, '', allPass, null, details);
        }
        const passed = passes.every(Boolean);
        State.recordCode(kind, q.id, passed);
        if (passed) showRefBtn.style.display = 'inline-block';
        else if ((State.codeStat(kind, q.id) || {}).tries >= 2) showRefBtn.style.display = 'inline-block';
        // 更新题头状态
        const tag = card.querySelector('.qtag');
        if (tag && passed) tag.textContent = tag.textContent.replace(' · 已通过 ✓', '') + ' · 已通过 ✓';
      } finally {
        runBtn.disabled = false;
        runBtn.textContent = '▶ 重新运行判题';
      }
    });

    return card;
  },

  /* ============================================================
   * 模拟考试
   * ============================================================ */
  viewMock(app) {
    app.innerHTML = '';
    const draft = Mock.load();
    if (Mock.active && draft) return Mock.renderRunning(app);
    if (Mock.lastResult) {
      const r = Mock.lastResult;
      Mock.lastResult = null;
      return Mock.renderResult(app, r);
    }
    const runs = State.data.mockRuns.slice(-5).reverse();
    const hist = runs.length ? h('div', { class: 'card' },
      h('h2', null, '历史成绩'),
      h('table', { class: 'testtable' },
        h('tr', null, h('th', null, '时间'), h('th', null, '得分'), h('th', null, '自估等第')),
        runs.map(r => h('tr', null,
          h('td', null, new Date(r.ts).toLocaleString('zh-CN')),
          h('td', null, String(r.score)),
          h('td', null, r.grade)
        ))
      )) : null;

    app.append(
      h('h1', { class: 'page-title' }, '📝 全真模拟考试'),
      h('p', { class: 'page-sub' }, '按 2025 版大纲试卷结构组卷，150 分钟限时。题目从题库按关卡比例抽取，每次组卷不同。'),
      h('div', { class: 'card' },
        h('table', { class: 'testtable' },
          h('tr', null, h('th', null, '题型'), h('th', null, '题量'), h('th', null, '分值'), h('th', null, '判分方式')),
          h('tr', null, h('td', null, '一、单选题'), h('td', null, '10'), h('td', null, '15'), h('td', null, '每题 1.5 分')),
          h('tr', null, h('td', null, '二、程序填空题'), h('td', null, '3'), h('td', null, '30'), h('td', null, '每空平分 10 分')),
          h('tr', null, h('td', null, '三、调试改错题'), h('td', null, '3'), h('td', null, '30'), h('td', null, '输出正确得满分')),
          h('tr', null, h('td', null, '四、编程题'), h('td', null, '5'), h('td', null, '75'), h('td', null, '按测试点比例给分'))
        ),
        h('p', { class: 'muted small', style: 'margin-bottom:0' },
          `参考等第线：≥${window.CONFIG.gradeLine.pass} 分 合格参考 · ≥${window.CONFIG.gradeLine.excellent} 分 优秀参考（官方分数线不公布，此为自估）。判题依赖浏览器内 Python 引擎，请确保网络可用。`)
      ),
      h('div', { style: 'text-align:center;margin:18px 0' },
        h('button', { class: 'btn btn-green', style: 'font-size:17px;padding:12px 34px', onclick: () => { Mock.start(); } }, '开始模拟考（150 分钟）')
      ),
      hist
    );
  },

  /* ============================================================
   * 错题本
   * ============================================================ */
  viewWrong(app) {
    app.innerHTML = '';
    const items = State.wrongItems();
    app.append(h('h1', { class: 'page-title' }, '📕 错题本'),
      h('p', { class: 'page-sub' }, '做错或尚未通过的题目会出现在这里，通过后自动移出。'));
    if (!items.length) {
      app.append(h('div', { class: 'card', style: 'text-align:center;padding:40px' },
        h('div', { style: 'font-size:40px' }, '🎉'), h('p', null, '错题本是空的，继续保持！')));
      return;
    }
    const B = window.BANK;
    const byKind = { mcq: [], blank: [], fix: [], coding: [] };
    items.forEach(it => byKind[it.kind].push(it.q));
    if (byKind.mcq.length) {
      app.append(h('h2', null, `单选题（${byKind.mcq.length}）`));
      byKind.mcq.forEach((q, i) => app.append(this.mcqCard(q, i + 1, State.mcqStat(q.id))));
    }
    for (const [kind, label] of [['blank', '程序填空'], ['fix', '调试改错'], ['coding', '编程题']]) {
      if (byKind[kind].length) {
        app.append(h('h2', null, `${label}（${byKind[kind].length}）`));
        this.renderCodeTasks(app, kind, byKind[kind]);
      }
    }
  },

  /* ============================================================
   * 资源库
   * ============================================================ */
  viewResources(app) {
    app.innerHTML = '';
    const res = window.BANK.resources || [];
    app.append(h('h1', { class: 'page-title' }, '🔗 资源库'),
      h('p', { class: 'page-sub' }, '全网优质资源精选整合：官方渠道、GitHub 项目、教程与视频。点击直接跳转。'));
    const icons = { official: '🏛', github: '🐙', tutorial: '📖', video: '🎬', tool: '🛠', paper: '📄' };
    const groups = {};
    res.forEach(r => { (groups[r.cat || 'other'] = groups[r.cat || 'other'] || []).push(r); });
    const catNames = { official: '官方渠道', github: 'GitHub 项目', tutorial: '教程与文档', video: '视频课程', tool: '实用工具', paper: '真题与试卷', other: '其他' };
    for (const [cat, items] of Object.entries(groups)) {
      app.append(h('h2', null, `${icons[cat] || '📌'} ${catNames[cat] || cat}`));
      const list = h('div', { class: 'res-list' });
      items.forEach(r => list.append(h('a', { class: 'res-item', href: r.url, target: '_blank', rel: 'noopener' },
        h('span', { class: 'res-ico' }, icons[cat] || '📌'),
        h('span', null, h('b', null, r.title), h('div', { class: 'res-desc' }, r.desc))
      )));
      app.append(list);
    }
  },

  /* ============================================================
   * 关于（考试说明）
   * ============================================================ */
  viewAbout(app) {
    app.innerHTML = '';
    app.append(
      h('h1', { class: 'page-title' }, 'ℹ️ 考试说明与网站使用'),
      h('div', { class: 'card lesson' },
        h('h2', null, '考试基本信息（依据 2025 版考试大纲）'),
        h('table', null,
          h('tr', null, h('th', null, '项目'), h('th', null, '内容')),
          h('tr', null, h('td', null, '考试全称'), h('td', null, '上海市高等学校信息技术水平考试（SCITE）· Python 程序设计及应用（二级）')),
          h('tr', null, h('td', null, '考试方式'), h('td', null, '无纸化上机考试，150 分钟，满分 150 分')),
          h('tr', null, h('td', null, '考试环境'), h('td', null, 'Windows 10 中文版 + Python 3.x（建议 3.8 或 Anaconda3）')),
          h('tr', null, h('td', null, '试卷结构'), h('td', null, '单选 10 题 15 分 · 程序填空 3 题 30 分 · 调试改错 3 题 30 分 · 编程题 5 题 75 分')),
          h('tr', null, h('td', null, '等第'), h('td', null, '不合格 / 二级合格 / 二级优秀 / 三级合格 / 三级优秀（分数线由考委会划定）')),
          h('tr', null, h('td', null, '参考教材'), h('td', null, '李东方等主编《Python 程序设计基础（第3版）》电子工业出版社 2023'))
        ),
        h('h2', null, '二级与三级的分界'),
        h('p', null, '本卷二三级同卷，按得分划等第：二级要求掌握数据类型、基本语句、模块化程序设计、常用算法、函数、文件与基于文本文件的数据分析；三级额外要求递归、数据库、数据可视化、正则提取等（本站第 7 关）。'),
        h('h2', null, '本站判题与真实考试的差异'),
        h('ul', null,
          h('li', null, '真实考试在 Windows + IDLE/PyCharm 等环境中作答，本站在浏览器内运行 Python（Pyodide），个别第三方库（如 wordcloud）浏览器端不支持，相关题目以理解代码为主。'),
          h('li', null, '真实考试改错题要求在修改行尾加 ####### 标记，本站以运行结果判分，不强制标记。'),
          h('li', null, '本站判题对输出做行尾空格/空行宽容处理，并忽略 input 提示文字差异。'),
          h('li', null, '真题回忆与官方模拟卷见资源库。')
        ),
        h('h2', null, '如何使用本站'),
        h('ul', null,
          h('li', null, '按关卡顺序学习：速览 → 单选 → 填空 → 改错 → 编程，全绿即通关。'),
          h('li', null, '进度保存在浏览器本地（localStorage），换浏览器/清缓存会丢失。'),
          h('li', null, '考前两周重点：错题本清零 + 每周一场全真模拟。')
        )
      )
    );
  }
};

/* ---------- 内联 markdown（题目文本用：仅 `code` 与 **b**） ---------- */
function miniMdInline(s) {
  return esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
}

/* ---------- 填空工具 ---------- */
function substituteBlanks(template, answers) {
  let code = template;
  answers.forEach((a, i) => {
    code = code.split(`___(${i + 1})___`).join(a.trim());
  });
  return code;
}

function normAnswer(s) {
  return String(s).replace(/\s+/g, ' ').trim();
}
function matchBlank(blank, answer) {
  const norm = normAnswer(answer);
  const ok = (blank.answers || []).some(a => normAnswer(a) === norm);
  return { n: blank.n, ok };
}

/* ---------- 运行结果渲染 ---------- */
function renderResult(outBox, r, expected, passed, perBlank, details) {
  outBox.innerHTML = '';
  outBox.append(h('div', { class: 'result-banner ' + (passed ? 'pass' : 'fail') },
    passed ? '✅ 通过！运行结果与期望一致。' : '❌ 未通过，请对照下方输出检查。'));
  if (details && details.length > 1) {
    const tb = h('table', { class: 'testtable' },
      h('tr', null, h('th', null, '测试点'), h('th', null, '输入'), h('th', null, '期望输出'), h('th', null, '实际输出'), h('th', null, '结果')));
    details.forEach((d, i) => {
      tb.append(h('tr', null,
        h('td', null, `#${i + 1}`),
        h('td', null, h('pre', { class: 'output', style: 'max-width:160px' }, d.t.stdin || '（无）')),
        h('td', null, h('pre', { class: 'output', style: 'max-width:200px' }, d.t.expected || '')),
        h('td', null, h('pre', { class: 'output', style: 'max-width:200px' }, d.r.stdout || '')),
        h('td', null, h('span', { class: d.passes ? 'pass-cell' : 'fail-cell' }, d.passes ? '✓' : '✗'))
      ));
    });
    outBox.append(tb);
  } else {
    const d = (details && details[0]) || (r ? { r, t: { stdin: '', expected } } : null);
    if (d) {
      outBox.append(h('div', { class: 'io-label' }, '程序输出：'));
      const pre = h('pre', { class: 'output' });
      pre.textContent = d.r.stdout || (d.r.error ? '' : '（无输出）');
      outBox.append(pre);
      if (d.r.error) {
        outBox.append(h('pre', { class: 'output' }, h('span', { class: 'out-err' }, '⚠ ' + d.r.error)));
      }
      if (d.t.expected) {
        outBox.append(h('div', { class: 'io-label' }, '期望输出：'));
        outBox.append(h('pre', { class: 'output' }, d.t.expected));
      }
    }
    if (perBlank) {
      outBox.append(h('div', { style: 'margin-top:8px' },
        perBlank.map(pb => h('span', { style: 'margin-right:12px', class: pb.ok ? 'pass-cell' : 'fail-cell' },
          `第${pb.n}空 ${pb.ok ? '✓' : '✗（可能正确，以整体输出为准）'}`))));
    }
  }
}

/* ============================================================
 * 模拟考控制器
 * ============================================================ */
const Mock = {
  active: false,
  qs: null,
  answers: null,
  endAt: 0,
  timer: null,
  lastResult: null,
  KEY: 'py2pass_mock_v1',

  sample(seed) {
    // 确定性抽取：按关卡比例
    const B = window.BANK;
    const pick = (arr, n, offset) => {
      const byLevel = {};
      arr.forEach(q => { (byLevel[q.level] = byLevel[q.level] || []).push(q); });
      const levels = Object.keys(byLevel).map(Number).sort((a, b) => a - b);
      const out = [];
      let i = 0;
      while (out.length < n) {
        const lv = levels[(offset + i) % levels.length];
        const pool = byLevel[lv].filter(q => !out.includes(q));
        if (pool.length) out.push(pool[(offset * 7 + i * 3) % pool.length]);
        i++;
        if (i > n * 30) break;
      }
      return out.slice(0, n);
    };
    const s = window.CONFIG.mockStructure;
    return {
      mcq: pick(B.mcq, s.mcq.count, seed),
      blank: pick(B.blanks, s.blank.count, seed + 1),
      fix: pick(B.fixes, s.fix.count, seed + 2),
      coding: pick(B.coding, s.coding.count, seed + 3)
    };
  },

  start() {
    const seed = Math.floor(Date.now() / 1000) % 9973;
    this.qs = this.sample(seed);
    this.answers = { mcq: {}, blank: {}, fix: {}, coding: {} };
    this.endAt = Date.now() + window.CONFIG.mockMinutes * 60000;
    this.active = true;
    this.seed = seed;
    this.persist();
    App.render();
    this.timer = setInterval(() => this.tick(), 1000);
  },

  persist() {
    try {
      localStorage.setItem(this.KEY, JSON.stringify({
        active: this.active, seed: this.seed, endAt: this.endAt,
        qs: this.qs, answers: this.answers
      }));
    } catch (e) { /* 题目过大时忽略 */ }
  },

  load() {
    try { return JSON.parse(localStorage.getItem(this.KEY)); } catch (e) { return null; }
  },

  resume() {
    const d = this.load();
    if (d && d.active && d.endAt > Date.now()) {
      this.active = true; this.qs = d.qs; this.answers = d.answers;
      this.endAt = d.endAt; this.seed = d.seed;
      this.timer = setInterval(() => this.tick(), 1000);
      return true;
    }
    if (d) localStorage.removeItem(this.KEY);
    return false;
  },

  tick() {
    const el = document.getElementById('mock-timer-num');
    if (!el) return;
    const left = (this.endAt - Date.now()) / 1000;
    el.textContent = fmtMMSS(left);
    const bar = document.getElementById('mock-timer');
    if (bar) bar.classList.toggle('urgent', left < 300);
    if (left <= 0) this.submit(true);
  },

  abort() {
    if (!confirm('确定放弃本次模拟考吗？进度将清空。')) return;
    this.active = false;
    clearInterval(this.timer);
    localStorage.removeItem(this.KEY);
    App.render();
  },

  /* ---- 渲染进行中的考试 ---- */
  renderRunning(app) {
    const s = window.CONFIG.mockStructure;
    app.innerHTML = '';
    const secOf = { mcq: '一、单选题', blank: '二、程序填空题', fix: '三、调试改错题', coding: '四、编程题' };
    app.append(h('div', { class: 'mock-timer', id: 'mock-timer' },
      h('span', null, '剩余时间'),
      h('span', { class: 't', id: 'mock-timer-num' }, fmtMMSS((this.endAt - Date.now()) / 1000)),
      h('button', { class: 'btn btn-danger btn-sm', onclick: () => Mock.submit(false) }, '交卷')
    ));
    const secTabs = h('div', { class: 'sec-tabs' });
    [['mcq', `单选×${s.mcq.count}`], ['blank', `填空×${s.blank.count}`], ['fix', `改错×${s.fix.count}`], ['coding', `编程×${s.coding.count}`]].forEach(([k, label]) => {
      secTabs.append(h('div', { class: 'sec-tab', onclick: () => document.getElementById('sec-' + k).scrollIntoView({ behavior: 'smooth' }) }, label));
    });
    app.append(secTabs);

    /* 单选 */
    app.append(h('h2', { id: 'sec-mcq' }, secOf.mcq));
    this.qs.mcq.forEach((q, i) => {
      const letters = ['A', 'B', 'C', 'D'];
      const card = h('div', { class: 'qcard' },
        h('div', { class: 'qno' }, `${i + 1}. ${q.q}`));
      const opts = h('div', { class: 'opts' });
      q.opts.forEach((o, j) => {
        const opt = h('div', { class: 'opt' + (this.answers.mcq[q.id] === j ? ' selected' : ''), onclick: () => {
          this.answers.mcq[q.id] = j;
          this.persist();
          opts.querySelectorAll('.opt').forEach((e, jj) => e.classList.toggle('selected', jj === j));
        } }, h('span', { class: 'opt-key' }, letters[j] + '.'), h('span', null, o));
        opts.append(opt);
      });
      card.append(opts);
      app.append(card);
    });

    /* 填空 */
    app.append(h('h2', { id: 'sec-blank' }, secOf.blank));
    this.qs.blank.forEach((q, i) => {
      const card = h('div', { class: 'qcard' },
        h('div', { class: 'qno' }, `${i + 1}. ${q.title || ''}`),
        q.desc ? h('div', { class: 'qtext' }, q.desc) : null,
        codeBlock(q.code));
      const grid = h('div');
      (q.blanks || []).forEach(b => {
        grid.append(h('div', { style: 'display:flex;gap:8px;align-items:center;margin:4px 0' },
          h('span', { class: 'inline-code' }, `第${b.n}空`),
          h('input', { value: this.answers.blank[q.id + '_' + b.n] || '', oninput: (e) => {
            this.answers.blank[q.id + '_' + b.n] = e.target.value;
            this.persist();
          }, style: 'flex:1;padding:6px 10px;border:1.5px solid var(--line);border-radius:8px;font-family:var(--mono);font-size:13.5px' })));
      });
      card.append(grid);
      app.append(card);
    });

    /* 改错 */
    app.append(h('h2', { id: 'sec-fix' }, secOf.fix));
    this.qs.fix.forEach((q, i) => {
      const ta = h('textarea', { class: 'code-editor' });
      ta.value = this.answers.fix[q.id] !== undefined ? this.answers.fix[q.id] : q.buggy;
      ta.addEventListener('input', () => { this.answers.fix[q.id] = ta.value; this.persist(); });
      app.append(h('div', { class: 'qcard' },
        h('div', { class: 'qno' }, `${i + 1}. ${q.title || ''}`),
        q.desc ? h('div', { class: 'qtext' }, q.desc) : null,
        h('div', { class: 'io-label' }, '在下方修改代码（不增删语句，直接改错）：'),
        ta,
        q.stdin ? [h('div', { class: 'io-label' }, '测试输入：'), h('pre', { class: 'output' }, q.stdin)] : null));
    });

    /* 编程 */
    app.append(h('h2', { id: 'sec-coding' }, secOf.coding));
    this.qs.coding.forEach((q, i) => {
      const ta = h('textarea', { class: 'code-editor', style: 'min-height:220px' });
      ta.value = this.answers.coding[q.id] !== undefined ? this.answers.coding[q.id] : (q.starter || '# ' + (q.title || '') + '\n');
      ta.addEventListener('input', () => { this.answers.coding[q.id] = ta.value; this.persist(); });
      app.append(h('div', { class: 'qcard' },
        h('div', { class: 'qno' }, `${i + 1}. ${q.title || ''}`),
        h('div', { class: 'qtext', html: miniMdInline(q.desc || '') }),
        ta,
        q.tests && q.tests.some(t => t.stdin) ? [h('div', { class: 'io-label' }, '测试输入样例：'), h('pre', { class: 'output' }, q.tests.filter(t => t.stdin).map(t => t.stdin).join('---\n'))] : null));
    });

    app.append(h('div', { style: 'text-align:center;margin:24px 0' },
      h('button', { class: 'btn btn-green', style: 'font-size:16px;padding:12px 40px', onclick: () => Mock.submit(false) }, '交卷并评分'),
      ' ',
      h('button', { class: 'btn btn-ghost', onclick: () => Mock.abort() }, '放弃本次')
    ));
    if (!this.timer) this.timer = setInterval(() => this.tick(), 1000);
  },

  /* ---- 评分 ---- */
  async submit(auto) {
    if (!auto && !confirm(auto === false && '确定交卷并评分吗？未判题的编程题将自动判题。')) return;
    clearInterval(this.timer); this.timer = null;
    this.active = false;
    localStorage.removeItem(this.KEY);
    const s = window.CONFIG.mockStructure;
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.append(h('h1', { class: 'page-title' }, '正在评分…'),
      h('p', { class: 'page-sub' }, '编程题需要在浏览器内运行判题，请保持页面打开。'));

    let score = 0;
    const detail = [];

    // 单选
    let mcqScore = 0;
    this.qs.mcq.forEach(q => {
      const a = this.answers.mcq[q.id];
      const right = a === q.ans;
      if (right) mcqScore += s.mcq.perScore;
      State.answerMcq(q.id, a === undefined ? -1 : a, right);
      detail.push({ kind: '单选', title: (q.title || q.q).slice(0, 24), score: right ? s.mcq.perScore : 0, full: s.mcq.perScore });
    });
    score += mcqScore;

    // 填空（逐空给分）
    for (const q of this.qs.blank) {
      const per = s.blank.perScore / (q.blanks || []).length;
      let got = 0;
      (q.blanks || []).forEach(b => {
        const a = this.answers.blank[q.id + '_' + b.n] || '';
        const ok = matchBlank(b, a).ok;
        if (ok) got += per;
      });
      score += got;
      detail.push({ kind: '填空', title: q.title || '', score: got, full: s.blank.perScore });
    }

    // 改错（输出比对）
    for (const q of this.qs.fix) {
      const code = this.answers.fix[q.id] !== undefined ? this.answers.fix[q.id] : q.buggy;
      const r = await Engine.run(code, { stdin: q.stdin || '', files: q.files });
      const cmp = compareOutput(r.stdout, q.expected || '');
      const ok = r.ok && cmp.ok;
      if (ok) score += s.fix.perScore;
      detail.push({ kind: '改错', title: q.title || '', score: ok ? s.fix.perScore : 0, full: s.fix.perScore });
    }

    // 编程（按测试点）
    for (const q of this.qs.coding) {
      const code = this.answers.coding[q.id] !== undefined ? this.answers.coding[q.id] : (q.starter || '');
      const tests = q.tests && q.tests.length ? q.tests : [{ stdin: q.stdin || '', expected: q.expected || '' }];
      let passedN = 0;
      for (const t of tests) {
        const r = await Engine.run(code, { stdin: t.stdin || '', files: q.files });
        if (r.ok && compareOutput(r.stdout, t.expected || '').ok) passedN++;
      }
      const got = s.coding.perScore * passedN / tests.length;
      score += got;
      detail.push({ kind: '编程', title: q.title || '', score: got, full: s.coding.perScore });
    }

    score = Math.round(score * 10) / 10;
    const grade = score >= window.CONFIG.gradeLine.excellent ? '优秀（自估）' :
      score >= window.CONFIG.gradeLine.pass ? '合格（自估）' : '不合格（自估参考）';
    const run = { ts: Date.now(), score, grade, detail };
    State.addMockRun(run);
    this.lastResult = run;
    App.render();
  },

  /* ---- 结果页 ---- */
  renderResult(app, r) {
    app.innerHTML = '';
    const passed = r.score >= window.CONFIG.gradeLine.pass;
    app.append(
      h('div', { class: 'card score-hero' },
        h('div', { class: 'big' }, String(r.score)),
        h('div', { class: 'muted' }, '/ 150 分'),
        h('div', null, h('span', { class: 'grade-tag ' + (passed ? 'pass' : 'fail') }, r.grade)),
        h('div', { class: 'muted small' }, `参考线：合格 ${window.CONFIG.gradeLine.pass} / 优秀 ${window.CONFIG.gradeLine.excellent}`),
        h('div', { style: 'margin-top:14px' },
          h('a', { class: 'btn', href: '#wrong' }, '去错题本复盘'),
          ' ',
          h('a', { class: 'btn btn-ghost', href: '#mock' }, '再来一场'))
      ),
      h('div', { class: 'card' },
        h('h2', null, '逐题得分'),
        h('table', { class: 'testtable' },
          h('tr', null, h('th', null, '题型'), h('th', null, '题目'), h('th', null, '得分'), h('th', null, '满分')),
          r.detail.map(d => h('tr', null,
            h('td', null, d.kind),
            h('td', null, d.title),
            h('td', null, String(Math.round(d.score * 10) / 10)),
            h('td', null, String(d.full))))
        ))
    );
  }
};

/* ---------- 启动 ---------- */
document.addEventListener('DOMContentLoaded', () => {
  App.init();
  // 若有进行中的模拟考，恢复之
  if (Mock.resume() && App.current === 'mock') {
    App.render();
  }
});
