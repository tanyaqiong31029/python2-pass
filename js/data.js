/* 本文件由 tools/build_data.py 自动生成，请勿手改；源数据在 data_src/ */
window.BANK = {
 "mcq": [
  {
   "id": "mcq-l1-001",
   "level": 1,
   "topic": "标识符与关键字",
   "q": "下列选项中，不能作为 Python 变量名的是____。",
   "opts": [
    "_score",
    "2nd_name",
    "myVar",
    "姓名"
   ],
   "ans": 1,
   "exp": "变量名不能以数字开头。2nd_name 以数字 2 开头，非法；下划线和中文都可以作为变量名（Python 3 支持中文标识符）。",
   "difficulty": 1
  },
  {
   "id": "mcq-l1-002",
   "level": 1,
   "topic": "数据类型与类型转换",
   "q": "表达式 eval('3') + 2.0 的值及其类型是____。",
   "opts": [
    "5，整数",
    "5.0，浮点数",
    "'5.0'，字符串",
    "报错"
   ],
   "ans": 1,
   "exp": "eval('3') 得到整数 3，3 + 2.0 中整数与浮点数混合运算会自动转换为浮点数，结果为 5.0。",
   "difficulty": 1
  },
  {
   "id": "mcq-l3-001",
   "level": 3,
   "topic": "字典",
   "q": "下列语句中，不能创建一个字典的是____。",
   "opts": [
    "d = {}",
    "d = {4:6}",
    "d = {(4,5,6):'x'}",
    "d = {[4,5,6]:'x'}"
   ],
   "ans": 3,
   "exp": "字典的键必须是不可变（可哈希）对象。列表 [4,5,6] 是可变对象，不能作键；元组、数字都可以。空花括号 {} 创建空字典。",
   "difficulty": 1
  }
 ],
 "blanks": [
  {
   "id": "blk-l2-001",
   "level": 2,
   "title": "密码强度判断",
   "desc": "输入一串字符作为密码（输入空串结束循环），判断其强度：长度不少于 8 位记 1 分，含数字记 1 分，含大写字母记 1 分，含小写字母记 1 分；合计 1-2 分为弱，3 分为中，4 分为强。",
   "code": "def judge(passwd):\n    plen = 0\n    if ___(1)___ >= 8:\n        plen = 1\n    pnum, pupper, plower = False, False, False\n    for ch in passwd:\n        if ch in '0123456789':\n            pnum = True\n        if 'A' <= ch <= 'Z':\n            pupper = True\n        if 'a' <= ch <= 'z':\n            plower = True\n    result = plen + pnum + pupper + plower\n    return result\n\nwhile True:\n    pw = input()\n    if pw == '':\n        ___(2)___\n    s = judge(pw)\n    if s <= 2:\n        print('弱密码')\n    elif s == 3:\n        print('中等密码')\n    else:\n        print('强密码')",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "len(passwd)"
     ],
     "hint": "求密码字符串的长度"
    },
    {
     "n": 2,
     "answers": [
      "break"
     ],
     "hint": "空串时退出无限循环"
    }
   ],
   "stdin": "Abc12345\nweakpw\n\n",
   "expected": "强密码\n弱密码",
   "ref": "def judge(passwd):\n    plen = 0\n    if len(passwd) >= 8:\n        plen = 1\n    pnum, pupper, plower = False, False, False\n    for ch in passwd:\n        if ch in '0123456789':\n            pnum = True\n        if 'A' <= ch <= 'Z':\n            pupper = True\n        if 'a' <= ch <= 'z':\n            plower = True\n    result = plen + pnum + pupper + plower\n    return result\n\nwhile True:\n    pw = input()\n    if pw == '':\n        break\n    s = judge(pw)\n    if s <= 2:\n        print('弱密码')\n    elif s == 3:\n        print('中等密码')\n    else:\n        print('强密码')",
   "hint": "布尔值参与加法运算时 True 等于 1、False 等于 0",
   "exp": "考查 len() 求长度、break 退出无限循环、布尔值累加计数与 if-elif 多分支。"
  }
 ],
 "fixes": [
  {
   "id": "fix-l2-001",
   "level": 2,
   "title": "打印数字三角形",
   "desc": "输入一个 1-9 之间的正整数 n，打印 n 行数字三角形：第 m 行输出 1 到 m 的数字连在一起。若 n 不在 1-9 范围内则输出提示语。程序中有 3 处错误，请修改（不增删语句）。",
   "buggy": "line = input()\nn = int(line)\nif n > 9:\n    for m in range(1, n + 1):\n        for i in range(1, m + 1):\n            print(i, end='')\n        print()\nelse:\n    print('输入的行数不能超过9！')",
   "stdin": "4\n",
   "expected": "1\n12\n123\n1234",
   "errors": [
    {
     "line": 3,
     "hint": "题目要求 1-9 之间打印三角形，范围判断条件写反了"
    },
    {
     "line": 7,
     "hint": "每个数字打印后要换行，print() 的位置与内层循环的关系要想清楚"
    },
    {
     "line": 8,
     "hint": "else 分支对应的提示语在输入合法时也会被检查"
    }
   ],
   "ref": "line = input()\nn = int(line)\nif n <= 9:\n    for m in range(1, n + 1):\n        for i in range(1, m + 1):\n            print(i, end='')\n        print()\nelse:\n    print('输入的行数不能超过9！')",
   "exp": "考查 if 选择结构、range 范围、嵌套循环与 print 的 end 参数。"
  }
 ],
 "coding": [
  {
   "id": "code-l5-001",
   "level": 5,
   "title": "书籍评论数统计",
   "desc": "当前目录下有 data.csv，存放某网站出售的书籍数据（首行为标题行，UTF-8 编码），列依次为：书名,作者,出版年,价格,出版社,评论数。程序输入一个评论数阈值（整数），列出评论数不小于该阈值的书籍信息：每行输出\"书名 评论数\"（用空格分隔，按文件原顺序），最后输出一行\"共N本\"（N 为符合条件的书籍数量）。",
   "files": [
    {
     "name": "data.csv",
     "content": "书名,作者,出版年,价格,出版社,评论数\n人工智能基础,张三,2019,59,清华出版社,1200\nPython入门,李四,2020,49,电子出版社,800\n深度学习,王五,2018,89,机械出版社,2500\n数据挖掘,赵六,2021,69,人民邮电出版社,900\n"
    }
   ],
   "starter": "# 读入 data.csv，统计评论数达到阈值的书籍\n",
   "tests": [
    {
     "stdin": "1000\n",
     "expected": "人工智能基础 1200\n深度学习 2500\n共2本"
    },
    {
     "stdin": "800\n",
     "expected": "人工智能基础 1200\nPython入门 800\n深度学习 2500\n数据挖掘 900\n共4本"
    }
   ],
   "ref": "f = open('data.csv', 'r', encoding='utf-8')\nnext(f)\nn = int(input())\ntotal = 0\nfor line in f:\n    parts = line.strip().split(',')\n    comment = int(parts[5])\n    if comment >= n:\n        total += 1\n        print(parts[0], comment)\nf.close()\nprint('共{}本'.format(total))",
   "hint": "用 next(f) 跳过标题行；每行先 strip() 去掉换行再 split(',')；输出用 print(书名, 评论数) 自动加空格",
   "exp": "综合考查文件打开与遍历、字符串切分、类型转换、条件筛选与计数、格式化输出——正是考试编程大题的典型套路。",
   "tags": [
    "文件",
    "字符串",
    "循环"
   ]
  }
 ],
 "lessons": {},
 "resources": []
};
