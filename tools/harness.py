"""本地判题 harness —— 与 js/runner.js 中 HARNESS_PY 行为完全一致。

约定：
- input() 的提示文字单独捕获（不进入 stdout），
- stdin_text 按行喂给 input()，
- stdout 捕获 print 输出，
- settrace 看门狗防死循环。
"""

import io
import sys
import time
import builtins
import traceback


class Watchdog(Exception):
    pass


def run_user(
    code: str, stdin_text: str, timeout_s: float = 8.0, max_events: int = 2_000_000
):
    """运行用户代码，返回 dict(ok, stdout, prompts, error, tb)。

    与浏览器 HARNESS_PY 保持一致：prompt 进 prompts，不进 stdout。
    """
    inputs = stdin_text.split("\n") if stdin_text != "" else []
    if inputs and inputs[-1] == "":
        inputs.pop()

    ctx = {
        "i": 0,
        "events": 0,
        "max_events": max_events,
        "deadline": time.monotonic() + timeout_s,
        "prompts": [],
    }
    out = io.StringIO()

    def _input(prompt=""):
        if prompt:
            ctx["prompts"].append(str(prompt))
        if ctx["i"] >= len(inputs):
            raise EOFError("程序请求输入，但测试输入已用完")
        v = inputs[ctx["i"]]
        ctx["i"] += 1
        return v

    def _trace(frame, event, arg):
        ctx["events"] += 1
        if ctx["events"] > ctx["max_events"] or time.monotonic() > ctx["deadline"]:
            raise Watchdog("执行超时：程序运行时间过长或存在死循环")
        return _trace

    env = {"__name__": "__main__", "input": _input, "raw_input": _input}
    saved_stdin, saved_stdout = sys.stdin, sys.stdout
    sys.stdin = io.StringIO(stdin_text)
    sys.stdout = out
    old_input = builtins.input
    builtins.input = _input
    err = ""
    tb = ""
    try:
        sys.settrace(_trace)
        try:
            exec(compile(code, "<student>", "exec"), env)
        finally:
            sys.settrace(None)
    except Watchdog as w:
        err = str(w)
    except EOFError as e:
        err = "输入不足：" + str(e)
    except SystemExit:
        pass
    except BaseException as e:
        err = e.__class__.__name__ + ": " + str(e)
        tb = "".join(traceback.format_exception_only(type(e), e)).strip()
    finally:
        builtins.input = old_input
        sys.stdin, sys.stdout = saved_stdin, saved_stdout

    return {
        "ok": err == "",
        "stdout": out.getvalue(),
        "prompts": "\n".join(ctx["prompts"]),
        "error": err,
        "tb": tb,
    }
