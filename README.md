# Py2 通关 🐍 · 上信考 Python 二级特训

**通关这本网站 ≈ 达到上海市高等学校信息技术水平考试（SCITE）Python 程序设计及应用（二级）的水平。**

依据《上海市高等学校信息技术水平考试大纲（2025 年版）》制作，纯静态站点，无需安装任何东西：

- **7 个关卡** 覆盖大纲全部考点（L1 基础语法 → L7 冲刺三级选学），每关 = 知识点速览 + 单选题 + 程序填空 + 调试改错 + 编程题
- **浏览器内在线判题**（Pyodide/WebAssembly 真实运行 Python，防死循环看门狗），无需本地装 Python
- **全真模拟考**：单选 10 题 15 分 + 填空 3 题 30 分 + 改错 3 题 30 分 + 编程 5 题 75 分，150 分钟计时，按测试点给分
- **通关制进度**：速览已读 + 单选正确率 ≥80% + 代码题全部通过 = 本关通关；总进度、错题本自动维护（localStorage）
- **题库全部经构建工具校验**：每道代码题的参考答案都在本地真实运行过、输出与期望逐字符一致（`tools/build_data.py`）

## 在线使用

开启 GitHub Pages 后直接访问：`https://tanyaqiong31029.github.io/python2-pass/`

本地使用：克隆后双击 `index.html` 即可（数据以 JS 文件加载，无跨域问题；判题引擎需联网首次加载约 10~20MB）。

## 快速开始（备考者视角）

1. 首页看倒计时和总进度，按 **7 周备考计划**（`#plan`）推进
2. 每关按 **速览 → 单选 → 填空 → 改错 → 编程** 顺序打，全绿即通关
3. 第 3/5/6 周各来一场 **全真模拟考**（`#mock`），错题进 **错题本**（`#wrong`）自动复盘
4. 考前一周：错题本清零 + 资源库（`#resources`）里的官方模拟卷做一遍

## 仓库结构

```
python2-pass/
├── index.html            # 单页应用入口
├── css/style.css         # 样式
├── js/
│   ├── config.js         # 全局配置（考试日期、判题 CDN、等第线）
│   ├── data.js           # 题库与课程（由 tools/build_data.py 生成，勿手改）
│   ├── app.js            # 路由、视图、模拟考控制器
│   ├── runner.js         # Pyodide 判题引擎 + turtle 画布模拟
│   ├── state.js          # 学习进度（localStorage）
│   └── util.js           # 工具（语法高亮/输出比对/markdown）
├── data_src/             # 题库源数据（JSON）+ 编写规范 SCHEMA.md
├── tools/
│   ├── build_data.py     # 题库校验 + 打包：运行参考答案验证期望输出
│   └── harness.py        # 本地判题 harness（与浏览器端行为一致）
└── .github/workflows/    # GitHub Pages 部署
```

## 维护题库（贡献者视角）

```bash
# 1. 编辑 data_src/*.json（规范见 data_src/SCHEMA.md）
# 2. 校验并打包（会真实运行每道题的参考答案）
python3 tools/build_data.py
# 3. 提交后自动部署到 GitHub Pages
```

## 考试速查（依据 2025 版大纲）

| 题型 | 题量 | 分值 |
| --- | --- | --- |
| 一、单选题 | 10 | 15 |
| 二、程序填空题 | 3 | 30 |
| 三、调试改错题 | 3 | 30 |
| 四、编程题 | 5 | 75 |
| 合计 | 21 | 150 |

- 考试时间 150 分钟，满分 150 分；等第：不合格/二级合格/二级优秀/三级合格/三级优秀
- 环境：Windows 10 + Python 3.x（建议 3.8 / Anaconda3）
- 二级要求：数据类型、基本语句、模块化程序设计、常用算法、函数、文件与基于文本文件的数据分析；三级在此基础上加递归、数据库、数据可视化、正则（本站 L7）
- 官方渠道：https://scite.shmeea.edu.cn （大纲与模拟试卷下载）

## 技术说明

- 判题：[Pyodide](https://github.com/pyodide/pyodide)（多 CDN 回退），`input()` 提示文字单独捕获不污染输出比对，`settrace` 看门狗防死循环，turtle 用 canvas 模拟层承接
- 已知限制：jieba/wordcloud/tkinter 无法在浏览器运行，相关考点以"读代码理解 + 对照参考答案自评"形式呈现（题库中已规避为选择题或纯标准库题）
- 兼容 localStorage 的现代浏览器；进度数据仅存本地

## License

MIT（题库与站点自创内容）；外链资源归原作者所有。
