/* 本文件由 tools/build_data.py 自动生成，请勿手改；源数据在 data_src/ */
window.BANK = {
 "mcq": [
  {
   "id": "mcq-l1-001",
   "level": 1,
   "topic": "标识符规则",
   "q": "下列选项中，不能作为 Python 变量名的是____。",
   "opts": [
    "_score",
    "my_var",
    "2nd_name",
    "姓名"
   ],
   "ans": 2,
   "exp": "变量名只能由字母、数字和下划线组成，且不能以数字开头。2nd_name 以数字 2 开头，非法；下划线和中文都可以作变量名。",
   "difficulty": 1
  },
  {
   "id": "mcq-l1-002",
   "level": 1,
   "topic": "关键字",
   "q": "下列选项中，属于 Python 关键字（保留字）的是____。",
   "opts": [
    "def",
    "printf",
    "function",
    "include"
   ],
   "ans": 0,
   "exp": "def 是定义函数的关键字，不能用作变量名；printf、function、include 都是普通标识符，不是 Python 关键字。",
   "difficulty": 1
  },
  {
   "id": "mcq-l1-003",
   "level": 1,
   "topic": "书写格式",
   "q": "下列关于 Python 程序书写格式的说法，正确的是____。",
   "opts": [
    "Python 使用大括号 {} 划分代码块",
    "同一层级的语句缩进必须保持一致",
    "一行内绝对不能写多条语句",
    "注释只能单独占一行"
   ],
   "ans": 1,
   "exp": "Python 靠缩进表示代码块，同一层级缩进不一致会报错。C 错：可用分号在一行写多条语句（不推荐）；D 错：# 注释也可以写在行尾。",
   "difficulty": 1
  },
  {
   "id": "mcq-l1-004",
   "level": 1,
   "topic": "编程环境与运行步骤",
   "q": "下列关于 Python 程序编写与运行的说法，错误的是____。",
   "opts": [
    "Python 源程序文件通常以 .py 为扩展名",
    "在 IDLE 中新建文件编写程序后，可按 F5 运行",
    "可以在命令行用 python 文件名.py 的方式运行程序",
    "Python 程序只能在交互式环境中逐行执行，不能整段运行"
   ],
   "ans": 3,
   "exp": "Python 程序既可以交互式逐行执行，也可以保存为 .py 文件整段运行：IDLE 中按 F5（Run Module）或命令行 python 文件名.py。A、B、C 均正确。",
   "difficulty": 1
  },
  {
   "id": "mcq-l1-005",
   "level": 1,
   "topic": "input() 函数",
   "q": "执行 `x = input()`，从键盘输入 123，则变量 x 的类型和值是____。",
   "opts": [
    "整型，值为 123",
    "字符串，值为 '123'",
    "浮点型，值为 123.0",
    "列表，值为 ['1', '2', '3']"
   ],
   "ans": 1,
   "exp": "input() 的返回值永远是字符串，输入 123 得到的是 '123'；要参与算术运算需先用 int() 或 eval() 转换。",
   "difficulty": 1
  },
  {
   "id": "mcq-l1-006",
   "level": 1,
   "topic": "eval() 与 input() 组合",
   "q": "有如下程序：\nx = eval(input())\nprint(x)\n运行时输入 3+4，则输出结果是____。",
   "opts": [
    "'3+4'",
    "3+4",
    "7",
    "程序报错"
   ],
   "ans": 2,
   "exp": "eval() 把输入的字符串 '3+4' 当作 Python 表达式求值，结果为 7。若不用 eval()，input() 只能返回字符串 '3+4'。",
   "difficulty": 2
  },
  {
   "id": "mcq-l1-007",
   "level": 1,
   "topic": "print() 与 sep",
   "q": "`print('a', 'b', 'c', sep='*')` 的输出结果是____。",
   "opts": [
    "a*b*c",
    "abc",
    "a, b, c",
    "a b c"
   ],
   "ans": 0,
   "exp": "sep 参数指定多个输出项之间的分隔符，默认是空格，这里改为 *，故输出 a*b*c。",
   "difficulty": 1
  },
  {
   "id": "mcq-l1-008",
   "level": 1,
   "topic": "print() 与 end",
   "q": "有如下程序：\nprint(1, end='')\nprint(2)\nprint(3)\n输出结果是____。",
   "opts": [
    "1、2、3 各占一行输出",
    "123 在一行输出",
    "1 2 3 在一行输出（空格分隔）",
    "12 在一行、3 在一行输出"
   ],
   "ans": 3,
   "exp": "end 默认是换行符，改为 '' 后第一个 print 不换行，1 和 2 连在一行；print(2) 末尾换行，所以 3 单独一行。",
   "difficulty": 2
  },
  {
   "id": "mcq-l1-009",
   "level": 1,
   "topic": "整型",
   "q": "下列关于 Python 整型（int）的说法，正确的是____。",
   "opts": [
    "Python 整数的大小不受限制，可以表示任意大的整数",
    "整数的长度不能超过 32 位",
    "3.0 属于整型",
    "整型和浮点型不能混合运算"
   ],
   "ans": 0,
   "exp": "Python 整数采用任意精度，可以表示很大的数。3.0 是浮点型；整型与浮点型可以混合运算，结果为浮点型。",
   "difficulty": 1
  },
  {
   "id": "mcq-l1-010",
   "level": 1,
   "topic": "浮点型与误差",
   "q": "`print(0.1 + 0.2 == 0.3)` 的输出结果是____。",
   "opts": [
    "True",
    "False",
    "0.3",
    "程序报错"
   ],
   "ans": 1,
   "exp": "浮点数以二进制存储存在精度误差，0.1 + 0.2 的实际值是 0.30000000000000004，不等于 0.3，故输出 False。",
   "difficulty": 2
  },
  {
   "id": "mcq-l1-011",
   "level": 1,
   "topic": "复数",
   "q": "有如下程序：\nz = 3 + 4j\nprint(z.real, z.imag)\n输出结果是____。",
   "opts": [
    "3 4",
    "4.0 3.0",
    "3.0 4.0",
    "程序报错"
   ],
   "ans": 2,
   "exp": "复数以 j 表示虚部，.real 取实部、.imag 取虚部，两个属性的值都是浮点型，输出 3.0 4.0。",
   "difficulty": 2
  },
  {
   "id": "mcq-l1-012",
   "level": 1,
   "topic": "字符串不可变性",
   "q": "有如下程序：\ns = 'abc'\ns[0] = 'd'\n运行结果是____。",
   "opts": [
    "s 变为 'dbc'",
    "s 变为 'dabc'",
    "s 变为 'abcd'",
    "程序报错（TypeError）"
   ],
   "ans": 3,
   "exp": "字符串是不可变类型，不能对其中某个字符赋值，执行 s[0]='d' 抛出 TypeError；只能重新赋值整个字符串或用 replace 生成新串。",
   "difficulty": 2
  },
  {
   "id": "mcq-l1-013",
   "level": 1,
   "topic": "布尔型",
   "q": "`print(True + True)` 的输出结果是____。",
   "opts": [
    "2",
    "TrueTrue",
    "1",
    "程序报错"
   ],
   "ans": 0,
   "exp": "布尔型是整型的子类，True 相当于 1、False 相当于 0，所以 True+True 参与算术运算结果为 2。",
   "difficulty": 2
  },
  {
   "id": "mcq-l1-014",
   "level": 1,
   "topic": "None",
   "q": "下列关于 None 的说法，正确的是____。",
   "opts": [
    "None 与 0 相等",
    "None 表示空值，其类型是 NoneType",
    "None 就是空字符串",
    "变量未赋值时其值自动为 None"
   ],
   "ans": 1,
   "exp": "None 是 NoneType 类型的唯一值，表示空值；None == 0 和 None == '' 都是 False，使用未赋值的变量会报 NameError 而不是得到 None。",
   "difficulty": 2
  },
  {
   "id": "mcq-l1-015",
   "level": 1,
   "topic": "链式赋值",
   "q": "有如下程序：\na = b = c = 10\na = 20\nprint(b)\n输出结果是____。",
   "opts": [
    "20",
    "30",
    "10",
    "程序报错"
   ],
   "ans": 2,
   "exp": "链式赋值 a=b=c=10 使三个变量都指向整数 10；对 a 重新赋值只是让 a 指向 20，不影响 b，故输出 10。",
   "difficulty": 1
  },
  {
   "id": "mcq-l1-016",
   "level": 1,
   "topic": "多重赋值与交换",
   "q": "有如下程序：\na, b = 3, 5\na, b = b, a\nprint(a, b)\n输出结果是____。",
   "opts": [
    "3 5",
    "3 3",
    "5 5",
    "5 3"
   ],
   "ans": 3,
   "exp": "多重赋值 a, b = b, a 先把右侧按原值组成元组 (5, 3)，再分别赋给 a、b，实现两变量交换，输出 5 3。",
   "difficulty": 1
  },
  {
   "id": "mcq-l1-017",
   "level": 1,
   "topic": "多重赋值求值顺序",
   "q": "有如下程序：\na, b = 1, 2\na, b = b, a + b\nprint(a, b)\n输出结果是____。",
   "opts": [
    "2 3",
    "2 2",
    "2 4",
    "1 3"
   ],
   "ans": 0,
   "exp": "多重赋值先整体求右侧：按旧值算出 (b, a+b) 即 (2, 3)，再同时赋给 a、b。误认为 a 先变成 2 再算 a+b 会错选 2 4。",
   "difficulty": 3
  },
  {
   "id": "mcq-l1-018",
   "level": 1,
   "topic": "类型转换 int()",
   "q": "下列语句中，运行时会报错的是____。",
   "opts": [
    "int('12')",
    "int(3.9)",
    "int('3.5')",
    "int(True)"
   ],
   "ans": 2,
   "exp": "int() 直接转换字符串时要求是合法的整数形式，int('3.5') 抛出 ValueError；int(3.9) 截断小数得 3，int(True) 得 1。",
   "difficulty": 2
  },
  {
   "id": "mcq-l1-019",
   "level": 1,
   "topic": "类型转换 float()/str()",
   "q": "`print(float('3') + 1, str(3) + '5')` 的输出结果是____。",
   "opts": [
    "4 35",
    "4.0 35",
    "4.0 '35'",
    "程序报错"
   ],
   "ans": 1,
   "exp": "float('3') 得 3.0，加 1 为 4.0；str(3) 得 '3'，与 '5' 拼接为 '35'，print 输出时不带引号，结果为 4.0 35。",
   "difficulty": 2
  },
  {
   "id": "mcq-l1-020",
   "level": 1,
   "topic": "eval() 函数",
   "q": "下列关于 eval() 函数的说法，正确的是____。",
   "opts": [
    "eval() 用于把整数转换成字符串",
    "eval() 只能处理整数字符串",
    "eval() 与 int() 的功能完全相同",
    "eval() 把字符串作为 Python 表达式求值并返回结果"
   ],
   "ans": 3,
   "exp": "eval() 去掉字符串引号并按表达式求值，如 eval('3*4') 得 12；它不仅能转数字，还能计算表达式，与 int() 不同。",
   "difficulty": 1
  },
  {
   "id": "mcq-l1-021",
   "level": 1,
   "topic": "整除与取余",
   "q": "`print(17 // 5, 17 % 5)` 的输出结果是____。",
   "opts": [
    "3 2",
    "3.4 2",
    "3 3",
    "2 3"
   ],
   "ans": 0,
   "exp": "// 是整除（向下取整），17//5=3；% 是取余数，17%5=2，满足 17 = 5*3 + 2。",
   "difficulty": 1
  },
  {
   "id": "mcq-l1-022",
   "level": 1,
   "topic": "幂运算与优先级",
   "q": "`print(-3 ** 2, (-3) ** 2)` 的输出结果是____。",
   "opts": [
    "9 9",
    "-9 9",
    "-9 -9",
    "9 -9"
   ],
   "ans": 1,
   "exp": "** 的优先级高于负号，-3**2 相当于 -(3**2) 即 -9；加括号后 (-3)**2 是 9 的平方，结果为 9。",
   "difficulty": 2
  },
  {
   "id": "mcq-l1-023",
   "level": 1,
   "topic": "and/or 的返回值",
   "q": "`print(3 and 5, 0 or 'x')` 的输出结果是____。",
   "opts": [
    "True True",
    "3 x",
    "5 x",
    "程序报错"
   ],
   "ans": 2,
   "exp": "and/or 的结果是参与运算的值而非布尔值：3 为真，and 返回后一个值 5；0 为假，or 返回第一个为真的值 'x'，输出 5 x。",
   "difficulty": 3
  },
  {
   "id": "mcq-l1-024",
   "level": 1,
   "topic": "not/and/or 优先级",
   "q": "`print(not 2 > 3 and 4 > 5 or 6 > 5)` 的输出结果是____。",
   "opts": [
    "True",
    "False",
    "None",
    "程序报错"
   ],
   "ans": 0,
   "exp": "优先级从高到低为：比较运算、not、and、or。not(2>3)=True，True and (4>5)=False，False or (6>5)=True。",
   "difficulty": 3
  },
  {
   "id": "mcq-l1-025",
   "level": 1,
   "topic": "混合运算自动类型转换",
   "q": "`print(3 / 2, 5 // 2.0)` 的输出结果是____。",
   "opts": [
    "1 2",
    "1 2.0",
    "1.5 2",
    "1.5 2.0"
   ],
   "ans": 3,
   "exp": "/ 的结果总是浮点型，3/2=1.5；// 只要有一个操作数是浮点型，结果就是浮点型，5//2.0=2.0。",
   "difficulty": 2
  },
  {
   "id": "mcq-l1-026",
   "level": 1,
   "topic": "表达式求值",
   "q": "`print(2 + 3 * 4 ** 2 // 5 - 1)` 的输出结果是____。",
   "opts": [
    "9",
    "10",
    "11",
    "16"
   ],
   "ans": 1,
   "exp": "先算 4**2=16，* 与 // 同级从左到右：3*16=48、48//5=9，最后 2+9-1=10。漏掉 -1 会错选 11。",
   "difficulty": 3
  },
  {
   "id": "mcq-l2-001",
   "level": 2,
   "topic": "三种基本结构",
   "q": "Python 程序的三种基本控制结构是____。",
   "opts": [
    "输入结构、处理结构、输出结构",
    "顺序结构、分支结构、循环结构",
    "变量结构、函数结构、类结构",
    "单分支结构、双分支结构、多分支结构"
   ],
   "ans": 1,
   "exp": "任何程序都可由顺序、分支（选择）、循环三种基本结构组合实现；输入/处理/输出是程序的功能步骤，单分支/双分支只是分支的具体形式。",
   "difficulty": 1
  },
  {
   "id": "mcq-l2-002",
   "level": 2,
   "topic": "if 语句语法",
   "q": "下列 if 语句中，语法正确的是____。",
   "opts": [
    "if x > 0:\n    print('正数')",
    "if x > 0\n    print('正数')",
    "if (x > 0) print('正数')",
    "if x > 0 then: print('正数')"
   ],
   "ans": 0,
   "exp": "if 条件后必须跟冒号，分支体靠缩进表示；Python 中没有 then 关键字，条件后也不能直接跟语句而不写冒号。",
   "difficulty": 1
  },
  {
   "id": "mcq-l2-003",
   "level": 2,
   "topic": "if-elif-else 分支",
   "q": "有如下程序：\nx = 75\nif x >= 90:\n    print('A')\nelif x >= 60:\n    print('B')\nelse:\n    print('C')\n输出结果是____。",
   "opts": [
    "A",
    "C",
    "B",
    "程序报错"
   ],
   "ans": 2,
   "exp": "多分支自上而下判断，75 不满足 x>=90，满足 x>=60，输出 B 后其余分支不再执行；只会输出一个分支。",
   "difficulty": 1
  },
  {
   "id": "mcq-l2-004",
   "level": 2,
   "topic": "嵌套 if 与求最大值",
   "q": "有如下程序：\na, b, c = 3, 7, 5\nif a > b:\n    if a > c:\n        print(a)\n    else:\n        print(c)\nelse:\n    if b > c:\n        print(b)\n    else:\n        print(c)\n输出结果是____。",
   "opts": [
    "3",
    "5",
    "7",
    "程序报错"
   ],
   "ans": 2,
   "exp": "a>b 为假进入外层 else，b>c 为真输出 b 即 7。该程序用嵌套分支输出三个数中的最大值。",
   "difficulty": 2
  },
  {
   "id": "mcq-l2-005",
   "level": 2,
   "topic": "条件的真值判断",
   "q": "有如下程序：\ns = '0'\nif s:\n    print('yes')\nelse:\n    print('no')\n输出结果是____。",
   "opts": [
    "yes",
    "no",
    "0",
    "程序报错"
   ],
   "ans": 0,
   "exp": "非空字符串作条件时为真，'0' 是长度为 1 的字符串，不是数值 0，输出 yes；空字符串 ''、0、None 作条件时才为假。",
   "difficulty": 2
  },
  {
   "id": "mcq-l2-006",
   "level": 2,
   "topic": "while 循环累加",
   "q": "有如下程序：\ni, s = 1, 0\nwhile i <= 10:\n    s = s + i\n    i = i + 2\nprint(s)\n输出结果是____。",
   "opts": [
    "55",
    "30",
    "20",
    "25"
   ],
   "ans": 3,
   "exp": "i 依次取 1、3、5、7、9，累加和为 25，i=11 时不满足条件退出。误认为 1~10 全部累加会错选 55。",
   "difficulty": 2
  },
  {
   "id": "mcq-l2-007",
   "level": 2,
   "topic": "while 循环次数",
   "q": "有如下程序：\nn = 100\ncount = 0\nwhile n > 1:\n    n = n // 2\n    count += 1\nprint(count)\n输出结果是____。",
   "opts": [
    "5",
    "6",
    "7",
    "100"
   ],
   "ans": 1,
   "exp": "n 依次变为 50、25、12、6、3、1，共循环 6 次；n 变为 1 时条件 n>1 不再成立。",
   "difficulty": 3
  },
  {
   "id": "mcq-l2-008",
   "level": 2,
   "topic": "无限循环",
   "q": "下列程序段中，循环体会无限执行（死循环）的是____。",
   "opts": [
    "i = 0\nwhile i < 5:\n    i += 1",
    "for i in range(10):\n    print(i)",
    "i = 10\nwhile i > 0:\n    i += 1",
    "n = 5\nwhile n:\n    n -= 1"
   ],
   "ans": 2,
   "exp": "选项 C 中 i 不断增大，条件 i>0 永远成立，构成死循环；A 中 i 增到 5 退出，B 遍历完结束，D 中 n 减到 0 时条件为假退出。",
   "difficulty": 2
  },
  {
   "id": "mcq-l2-009",
   "level": 2,
   "topic": "for 与 range()",
   "q": "有如下程序：\nfor i in range(1, 10, 3):\n    print(i, end=' ')\n输出结果是____。",
   "opts": [
    "1 4 7",
    "1 4 7 10",
    "1 3 6 9",
    "3 6 9"
   ],
   "ans": 0,
   "exp": "range(1, 10, 3) 从 1 开始、步长为 3，产生 1、4、7，含头不含尾，不会取到终点 10。",
   "difficulty": 1
  },
  {
   "id": "mcq-l2-010",
   "level": 2,
   "topic": "range() 遍历次数",
   "q": "`for i in range(3, 10)` 的循环体共执行____次。",
   "opts": [
    "8 次，i 依次取 3~10",
    "7 次，i 依次取 3~10",
    "6 次，i 依次取 4~9",
    "7 次，i 依次取 3~9"
   ],
   "ans": 3,
   "exp": "range(起, 止) 含头不含尾，产生 3~9 共 10-3=7 个整数，循环 7 次。",
   "difficulty": 1
  },
  {
   "id": "mcq-l2-011",
   "level": 2,
   "topic": "for 遍历字符串",
   "q": "有如下程序：\nfor ch in 'abc':\n    print(ch * 2, end='')\n输出结果是____。",
   "opts": [
    "abc",
    "aabbcc",
    "aa bb cc",
    "程序报错"
   ],
   "ans": 1,
   "exp": "逐字符遍历，ch*2 把每个字符重复 2 次得 aa、bb、cc，end='' 使输出连在一行，结果为 aabbcc。",
   "difficulty": 1
  },
  {
   "id": "mcq-l2-012",
   "level": 2,
   "topic": "循环嵌套与乘法表",
   "q": "用双层 for 循环打印九九乘法表，内层循环用 print(算式, end='\\t') 输出一行中的多个乘式，每输出完一行后应执行____来实现换行。",
   "opts": [
    "print()",
    "print(end='')",
    "break",
    "continue"
   ],
   "ans": 0,
   "exp": "print() 默认输出换行符，用于一行结束后换行；print(end='') 不换行，break/continue 会改变循环流程而非换行。",
   "difficulty": 2
  },
  {
   "id": "mcq-l2-013",
   "level": 2,
   "topic": "循环嵌套与图形打印",
   "q": "有如下程序：\nfor i in range(1, 4):\n    print('*' * i)\n输出结果是____。",
   "opts": [
    "输出一行：******",
    "输出三行：***、**、*",
    "程序报错",
    "输出三行：*、**、***"
   ],
   "ans": 3,
   "exp": "i 依次取 1、2、3，字符串乘法 '*'*i 使每行输出 i 个星号，共三行逐行增加；range(1,4) 不含 4。",
   "difficulty": 2
  },
  {
   "id": "mcq-l2-014",
   "level": 2,
   "topic": "嵌套循环与计数器",
   "q": "有如下程序：\ncount = 0\nfor i in range(3):\n    for j in range(4):\n        count += 1\nprint(count)\n输出结果是____。",
   "opts": [
    "3",
    "7",
    "12",
    "4"
   ],
   "ans": 2,
   "exp": "外层执行 3 次、内层每次执行 4 次，计数器共累加 3×4=12 次，输出 12。",
   "difficulty": 2
  },
  {
   "id": "mcq-l2-015",
   "level": 2,
   "topic": "break 语句",
   "q": "有如下程序：\nfor i in range(1, 6):\n    if i == 3:\n        break\n    print(i, end=' ')\n输出结果是____。",
   "opts": [
    "1 2 3 4 5",
    "1 2",
    "1 2 4 5",
    "3"
   ],
   "ans": 1,
   "exp": "i 为 3 时执行 break 立即跳出整个循环，3、4、5 都不再输出，只输出 1 2。",
   "difficulty": 1
  },
  {
   "id": "mcq-l2-016",
   "level": 2,
   "topic": "continue 语句",
   "q": "有如下程序：\nfor i in range(1, 6):\n    if i == 3:\n        continue\n    print(i, end=' ')\n输出结果是____。",
   "opts": [
    "1 2 3 4 5",
    "1 2",
    "3",
    "1 2 4 5"
   ],
   "ans": 3,
   "exp": "i 为 3 时 continue 跳过本次循环剩余语句，只跳过 3 的输出，循环继续到 5，输出 1 2 4 5。",
   "difficulty": 1
  },
  {
   "id": "mcq-l2-017",
   "level": 2,
   "topic": "break 与 continue 区别",
   "q": "关于 break 和 continue，下列说法正确的是____。",
   "opts": [
    "break 跳出并结束整个循环，continue 跳过本次循环剩余语句、进入下一次循环",
    "break 结束本次循环，continue 结束整个循环",
    "break 和 continue 都只能用在 while 循环中",
    "continue 会终止整个程序的执行"
   ],
   "ans": 0,
   "exp": "break 终止整个循环，continue 只结束本次进入下一次；两者都可用于 for 和 while 循环。",
   "difficulty": 1
  },
  {
   "id": "mcq-l2-018",
   "level": 2,
   "topic": "for-else 结构",
   "q": "有如下程序：\nfor i in range(3):\n    print(i, end=' ')\nelse:\n    print('end')\n输出结果是____。",
   "opts": [
    "只输出一行：0 1 2",
    "第一行输出 0 1 2，第二行输出 end",
    "只输出 end",
    "程序报错"
   ],
   "ans": 1,
   "exp": "for 循环正常结束（未被 break 打断）时会执行 else 子句，故先输出 0 1 2，再输出 end。",
   "difficulty": 3
  },
  {
   "id": "mcq-l2-019",
   "level": 2,
   "topic": "while True 与 break",
   "q": "有如下程序：\nn = 0\nwhile True:\n    n += 1\n    if n == 3:\n        break\nprint(n)\n输出结果是____。",
   "opts": [
    "2",
    "4",
    "3",
    "程序死循环，无输出"
   ],
   "ans": 2,
   "exp": "while True 条件恒真，需要靠 break 退出：n 增到 3 时执行 break 跳出循环，输出 3。这是“无限循环+break”的典型结构。",
   "difficulty": 2
  },
  {
   "id": "mcq-l2-020",
   "level": 2,
   "topic": "try-except 概念",
   "q": "关于 try-except 异常处理语句，下列说法正确的是____。",
   "opts": [
    "try 子句中的代码出现异常时，程序立即终止运行",
    "except 子句必须写在 try 子句之前",
    "try-except 语句只能处理语法错误",
    "try 子句中的代码出现异常时，转去执行 except 子句，程序不会中断"
   ],
   "ans": 3,
   "exp": "try 中出现运行时异常会跳到 except 分支处理，程序继续运行；except 必须写在 try 之后，语法错误无法用 try-except 捕获。",
   "difficulty": 1
  },
  {
   "id": "mcq-l2-021",
   "level": 2,
   "topic": "try-except 执行流程",
   "q": "有如下程序：\ntry:\n    x = int('abc')\n    print(x)\nexcept:\n    print('error')\n输出结果是____。",
   "opts": [
    "error",
    "abc",
    "0",
    "程序报错终止"
   ],
   "ans": 0,
   "exp": "int('abc') 抛出 ValueError，try 中剩余语句 print(x) 被跳过，转去执行 except 分支输出 error。",
   "difficulty": 2
  },
  {
   "id": "mcq-l2-022",
   "level": 2,
   "topic": "素数判断",
   "q": "有如下程序：\nn = 17\nflag = True\nfor i in range(2, n):\n    if n % i == 0:\n        flag = False\n        break\nprint(flag)\n输出结果是____。",
   "opts": [
    "False",
    "True",
    "17",
    "程序报错"
   ],
   "ans": 1,
   "exp": "17 只能被 1 和它本身整除，2~16 中没有它的因数，flag 保持 True，输出 True，说明 17 是素数。",
   "difficulty": 2
  },
  {
   "id": "mcq-l2-023",
   "level": 2,
   "topic": "水仙花数",
   "q": "水仙花数是一个三位数，其各位数字的立方和等于它本身。下列数中，是水仙花数的是____。",
   "opts": [
    "100",
    "135",
    "153",
    "351"
   ],
   "ans": 2,
   "exp": "153 = 1³+5³+3³ = 1+125+27，是水仙花数；100、135、351 各位数字的立方和都不等于自身。",
   "difficulty": 1
  },
  {
   "id": "mcq-l2-024",
   "level": 2,
   "topic": "斐波那契数列",
   "q": "有如下程序：\na, b = 1, 1\nfor i in range(4):\n    a, b = b, a + b\nprint(b)\n输出结果是____。",
   "opts": [
    "3",
    "5",
    "13",
    "8"
   ],
   "ans": 3,
   "exp": "每次迭代 (a, b) 依次变为 (1,2)、(2,3)、(3,5)、(5,8)，输出 8，即斐波那契数列 1,1,2,3,5,8 的第 6 项。",
   "difficulty": 3
  },
  {
   "id": "mcq-l2-025",
   "level": 2,
   "topic": "累乘（阶乘）",
   "q": "有如下程序：\np = 1\nfor i in range(1, 5):\n    p = p * i\nprint(p)\n输出结果是____。",
   "opts": [
    "24",
    "10",
    "120",
    "4"
   ],
   "ans": 0,
   "exp": "循环计算 1×2×3×4=24，即 4 的阶乘。累乘器初值必须是 1；若想算 5! 应写 range(1, 6)，结果是 120。",
   "difficulty": 2
  },
  {
   "id": "mcq-l2-026",
   "level": 2,
   "topic": "最大公约数（辗转相除法）",
   "q": "有如下程序（辗转相除法求最大公约数）：\na, b = 12, 18\nwhile b:\n    a, b = b, a % b\nprint(a)\n输出结果是____。",
   "opts": [
    "2",
    "3",
    "6",
    "36"
   ],
   "ans": 2,
   "exp": "(a, b) 依次变为 (18,12)、(12,6)、(6,0)，b 为 0 时循环结束，a 即最大公约数 6。",
   "difficulty": 3
  },
  {
   "id": "mcq-l3-001",
   "level": 3,
   "topic": "字符串索引",
   "q": "有如下程序：\ns = 'Python'\nprint(s[1], s[-1])\n输出结果是____。",
   "opts": [
    "P n",
    "P o",
    "y n",
    "程序报错"
   ],
   "ans": 2,
   "exp": "索引从 0 开始，s[1] 是第 2 个字符 y；负索引从末尾数起，s[-1] 是最后一个字符 n。",
   "difficulty": 1
  },
  {
   "id": "mcq-l3-002",
   "level": 3,
   "topic": "字符串切片",
   "q": "`s = 'Python'`，则 `s[1:4]` 的值是____。",
   "opts": [
    "'yth'",
    "'Pyt'",
    "'ytho'",
    "'Pyth'"
   ],
   "ans": 0,
   "exp": "切片 s[起:止] 含头不含尾，取下标 1、2、3 的字符 y、t、h，结果为 'yth'。",
   "difficulty": 1
  },
  {
   "id": "mcq-l3-003",
   "level": 3,
   "topic": "切片步长",
   "q": "`print('abcde'[::-1])` 的输出结果是____。",
   "opts": [
    "abcde",
    "edc",
    "a",
    "edcba"
   ],
   "ans": 3,
   "exp": "步长为 -1 表示从右往左逐个取字符，实现字符串反转，输出 edcba。",
   "difficulty": 1
  },
  {
   "id": "mcq-l3-004",
   "level": 3,
   "topic": "find 方法",
   "q": "`print('hello world'.find('o'))` 的输出结果是____。",
   "opts": [
    "7",
    "4",
    "-1",
    "5"
   ],
   "ans": 1,
   "exp": "find 返回子串第一次出现的下标，第一个 o 在下标 4；若找不到返回 -1。第二个 o 在下标 7，但 find 只返回第一次出现的位置。",
   "difficulty": 2
  },
  {
   "id": "mcq-l3-005",
   "level": 3,
   "topic": "replace 方法",
   "q": "`print('a-b-c'.replace('-', '+'))` 的输出结果是____。",
   "opts": [
    "a-b-c",
    "a+b-c",
    "a+b+c",
    "['a', 'b', 'c']"
   ],
   "ans": 2,
   "exp": "replace 把字符串中所有 - 替换为 +（不只是第一个），返回新字符串 a+b+c，原字符串不变。",
   "difficulty": 1
  },
  {
   "id": "mcq-l3-006",
   "level": 3,
   "topic": "split 方法",
   "q": "`print('a,b,c'.split(','))` 的输出结果是____。",
   "opts": [
    "['a', 'b', 'c']",
    "'a,b,c'",
    "('a', 'b', 'c')",
    "abc"
   ],
   "ans": 0,
   "exp": "split 按指定分隔符切分字符串，返回列表 ['a', 'b', 'c']，是字符串转列表的常用方法。",
   "difficulty": 1
  },
  {
   "id": "mcq-l3-007",
   "level": 3,
   "topic": "strip 方法",
   "q": "`print('  hi  '.strip() + '!')` 的输出结果是____。",
   "opts": [
    "'  hi  !'",
    "'hi  !'",
    "'  hi!'",
    "hi!"
   ],
   "ans": 3,
   "exp": "strip 去掉字符串首尾两端的空白字符（中间的空格保留），得到 'hi'，再拼接 ! 输出 hi!。",
   "difficulty": 1
  },
  {
   "id": "mcq-l3-008",
   "level": 3,
   "topic": "upper/lower 方法",
   "q": "有如下程序：\ns = 'hello'\ns.upper()\nprint(s)\n输出结果是____。",
   "opts": [
    "HELLO",
    "hello",
    "Hello",
    "程序报错"
   ],
   "ans": 1,
   "exp": "字符串不可变，s.upper() 返回新字符串 'HELLO' 但不改变 s 本身；想生效需写 s = s.upper()。",
   "difficulty": 2
  },
  {
   "id": "mcq-l3-009",
   "level": 3,
   "topic": "count 方法",
   "q": "`print('banana'.count('a'))` 的输出结果是____。",
   "opts": [
    "3",
    "2",
    "4",
    "1"
   ],
   "ans": 0,
   "exp": "count 统计子串出现的次数，banana 中有 3 个 a。",
   "difficulty": 1
  },
  {
   "id": "mcq-l3-010",
   "level": 3,
   "topic": "join 方法",
   "q": "`print('-'.join(['2026', '09', '25']))` 的输出结果是____。",
   "opts": [
    "['2026', '09', '25']",
    "20260925",
    "2026-09-25",
    "程序报错"
   ],
   "ans": 2,
   "exp": "join 把列表中各字符串用指定分隔符连接成一个字符串，输出 2026-09-25；join 与 split 互为逆操作，常用于列表与字符串互转。",
   "difficulty": 2
  },
  {
   "id": "mcq-l3-011",
   "level": 3,
   "topic": "% 格式化",
   "q": "`print('姓名:%s, 年龄:%d' % ('李明', 18))` 的输出结果是____。",
   "opts": [
    "姓名:%s, 年龄:%d",
    "姓名:18, 年龄:李明",
    "程序报错",
    "姓名:李明, 年龄:18"
   ],
   "ans": 3,
   "exp": "%s 对应字符串、%d 对应整数，右侧元组中的值按顺序填入占位符，输出 姓名:李明, 年龄:18。",
   "difficulty": 1
  },
  {
   "id": "mcq-l3-012",
   "level": 3,
   "topic": "format 方法",
   "q": "`print('{:.2f}'.format(3.14159))` 的输出结果是____。",
   "opts": [
    "3.14",
    "3.1416",
    "3.1",
    "3.15"
   ],
   "ans": 0,
   "exp": "{:.2f} 表示保留两位小数（f 为浮点数格式），3.14159 四舍五入为 3.14。",
   "difficulty": 2
  },
  {
   "id": "mcq-l3-013",
   "level": 3,
   "topic": "f-string 格式化",
   "q": "有如下程序：\nname, age = '王芳', 20\nprint(f'{name}今年{age}岁')\n输出结果是____。",
   "opts": [
    "{name}今年{age}岁",
    "王芳今年20岁",
    "name今年age岁",
    "程序报错"
   ],
   "ans": 1,
   "exp": "f 字符串中的 {变量名} 会被替换为变量的值，是最简洁的格式化方式；不加 f 前缀时花括号原样输出。",
   "difficulty": 1
  },
  {
   "id": "mcq-l3-014",
   "level": 3,
   "topic": "append 方法",
   "q": "有如下程序：\nlst = [1, 2, 3]\nlst.append([4, 5])\nprint(len(lst))\n输出结果是____。",
   "opts": [
    "5",
    "3",
    "4",
    "程序报错"
   ],
   "ans": 2,
   "exp": "append 把整个 [4, 5] 作为单个元素追加到末尾，列表变为 [1, 2, 3, [4, 5]]，长度为 4。",
   "difficulty": 2
  },
  {
   "id": "mcq-l3-015",
   "level": 3,
   "topic": "insert 与 pop",
   "q": "有如下程序：\nlst = [10, 20, 30, 40]\nlst.insert(1, 15)\nx = lst.pop(2)\nprint(lst, x)\n输出结果是____。",
   "opts": [
    "[10, 15, 30, 40] 30",
    "[10, 20, 30, 40] 15",
    "[10, 15, 20, 40] 20",
    "[10, 15, 30, 40] 20"
   ],
   "ans": 3,
   "exp": "insert(1, 15) 在下标 1 处插入得 [10,15,20,30,40]；pop(2) 删除并返回下标 2 的元素 20，列表变为 [10, 15, 30, 40]。",
   "difficulty": 3
  },
  {
   "id": "mcq-l3-016",
   "level": 3,
   "topic": "remove 方法",
   "q": "有如下程序：\nlst = [1, 2, 2, 3]\nlst.remove(2)\nprint(lst)\n输出结果是____。",
   "opts": [
    "[1, 2, 3]",
    "[1, 3]",
    "[1, 2, 2, 3]",
    "程序报错"
   ],
   "ans": 0,
   "exp": "remove 只删除第一个值为 2 的元素，剩下的 2 保留；按位置删除应使用 pop 或 del。",
   "difficulty": 2
  },
  {
   "id": "mcq-l3-017",
   "level": 3,
   "topic": "sort 与 sorted",
   "q": "有如下程序：\na = [3, 1, 2]\nb = sorted(a)\nprint(a, b)\n输出结果是____。",
   "opts": [
    "[1, 2, 3] [1, 2, 3]",
    "[3, 1, 2] [1, 2, 3]",
    "[1, 2, 3] [3, 1, 2]",
    "[3, 1, 2] [3, 1, 2]"
   ],
   "ans": 1,
   "exp": "sorted(a) 返回排序后的新列表，原列表 a 不变；a.sort() 才是原地排序、直接修改 a 本身。",
   "difficulty": 2
  },
  {
   "id": "mcq-l3-018",
   "level": 3,
   "topic": "reverse/index/count",
   "q": "有如下程序：\nlst = [1, 2, 3, 2]\nlst.reverse()\nprint(lst, lst.index(2), lst.count(2))\n输出结果是____。",
   "opts": [
    "[1, 2, 3, 2] 1 2",
    "[2, 3, 2, 1] 1 2",
    "[2, 3, 2, 1] 0 2",
    "[2, 3, 2, 1] 0 3"
   ],
   "ans": 2,
   "exp": "reverse 原地反转为 [2, 3, 2, 1]；index 返回第一个匹配元素的下标 0，count 统计 2 共出现 2 次。",
   "difficulty": 3
  },
  {
   "id": "mcq-l3-019",
   "level": 3,
   "topic": "列表解析式",
   "q": "`print([x * x for x in range(1, 5) if x % 2 == 0])` 的输出结果是____。",
   "opts": [
    "[1, 4, 9, 16]",
    "[2, 4]",
    "[4, 16]",
    "[4]"
   ],
   "ans": 2,
   "exp": "range(1, 5) 取 1~4，if 筛出偶数 2 和 4，平方后得 [4, 16]；列表解析式 = 遍历 + 过滤 + 表达式。",
   "difficulty": 2
  },
  {
   "id": "mcq-l3-020",
   "level": 3,
   "topic": "enumerate",
   "q": "`print(list(enumerate('abc')))` 的输出结果是____。",
   "opts": [
    "['a', 'b', 'c']",
    "[(1, 'a'), (2, 'b'), (3, 'c')]",
    "程序报错",
    "[(0, 'a'), (1, 'b'), (2, 'c')]"
   ],
   "ans": 3,
   "exp": "enumerate 同时给出下标和元素，下标默认从 0 开始，组成 (下标, 元素) 元组的列表；for i, ch in enumerate(...) 就是在做元组解包。",
   "difficulty": 2
  },
  {
   "id": "mcq-l3-021",
   "level": 3,
   "topic": "深浅复制",
   "q": "有如下程序：\na = [1, 2, 3]\nb = a[:]\nb[0] = 99\nprint(a)\n输出结果是____。",
   "opts": [
    "[1, 2, 3]",
    "[99, 2, 3]",
    "[1, 2, 3, 99]",
    "程序报错"
   ],
   "ans": 0,
   "exp": "b=a[:] 复制出一个新列表，修改 b 不影响 a；若写成 b=a，两个名字指向同一个列表，a 也会变成 [99, 2, 3]。",
   "difficulty": 2
  },
  {
   "id": "mcq-l3-022",
   "level": 3,
   "topic": "元组与单元素元组",
   "q": "有如下程序：\nt = (5)\nprint(type(t))\n输出结果是____。",
   "opts": [
    "<class 'tuple'>",
    "<class 'int'>",
    "<class 'float'>",
    "<class 'str'>"
   ],
   "ans": 1,
   "exp": "(5) 只是带括号的整数表达式，定义单元素元组必须写 (5,)。元组是不可变类型，不能对其中元素赋值。",
   "difficulty": 2
  },
  {
   "id": "mcq-l3-023",
   "level": 3,
   "topic": "字典增删改",
   "q": "有如下程序：\nd = {'a': 1, 'b': 2}\nd['c'] = 3\ndel d['a']\nprint(d)\n输出结果是____。",
   "opts": [
    "{'a': 1, 'b': 2, 'c': 3}",
    "{'c': 3}",
    "{'b': 2, 'c': 3}",
    "程序报错"
   ],
   "ans": 2,
   "exp": "d['c']=3 新增键值对，del d['a'] 删除键 'a'；也可以用 d.pop('a') 删除并返回对应的值。",
   "difficulty": 1
  },
  {
   "id": "mcq-l3-024",
   "level": 3,
   "topic": "字典分类计数",
   "q": "有如下程序：\ns = 'ababc'\nd = {}\nfor ch in s:\n    d[ch] = d.get(ch, 0) + 1\nprint(d)\n输出结果是____。",
   "opts": [
    "{'a': 2, 'b': 2, 'c': 1}",
    "{'a': 1, 'b': 1, 'c': 1}",
    "{'ababc': 1}",
    "程序报错"
   ],
   "ans": 0,
   "exp": "d.get(ch, 0) 在键不存在时返回默认值 0，实现逐字符计数；遍历键值对可用 for k, v in d.items()（键值元组解包）。",
   "difficulty": 3
  },
  {
   "id": "mcq-l3-025",
   "level": 3,
   "topic": "不可变对象作键",
   "q": "下列选项中，不能作为字典键的是____。",
   "opts": [
    "'name'",
    "(1, 2)",
    "3.14",
    "[1, 2]"
   ],
   "ans": 3,
   "exp": "字典的键必须是不可变对象：字符串、数值、元组都可以，列表是可变类型，作键会报 TypeError。",
   "difficulty": 2
  },
  {
   "id": "mcq-l3-026",
   "level": 3,
   "topic": "集合去重",
   "q": "有如下程序：\nlst = [1, 2, 2, 3, 3, 3]\nprint(len(set(lst)))\n输出结果是____。",
   "opts": [
    "6",
    "3",
    "1",
    "程序报错"
   ],
   "ans": 1,
   "exp": "set() 把列表转成集合时自动去掉重复元素，得到 {1, 2, 3} 共 3 个元素；这是列表去重的常用方法。",
   "difficulty": 1
  },
  {
   "id": "mcq-l4-001",
   "level": 4,
   "topic": "函数定义",
   "q": "下列关于函数定义的说法，错误的是____。",
   "opts": [
    "函数定义后，必须被调用才能执行函数体中的代码",
    "def 语句定义函数时，函数体必须相对 def 缩进",
    "函数体中必须包含 return 语句，否则定义函数时会报语法错误",
    "函数名的命名规则与变量名相同"
   ],
   "ans": 2,
   "exp": "函数可以没有 return 语句，此时函数返回 None，不会报语法错误；其余三项都是函数定义的正确规则。",
   "difficulty": 1
  },
  {
   "id": "mcq-l4-002",
   "level": 4,
   "topic": "返回值",
   "q": "有如下程序：\ndef f(x):\n    x = x + 1\nprint(f(3))\n输出结果是____。",
   "opts": [
    "None",
    "4",
    "3",
    "程序报错"
   ],
   "ans": 0,
   "exp": "函数体中没有 return 语句时，函数返回 None。函数体虽然执行了 x=x+1，但没有把结果返回，print 输出 None。",
   "difficulty": 1
  },
  {
   "id": "mcq-l4-003",
   "level": 4,
   "topic": "多返回值",
   "q": "有如下程序：\ndef f(a, b):\n    return a + b, a * b\nr = f(2, 3)\nprint(r)\n输出结果是____。",
   "opts": [
    "[5, 6]",
    "5 6",
    "程序报错",
    "(5, 6)"
   ],
   "ans": 3,
   "exp": "return 后跟多个值时会自动打包成一个元组返回，a+b=5、a*b=6，故 r 是元组 (5, 6)；5 6 是 print 多个值的输出形式，而 r 本身是一个元组对象。",
   "difficulty": 1
  },
  {
   "id": "mcq-l4-004",
   "level": 4,
   "topic": "形参与实参",
   "q": "有函数定义 `def add(x, y):`，调用 `add(3, 5)` 时，下列说法正确的是____。",
   "opts": [
    "3 和 5 是形式参数",
    "3 和 5 是实际参数",
    "3 是形参，5 是实参",
    "3 和 5 是关键字参数"
   ],
   "ans": 1,
   "exp": "定义时括号中的 x、y 是形式参数（形参），调用时传入的具体值 3、5 是实际参数（实参）；按位置直接传值的不是关键字参数。",
   "difficulty": 1
  },
  {
   "id": "mcq-l4-005",
   "level": 4,
   "topic": "默认参数",
   "q": "有如下程序：\ndef f(a, b=10):\n    return a + b\nprint(f(1), f(1, 2))\n输出结果是____。",
   "opts": [
    "11 12",
    "11 3",
    "3 12",
    "程序报错"
   ],
   "ans": 1,
   "exp": "f(1) 只按位置给 a 传 1，b 使用默认值 10，得 11；f(1, 2) 按位置给 b 传 2，覆盖默认值，得 3。",
   "difficulty": 2
  },
  {
   "id": "mcq-l4-006",
   "level": 4,
   "topic": "关键字参数",
   "q": "有如下程序：\ndef f(a, b):\n    return a - b\nprint(f(b=1, a=5))\n输出结果是____。",
   "opts": [
    "-4",
    "6",
    "程序报错",
    "4"
   ],
   "ans": 3,
   "exp": "关键字参数按参数名传递，与书写顺序无关，相当于 a=5、b=1，故 a-b=4；若误按位置理解为 1-5 会错选 -4。",
   "difficulty": 2
  },
  {
   "id": "mcq-l4-007",
   "level": 4,
   "topic": "可变参数",
   "q": "有如下程序：\ndef f(a, *b):\n    print(a, b)\nf(1, 2, 3)\n输出结果是____。",
   "opts": [
    "1 (2, 3)",
    "1 [2, 3]",
    "1 2 3",
    "程序报错"
   ],
   "ans": 0,
   "exp": "形参前的 * 号把多余的位置参数收集成一个元组，a 接收第一个实参 1，b 是元组 (2, 3)，print 输出 1 (2, 3)。",
   "difficulty": 2
  },
  {
   "id": "mcq-l4-008",
   "level": 4,
   "topic": "可变参数",
   "q": "有如下程序：\ndef f(**kw):\n    return kw\nprint(f(x=1, y=2))\n输出结果是____。",
   "opts": [
    "[('x', 1), ('y', 2)]",
    "(1, 2)",
    "{'x': 1, 'y': 2}",
    "程序报错"
   ],
   "ans": 2,
   "exp": "形参前的 ** 号把关键字参数收集成一个字典，键是参数名字符串、值是对应实参，故返回 {'x': 1, 'y': 2}；*args 才是收集为元组。",
   "difficulty": 2
  },
  {
   "id": "mcq-l4-009",
   "level": 4,
   "topic": "作用域",
   "q": "有如下程序：\ndef f():\n    x = 10\n    return x\nx = 5\nf()\nprint(x)\n输出结果是____。",
   "opts": [
    "5",
    "10",
    "15",
    "程序报错"
   ],
   "ans": 0,
   "exp": "函数内赋值的 x 是局部变量，只在函数内部有效，不影响外面的全局变量 x，故输出 5；要在函数内修改全局变量须先 global 声明。",
   "difficulty": 1
  },
  {
   "id": "mcq-l4-010",
   "level": 4,
   "topic": "global 语句",
   "q": "有如下程序：\nn = 10\ndef f():\n    global n\n    n = n + 5\n    return n\nf()\nprint(n)\n输出结果是____。",
   "opts": [
    "10",
    "5",
    "15",
    "程序报错"
   ],
   "ans": 2,
   "exp": "global n 声明函数内的 n 就是全局变量，n=n+5 直接修改全局变量，调用后 n 变为 15，输出 15。",
   "difficulty": 1
  },
  {
   "id": "mcq-l4-011",
   "level": 4,
   "topic": "作用域",
   "q": "有如下程序：\nn = 10\ndef f():\n    n = n + 1\nf()\nprint(n)\n运行结果是____。",
   "opts": [
    "11",
    "程序报错，提示局部变量 n 在赋值前被引用",
    "10",
    "None"
   ],
   "ans": 1,
   "exp": "函数内对 n 赋值使 n 被当作局部变量，但执行 n=n+1 时右侧的 n 还未赋值，引发 UnboundLocalError；想在函数内修改全局变量必须先写 global n。",
   "difficulty": 3
  },
  {
   "id": "mcq-l4-012",
   "level": 4,
   "topic": "lambda",
   "q": "有如下程序：\nf = lambda x, y: x if x > y else y\nprint(f(3, 8))\n输出结果是____。",
   "opts": [
    "3",
    "(3, 8)",
    "程序报错",
    "8"
   ],
   "ans": 3,
   "exp": "lambda 冒号后是一个表达式，其值即返回值；条件表达式 x if x>y else y 取较大者，f(3, 8) 返回 8。该 lambda 相当于定义了求两数最大值的函数。",
   "difficulty": 2
  },
  {
   "id": "mcq-l4-013",
   "level": 4,
   "topic": "map()",
   "q": "有如下程序：\nprint(list(map(lambda x: x * 2, [1, 2, 3])))\n输出结果是____。",
   "opts": [
    "[1, 4, 9]",
    "[1, 2, 3]",
    "程序报错",
    "[2, 4, 6]"
   ],
   "ans": 3,
   "exp": "map(f, 序列) 把函数 f 逐个作用于序列的每个元素并返回 map 对象，用 list() 转成列表得 [2, 4, 6]。",
   "difficulty": 1
  },
  {
   "id": "mcq-l4-014",
   "level": 4,
   "topic": "filter()",
   "q": "有如下程序：\nprint(list(filter(lambda x: x % 2 == 1, [1, 2, 3, 4, 5])))\n输出结果是____。",
   "opts": [
    "[2, 4]",
    "[1, 3, 5]",
    "[1, 2, 3, 4, 5]",
    "程序报错"
   ],
   "ans": 1,
   "exp": "filter(f, 序列) 只保留使 f(x) 为真的元素，这里筛选奇数得 [1, 3, 5]；filter 只做筛选，不改变元素本身。",
   "difficulty": 2
  },
  {
   "id": "mcq-l4-015",
   "level": 4,
   "topic": "sorted(key=)",
   "q": "有如下程序：\nwords = ['pear', 'fig', 'banana']\nprint(sorted(words, key=len))\n输出结果是____。",
   "opts": [
    "['banana', 'fig', 'pear']",
    "程序报错",
    "['fig', 'pear', 'banana']",
    "['fig', 'banana', 'pear']"
   ],
   "ans": 2,
   "exp": "key=len 表示按每个字符串的长度排序：fig 长 3、pear 长 4、banana 长 6；不加 key 时才按字典序，banana 会排在最前。",
   "difficulty": 2
  },
  {
   "id": "mcq-l4-016",
   "level": 4,
   "topic": "sorted(key=)",
   "q": "有如下程序：\npairs = [(1, 3), (2, 1), (3, 2)]\nprint(sorted(pairs, key=lambda t: t[1]))\n输出结果是____。",
   "opts": [
    "[(2, 1), (3, 2), (1, 3)]",
    "[(1, 3), (2, 1), (3, 2)]",
    "[(1, 2, 3)]",
    "程序报错"
   ],
   "ans": 0,
   "exp": "key=lambda t: t[1] 指定按每个元组的第 2 个元素排序，三个元组的第 2 个元素分别为 3、1、2，升序排列后为 (2,1)、(3,2)、(1,3)。",
   "difficulty": 3
  },
  {
   "id": "mcq-l4-017",
   "level": 4,
   "topic": "递归",
   "q": "有如下程序：\ndef f(n):\n    if n == 1:\n        return 1\n    return n * f(n - 1)\nprint(f(4))\n输出结果是____。",
   "opts": [
    "10",
    "24",
    "120",
    "程序报错"
   ],
   "ans": 1,
   "exp": "递归计算 4!=4×3×2×1=24；f(4)=4×f(3)，逐层展开到 f(1) 返回 1 后逐层回乘。120 是 5! 的结果。",
   "difficulty": 2
  },
  {
   "id": "mcq-l4-018",
   "level": 4,
   "topic": "递归调用次数",
   "q": "有如下程序：\ncount = 0\ndef f(n):\n    global count\n    count += 1\n    if n == 0:\n        return 0\n    return f(n - 1)\nf(4)\nprint(count)\n输出结果是____。",
   "opts": [
    "5",
    "4",
    "程序报错",
    "20"
   ],
   "ans": 0,
   "exp": "f(4) 依次递归调用 f(3)、f(2)、f(1)、f(0)，加上 f(4) 本身共被调用 5 次，每次 count 加 1，输出 5。",
   "difficulty": 3
  },
  {
   "id": "mcq-l4-019",
   "level": 4,
   "topic": "递归",
   "q": "下列关于递归的说法，错误的是____。",
   "opts": [
    "递归的执行效率一定比等效的循环实现高",
    "递归是函数直接或间接调用自身",
    "递归函数必须有终止条件，否则会无限递归下去",
    "递归层次太深可能超过最大递归深度而报错"
   ],
   "ans": 0,
   "exp": "递归每层调用都要占用栈空间且有函数调用开销，效率通常低于等效的循环实现，A 说法错误；B、C、D 都正确描述了递归的特点。",
   "difficulty": 1
  },
  {
   "id": "mcq-l4-020",
   "level": 4,
   "topic": "生成器",
   "q": "有如下程序：\ndef gen():\n    yield 1\n    yield 2\ng = gen()\nprint(next(g))\n输出结果是____。",
   "opts": [
    "2",
    "[1, 2]",
    "1",
    "程序报错"
   ],
   "ans": 2,
   "exp": "函数体中含有 yield 时它是生成器函数，调用 gen() 不执行函数体而是返回生成器对象；第一次 next(g) 执行到第一个 yield 暂停并返回 1。",
   "difficulty": 2
  },
  {
   "id": "mcq-l4-021",
   "level": 4,
   "topic": "装饰器",
   "q": "下列关于装饰器（decorator）的说法，正确的是____。",
   "opts": [
    "使用装饰器时必须修改被装饰函数的源代码",
    "装饰器只能装饰内置函数，不能装饰自定义函数",
    "装饰器本质是一个函数，它接收一个函数作为参数并返回一个新函数，可在不修改原函数代码的前提下扩展其功能",
    "@装饰器名 必须写在被装饰函数的函数体内部"
   ],
   "ans": 2,
   "exp": "装饰器接收函数并返回新函数，通过 @语法写在函数定义的上方使用；它不修改原函数源码，自定义函数同样可以装饰。",
   "difficulty": 2
  },
  {
   "id": "mcq-l4-022",
   "level": 4,
   "topic": "模块导入",
   "q": "已执行 `import math`，下列调用 math 模块中 sqrt 函数的语句，正确的是____。",
   "opts": [
    "sqrt(4)",
    "import.sqrt(4)",
    "math->sqrt(4)",
    "math.sqrt(4)"
   ],
   "ans": 3,
   "exp": "import math 导入整个模块，使用其中函数要加模块名前缀，即 math.sqrt(4)；若使用 from math import sqrt 导入，才可以直接写 sqrt(4)。",
   "difficulty": 1
  },
  {
   "id": "mcq-l5-001",
   "level": 5,
   "topic": "文本与二进制文件",
   "q": "下列关于文本文件与二进制文件的说法，正确的是____。",
   "opts": [
    "文本文件只能存储英文字符，不能存储中文",
    "文本文件与二进制文件的存储格式完全相同，只是扩展名不同",
    "二进制文件无法被计算机读取和处理",
    "文本文件是基于字符编码保存的文件，二进制文件是由字节序列组成的文件，如图片、视频文件"
   ],
   "ans": 3,
   "exp": "文本文件按某种字符编码（如 UTF-8）把字符转换为字节保存；二进制文件直接以字节序列保存，需按其固有格式解析。文本文件可以存中文，二进制文件当然能被计算机处理。",
   "difficulty": 1
  },
  {
   "id": "mcq-l5-002",
   "level": 5,
   "topic": "打开模式",
   "q": "语句 `open('data.txt')` 中未指定打开模式，则默认使用的打开模式是____。",
   "opts": [
    "'w'（写入）",
    "'r'（只读）",
    "'a'（追加）",
    "'rb'（二进制只读）"
   ],
   "ans": 1,
   "exp": "open 不指定 mode 参数时默认为 'r' 只读文本模式；'w'、'a'、'rb' 等模式都需要显式写出。",
   "difficulty": 1
  },
  {
   "id": "mcq-l5-003",
   "level": 5,
   "topic": "w 模式",
   "q": "已知文件 a.txt 的内容为 hello，执行以下程序后，a.txt 的内容是____。\nf = open('a.txt', 'w')\nf.write('123')\nf.close()",
   "opts": [
    "123",
    "hello123",
    "hello",
    "123hello"
   ],
   "ans": 0,
   "exp": "'w' 模式打开已存在的文件时会先清空文件的全部原内容，再从头写入，所以最终只剩新写入的 123；想在原内容后面添加应使用 'a' 追加模式。",
   "difficulty": 2
  },
  {
   "id": "mcq-l5-004",
   "level": 5,
   "topic": "a 模式",
   "q": "已知文件 a.txt 的内容为 hello，执行以下程序后，a.txt 的内容是____。\nf = open('a.txt', 'a')\nf.write('123')\nf.close()",
   "opts": [
    "123",
    "hello123",
    "hello",
    "123hello"
   ],
   "ans": 1,
   "exp": "'a' 追加模式不清空原内容，文件指针定位在文件末尾，写入的内容接在原内容之后，得到 hello123。",
   "difficulty": 2
  },
  {
   "id": "mcq-l5-005",
   "level": 5,
   "topic": "打开模式",
   "q": "当前目录下不存在文件 b.txt，执行 `f = open('b.txt', 'r')` 的结果是____。",
   "opts": [
    "自动创建空文件 b.txt",
    "返回一个空文件对象，程序继续运行",
    "弹出对话框提示是否新建文件",
    "程序报错 FileNotFoundError"
   ],
   "ans": 3,
   "exp": "'r' 模式要求文件必须已经存在，否则抛出 FileNotFoundError；'w' 模式打开不存在的文件时才会自动创建新文件。",
   "difficulty": 1
  },
  {
   "id": "mcq-l5-006",
   "level": 5,
   "topic": "read()",
   "q": "文件 s.txt 的内容为两行：第一行 abc，第二行 xyz（文件末尾没有换行符）。有如下程序：\nf = open('s.txt')\nt = f.read()\nprint(len(t))\nf.close()\n输出结果是____。",
   "opts": [
    "3",
    "6",
    "7",
    "程序报错"
   ],
   "ans": 2,
   "exp": "read() 不带参数时一次读出整个文件内容为一个字符串，'abc\\nxyz' 包含中间的换行符共 3+1+3=7 个字符。",
   "difficulty": 1
  },
  {
   "id": "mcq-l5-007",
   "level": 5,
   "topic": "读取方法",
   "q": "下列关于 read()、readline()、readlines() 的说法，正确的是____。",
   "opts": [
    "readlines() 返回一个字符串，包含文件的全部内容",
    "readline() 每次读取文件的全部内容",
    "read() 每次只能读取一行内容",
    "readline() 每次读取一行内容，readlines() 把各行作为元素组成列表返回"
   ],
   "ans": 3,
   "exp": "readline() 每次读一行（含行尾换行符），readlines() 返回由各行组成的列表，read() 读取整个文件为字符串；A、B、C 都把三者的功能弄反了。",
   "difficulty": 1
  },
  {
   "id": "mcq-l5-008",
   "level": 5,
   "topic": "readlines()",
   "q": "文件 s.txt 的内容为 abc\\nxyz\\n（两行，每行末尾有换行符）。有如下程序：\nf = open('s.txt')\nlines = f.readlines()\nf.close()\nprint(lines)\n输出结果是____。",
   "opts": [
    "['abc', 'xyz']",
    "'abc\\nxyz\\n'",
    "['abc\\n', 'xyz\\n']",
    "程序报错"
   ],
   "ans": 2,
   "exp": "readlines() 按行读取并把每行（含行尾的换行符）作为列表的一个元素，屏幕显示为 ['abc\\n', 'xyz\\n']；要去掉换行符需对各元素使用 strip()。",
   "difficulty": 2
  },
  {
   "id": "mcq-l5-009",
   "level": 5,
   "topic": "with 语句",
   "q": "下列关于 with 语句打开文件的说法，错误的是____。",
   "opts": [
    "with 语句块结束时自动关闭文件，不必再写 f.close()",
    "使用 with 打开的文件必须再写一行 f.close() 才能关闭",
    "with open('a.txt') as f: 中的 f 是文件对象",
    "即使读取过程中发生异常，with 也能保证文件被关闭"
   ],
   "ans": 1,
   "exp": "with 上下文管理机制会在语句块结束（无论是否发生异常）时自动调用 close 关闭文件，这正是它比直接 open 更安全的地方，B 说法错误。",
   "difficulty": 1
  },
  {
   "id": "mcq-l5-010",
   "level": 5,
   "topic": "seek()",
   "q": "文件 s.txt 的内容为 abcdef。有如下程序：\nf = open('s.txt')\nprint(f.read(2))\nf.seek(3)\nprint(f.read(2))\nf.close()\n输出结果是____。",
   "opts": [
    "ab 和 de（分两行输出）",
    "ab 和 cd（分两行输出）",
    "ab 和 ef（分两行输出）",
    "程序报错"
   ],
   "ans": 0,
   "exp": "read(2) 从当前位置读取 2 个字符得 ab，指针移到下标 2；seek(3) 把指针移到下标 3（字符 d 处），再读 2 个字符得 de。",
   "difficulty": 2
  },
  {
   "id": "mcq-l5-011",
   "level": 5,
   "topic": "编码",
   "q": "某中文文本文件是以 GBK 编码保存的，却用 `open('note.txt', encoding='utf-8')` 读取它，最可能出现的现象是____。",
   "opts": [
    "读取到的内容比原文件多一倍",
    "抛出 UnicodeDecodeError 异常或出现乱码",
    "Python 会自动转换编码，正常读出中文",
    "读取到的内容为空"
   ],
   "ans": 1,
   "exp": "文件实际是 GBK 编码却按 UTF-8 解码，字节序列无法正确对应字符，通常会抛出 UnicodeDecodeError 或显示乱码；open 的 encoding 参数必须与文件的实际编码一致。",
   "difficulty": 2
  },
  {
   "id": "mcq-l5-012",
   "level": 5,
   "topic": "write()",
   "q": "有如下程序：\nf = open('out.txt', 'w')\nn = f.write('hello')\nprint(n)\nf.close()\n输出结果是____。",
   "opts": [
    "'hello'",
    "None",
    "5",
    "程序报错"
   ],
   "ans": 2,
   "exp": "write(s) 把字符串写入文件，并返回写入的字符个数，'hello' 共 5 个字符，故输出 5；写入的内容在文件里，返回值是字符个数。",
   "difficulty": 3
  },
  {
   "id": "mcq-l5-013",
   "level": 5,
   "topic": "writelines()",
   "q": "有如下程序：\nf = open('out.txt', 'w')\nf.writelines(['aa', 'bb', 'cc'])\nf.close()\nt = open('out.txt').read()\nprint(t)\n输出结果是____。",
   "opts": [
    "aabbcc",
    "aa bb cc",
    "['aa', 'bb', 'cc']",
    "aa,bb,cc"
   ],
   "ans": 0,
   "exp": "writelines() 把列表中的字符串依次原样写入文件，不会自动添加换行符或分隔符，文件内容为 aabbcc；想分行需要在元素中自带 \\n。",
   "difficulty": 1
  },
  {
   "id": "mcq-l5-014",
   "level": 5,
   "topic": "CSV 处理",
   "q": "data.csv 每行格式为：姓名,年龄（英文逗号分隔，UTF-8 编码，无标题行）。要逐行读出每个人的姓名和年龄，横线处应填入的是____。\nfor line in open('data.csv', encoding='utf-8'):\n    name, age = ____",
   "opts": [
    "line.split()",
    "line.strip().split('，')",
    "line.split(' ')",
    "line.strip().split(',')"
   ],
   "ans": 3,
   "exp": "先用 strip() 去掉行尾换行符，再用英文逗号 split(',') 切分并解包；不 strip 会把换行符留在年龄里，split() 默认按空白切分，中文逗号也切不开英文逗号分隔的数据。",
   "difficulty": 2
  },
  {
   "id": "mcq-l5-015",
   "level": 5,
   "topic": "词频统计",
   "q": "文件 stat.txt 的内容为一行：apple banana apple。有如下程序：\ncounts = {}\nfor line in open('stat.txt'):\n    for word in line.split():\n        counts[word] = counts.get(word, 0) + 1\nprint(counts['apple'])\n输出结果是____。",
   "opts": [
    "2",
    "1",
    "3",
    "程序报错"
   ],
   "ans": 0,
   "exp": "程序逐行、逐词统计词频：line.split() 按空白切出单词，counts.get(word, 0) 在键不存在时返回 0，apple 出现 2 次，输出 2。这是基于文件的词频统计典型模式。",
   "difficulty": 3
  },
  {
   "id": "mcq-l5-016",
   "level": 5,
   "topic": "文件统计",
   "q": "文件 nums.txt 中每行一个整数：10、20、30。有如下程序：\ns = 0\nfor line in open('nums.txt'):\n    s += int(line)\nprint(s)\n输出结果是____。",
   "opts": [
    "10",
    "102030",
    "程序报错",
    "60"
   ],
   "ans": 3,
   "exp": "逐行读取文件，int(line) 把每行内容（int 会自动忽略首尾空白）转成整数后累加，10+20+30=60。",
   "difficulty": 2
  },
  {
   "id": "mcq-l5-017",
   "level": 5,
   "topic": "遍历文件",
   "q": "下列关于文件遍历与读取的说法，错误的是____。",
   "opts": [
    "for line in f 可以直接逐行遍历已打开的文件对象 f",
    "文件读取结束后应及时调用 f.close() 释放资源",
    "文件对象 f 必须先用 readlines() 把内容读成列表，才能逐行处理",
    "for line in f 取出的 line 末尾通常带有换行符，常配合 strip() 使用"
   ],
   "ans": 2,
   "exp": "文件对象是可迭代对象，可以直接用 for line in f 逐行读取，不必先 readlines()，C 说法错误；直接遍历得到的每行末尾带换行符，常需 strip()。",
   "difficulty": 2
  },
  {
   "id": "mcq-l5-018",
   "level": 5,
   "topic": "二进制读取",
   "q": "有如下程序（a.txt 是当前目录下已存在的文件）：\nf = open('a.txt', 'rb')\ndata = f.read()\nprint(type(data))\nf.close()\n输出结果是____。",
   "opts": [
    "<class 'str'>",
    "<class 'bytes'>",
    "<class 'list'>",
    "<class 'dict'>"
   ],
   "ans": 1,
   "exp": "'rb' 以二进制模式打开文件，read() 返回 bytes（字节串）对象；文本模式 'r' 读出的才是 str 字符串。",
   "difficulty": 1
  },
  {
   "id": "mcq-l5-019",
   "level": 5,
   "topic": "读写模式",
   "q": "有如下程序：\nf = open('t.txt', 'w+')\nf.write('hello')\nprint(f.read())\nf.close()\n输出结果是____。",
   "opts": [
    "hello",
    "程序报错",
    "输出一个空行（空字符串）",
    "hellohello"
   ],
   "ans": 2,
   "exp": "'w+' 允许读写，先写入 hello 后文件指针停在文件末尾，接着 read() 从指针处开始读，读不到任何内容，输出空字符串；先 f.seek(0) 把指针移回开头再读才能得到 hello。",
   "difficulty": 3
  },
  {
   "id": "mcq-l5-020",
   "level": 5,
   "topic": "文件统计",
   "q": "文件 score.txt 中每行一个整数：80、90、60。有如下程序：\nc = 0\nfor line in open('score.txt'):\n    if int(line) >= 80:\n        c += 1\nprint(c)\n输出结果是____。",
   "opts": [
    "1",
    "2",
    "3",
    "程序报错"
   ],
   "ans": 1,
   "exp": "程序逐行读取并统计不小于 80 的数的个数，80 和 90 满足条件，输出 2。基于文件做统计的一般套路是：逐行读取、类型转换、判断、计数。",
   "difficulty": 2
  },
  {
   "id": "mcq-l6-001",
   "level": 6,
   "topic": "pip 安装",
   "q": "要安装第三方库 jieba，下列命令行命令正确的是____。",
   "opts": [
    "install jieba pip",
    "python install jieba",
    "download jieba",
    "pip install jieba"
   ],
   "ans": 3,
   "exp": "pip 是 Python 的包管理工具，在命令行执行 pip install 库名 即可在线安装，如 pip install jieba；其余写法都不是有效命令。",
   "difficulty": 1
  },
  {
   "id": "mcq-l6-002",
   "level": 6,
   "topic": "whl 安装",
   "q": "在无网络的计算机上安装第三方库，可以先从网上下载该库的 whl 文件到本地，然后执行的命令是____。",
   "opts": [
    "pip install 路径/xxx.whl",
    "pip download 路径/xxx.whl",
    "python 路径/xxx.whl",
    "import 路径/xxx.whl"
   ],
   "ans": 0,
   "exp": "whl 是已打包的库文件，用 pip install 路径/xxx.whl 即可离线安装；download 是下载命令，whl 文件不能当作脚本运行，也不能直接 import。",
   "difficulty": 2
  },
  {
   "id": "mcq-l6-003",
   "level": 6,
   "topic": "模块导入",
   "q": "下列关于 import 与 from…import 的说法，正确的是____。",
   "opts": [
    "from random import randint 之后，使用 randint 仍需写成 random.randint(1, 10)",
    "import 与 from…import 两种导入方式的使用方法完全相同",
    "import 语句只能写在程序的最后一行",
    "import random 之后需用 random.函数名() 的方式调用，而 from random import randint 之后可以直接写 randint(1, 10)"
   ],
   "ans": 3,
   "exp": "import 模块 导入整个模块，调用其中函数要加模块名前缀；from 模块 import 函数 把函数直接引入，可按名字直接调用。import 通常写在程序开头，但并非只能写在最后一行。",
   "difficulty": 1
  },
  {
   "id": "mcq-l6-004",
   "level": 6,
   "topic": "as 别名",
   "q": "执行 `import numpy as np` 后，下列调用正确的是____。",
   "opts": [
    "np.array([1, 2])",
    "numpy.array([1, 2])",
    "as.array([1, 2])",
    "n.array([1, 2])"
   ],
   "ans": 0,
   "exp": "as 为模块指定别名后，只能用别名 np 访问模块内容，再写原名 numpy 会报 NameError；as 和 n 都不是导入时定义的名称。",
   "difficulty": 2
  },
  {
   "id": "mcq-l6-005",
   "level": 6,
   "topic": "random.seed()",
   "q": "在生成随机数前执行 `random.seed(10)`，其作用是____。",
   "opts": [
    "生成 10 个随机数",
    "设置随机数种子，使每次运行程序生成的随机数序列相同",
    "把随机数的取值范围限定在 10 以内",
    "清除之前生成的随机数"
   ],
   "ans": 1,
   "exp": "seed 设置随机数生成器的种子，种子相同则每次运行产生的随机序列完全相同，便于结果复现和测试；它不会改变随机数的取值范围。",
   "difficulty": 1
  },
  {
   "id": "mcq-l6-006",
   "level": 6,
   "topic": "randint",
   "q": "`random.randint(1, 10)` 生成的随机整数的范围是____。",
   "opts": [
    "1 ~ 9 的整数",
    "0 ~ 10 的整数",
    "1 ~ 10 的整数（含 1 和 10）",
    "0 ~ 9 的整数"
   ],
   "ans": 2,
   "exp": "randint(a, b) 返回 [a, b] 区间内的随机整数，包含两个端点，因此既能取到 1 也能取到 10。",
   "difficulty": 1
  },
  {
   "id": "mcq-l6-007",
   "level": 6,
   "topic": "random.seed()",
   "q": "有如下程序：\nimport random\nrandom.seed(2)\na = random.randint(1, 100)\nrandom.seed(2)\nb = random.randint(1, 100)\nprint(a == b)\n输出结果是____。",
   "opts": [
    "False",
    "True",
    "程序报错",
    "每次运行结果都不同"
   ],
   "ans": 1,
   "exp": "第二次 random.seed(2) 把随机序列重置回开头，随后的 randint 与第一次得到相同的值，a 与 b 相等，输出 True；这正是种子可复现随机序列的体现。",
   "difficulty": 3
  },
  {
   "id": "mcq-l6-008",
   "level": 6,
   "topic": "random()",
   "q": "`random.random()` 返回的随机数的范围是____。",
   "opts": [
    "0 ~ 1 之间的随机整数",
    "1 ~ 10 之间的随机小数",
    "0 ~ 100 之间的随机数",
    "0.0 ~ 1.0 之间的随机小数（含 0.0 不含 1.0）"
   ],
   "ans": 3,
   "exp": "random.random() 返回 [0.0, 1.0) 区间的随机小数，能取到 0.0 取不到 1.0；要生成 1~10 的随机整数应使用 randint(1, 10)。",
   "difficulty": 2
  },
  {
   "id": "mcq-l6-009",
   "level": 6,
   "topic": "shuffle",
   "q": "有如下程序：\nimport random\nlst = [1, 2, 3, 4, 5]\nr = random.shuffle(lst)\nprint(r)\n输出结果是____。",
   "opts": [
    "打乱顺序后的新列表",
    "[1, 2, 3, 4, 5]",
    "None",
    "程序报错"
   ],
   "ans": 2,
   "exp": "shuffle(lst) 将列表 lst 原地打乱顺序，返回值是 None；想查看打乱结果应输出 lst 本身。返回 None 是考试常见的坑。",
   "difficulty": 3
  },
  {
   "id": "mcq-l6-010",
   "level": 6,
   "topic": "floor 与 ceil",
   "q": "有如下程序：\nimport math\nprint(math.floor(-3.5), math.ceil(-3.5))\n输出结果是____。",
   "opts": [
    "-4 -3",
    "-3 -4",
    "-3 -3",
    "-4 -4"
   ],
   "ans": 0,
   "exp": "floor 是向下取整，-3.5 往小的方向取 -4；ceil 是向上取整，-3.5 往大的方向取 -3。负数取整的方向容易弄反。",
   "difficulty": 2
  },
  {
   "id": "mcq-l6-011",
   "level": 6,
   "topic": "sqrt 与 pi",
   "q": "有如下程序：\nimport math\nprint(math.sqrt(16), math.pi > 3.14)\n输出结果是____。",
   "opts": [
    "4.0 True",
    "4 True",
    "4.0 False",
    "16 True"
   ],
   "ans": 0,
   "exp": "math.sqrt(16) 返回浮点数 4.0；math.pi 是圆周率常量 3.14159…，大于 3.14，输出 True。注意 sqrt 的结果总是浮点型。",
   "difficulty": 1
  },
  {
   "id": "mcq-l6-012",
   "level": 6,
   "topic": "time",
   "q": "下列关于 time 模块常用函数的说法，正确的是____。",
   "opts": [
    "time.time() 返回当前时间的字符串",
    "time.sleep(2) 可以使程序快进 2 秒",
    "time.time() 返回从 1970 年 1 月 1 日 0 时到当前时刻的秒数（浮点数），time.sleep(2) 使程序暂停 2 秒",
    "time.sleep() 会结束整个程序"
   ],
   "ans": 2,
   "exp": "time.time() 返回时间戳（1970 年至今的浮点秒数）；time.sleep(秒数) 使程序暂停指定秒数，常用于控制执行节奏，并非加速或退出程序。",
   "difficulty": 1
  },
  {
   "id": "mcq-l6-013",
   "level": 6,
   "topic": "strftime",
   "q": "执行 `time.strftime('%Y-%m-%d %H:%M:%S')`，输出结果形如____。",
   "opts": [
    "2026/9/25 14:30",
    "Friday",
    "14:30 2026-09-25",
    "2026-09-25 14:30:05"
   ],
   "ans": 3,
   "exp": "strftime 按格式符生成时间字符串：%Y 是四位年份，%m、%d 是两位月、日，%H:%M:%S 是两位时分秒（不足补零），格式串中的 - 和 : 原样输出，故形如 2026-09-25 14:30:05。",
   "difficulty": 2
  },
  {
   "id": "mcq-l6-014",
   "level": 6,
   "topic": "calendar",
   "q": "有如下程序：\nimport calendar\nprint(calendar.isleap(2024), calendar.isleap(2023))\n输出结果是____。",
   "opts": [
    "False False",
    "True False",
    "True True",
    "False True"
   ],
   "ans": 1,
   "exp": "isleap(y) 判断 y 是否为闰年（能被 4 整除但不能被 100 整除，或能被 400 整除）。2024 是闰年、2023 不是，输出 True False。",
   "difficulty": 1
  },
  {
   "id": "mcq-l6-015",
   "level": 6,
   "topic": "turtle",
   "q": "有如下程序（turtle 画笔初始位于画布中心、朝向右方）：\nimport turtle\nt = turtle.Pen()\nt.forward(100)\nt.left(90)\nt.forward(100)\n程序执行后，画笔相对起点的位置是____。",
   "opts": [
    "位于起点正右方 200 处",
    "回到起点",
    "先向右前进 100，左转 90 度后向上前进 100，最终位于起点正上方 100 处",
    "位于起点正下方 100 处"
   ],
   "ans": 2,
   "exp": "forward(100) 沿当前方向（向右）前进，left(90) 使画笔逆时针左转 90 度改为朝上，再前进 100，最终停在起点上方 100 处。",
   "difficulty": 2
  },
  {
   "id": "mcq-l6-016",
   "level": 6,
   "topic": "turtle",
   "q": "下列关于 turtle 画笔状态的说法，正确的是____。",
   "opts": [
    "penup() 抬笔后移动画笔不留痕迹，pendown() 落笔后移动才画线",
    "penup() 之后移动画笔仍会画出线条",
    "pendown() 的作用是抬起画笔停止画线",
    "goto(x, y) 只能改变画笔的方向，不能改变画笔的位置"
   ],
   "ans": 0,
   "exp": "penup() 抬笔，之后的移动不画线；pendown() 落笔，之后移动才画线；goto(x, y) 使画笔直接移动到坐标 (x, y) 处（抬笔状态下移动不留痕迹）。",
   "difficulty": 2
  },
  {
   "id": "mcq-l6-017",
   "level": 6,
   "topic": "jieba",
   "q": "有如下程序：\nimport jieba\ns = jieba.lcut('我爱人工智能')\nprint(len(s))\n下列说法正确的是____。",
   "opts": [
    "jieba.lcut 返回生成器，len 会报错",
    "jieba.lcut 把中文句子切分成词语组成的列表，len 输出列表中词语的个数",
    "jieba.lcut 返回一个字符串，len 求字符串长度",
    "程序报错，中文句子无法分词"
   ],
   "ans": 1,
   "exp": "jieba.lcut(s) 对中文文本分词并返回由词语组成的列表（jieba.cut 才返回生成器），len 统计的是列表中词语的个数。",
   "difficulty": 1
  },
  {
   "id": "mcq-l6-018",
   "level": 6,
   "topic": "wordcloud",
   "q": "使用 wordcloud 库由文本生成词云图片的基本流程是____。",
   "opts": [
    "把文本文件路径直接赋值给变量即可自动生成图片",
    "先调用 to_file() 保存，再调用 generate() 生成词云",
    "词云必须配合 turtle 库才能显示出来",
    "先创建 WordCloud 对象，调用 generate(文本) 生成词云，再用 to_file(文件名) 把词云保存为图片"
   ],
   "ans": 3,
   "exp": "标准流程：wc = WordCloud(参数) 创建对象 → wc.generate(text) 根据文本生成词云 → wc.to_file('wc.png') 输出图片文件，顺序不能颠倒。",
   "difficulty": 2
  },
  {
   "id": "mcq-l6-019",
   "level": 6,
   "topic": "openpyxl",
   "q": "使用 openpyxl 读取已有 Excel 文件 score.xlsx 中 A1 单元格的值，下列代码正确的是____。",
   "opts": [
    "wb = open('score.xlsx')，然后 print(wb.A1.value)",
    "wb = load_workbook('score.xlsx')，然后直接 print(wb['A1'])",
    "ws = Workbook('score.xlsx')，然后 print(ws['A1'])",
    "wb = load_workbook('score.xlsx')，ws = wb.active，然后 print(ws['A1'].value)"
   ],
   "ans": 3,
   "exp": "读取流程：load_workbook(文件名) 打开工作簿，wb.active 取得当前工作表，ws['A1'].value 取单元格的值；open 是文件操作函数，Workbook 用于新建工作簿，都不能读取已有文件，且单元格的值要取 .value。",
   "difficulty": 3
  },
  {
   "id": "mcq-l6-020",
   "level": 6,
   "topic": "Pillow",
   "q": "有如下程序（当前目录下存在图片 pic.png）：\nfrom PIL import Image\nim = Image.open('pic.png')\nprint(im.size)\nim.save('new.jpg')\n下列说法正确的是____。",
   "opts": [
    "im.size 返回图片文件的大小（字节数）",
    "im.size 返回由图片宽度和高度组成的元组，save 把图片另存为 new.jpg",
    "程序报错，png 格式的图片不能保存为 jpg",
    "Image.open 会直接在屏幕上显示图片"
   ],
   "ans": 1,
   "exp": "im.size 是 (宽, 高) 形式的元组；save(路径) 按扩展名转换格式并保存，PNG 可以另存为 JPG；要在屏幕上显示图片应使用 im.show()。",
   "difficulty": 2
  },
  {
   "id": "mcq-l7-001",
   "level": 7,
   "topic": "正则元字符",
   "q": "正则表达式中，能匹配任意一个数字字符（0~9）的是____。",
   "opts": [
    "\\d",
    "\\w",
    "\\s",
    "."
   ],
   "ans": 0,
   "exp": "\\d 匹配一个数字字符；\\w 匹配字母、数字或下划线，\\s 匹配一个空白字符，. 匹配除换行符外的任意单个字符。",
   "difficulty": 1
  },
  {
   "id": "mcq-l7-002",
   "level": 7,
   "topic": "正则量词",
   "q": "关于正则表达式中的量词 * 和 +，下列说法正确的是____。",
   "opts": [
    "* 匹配 1 次或多次，+ 匹配 0 次或多次",
    "* 和 + 的功能完全相同",
    "* 匹配前面的字符 0 次或多次，+ 匹配前面的字符 1 次或多次",
    "* 只能匹配数字，+ 只能匹配字母"
   ],
   "ans": 2,
   "exp": "x* 表示 x 出现 0 次或多次，x+ 表示 x 出现 1 次或多次；量词作用于它前面的字符或分组，与字符种类无关。",
   "difficulty": 2
  },
  {
   "id": "mcq-l7-003",
   "level": 7,
   "topic": "正则量词",
   "q": "有如下程序：\nimport re\nprint(re.findall(r'go?d', 'gd god good'))\n输出结果是____。",
   "opts": [
    "['gd', 'god', 'good']",
    "['gd', 'god']",
    "['god', 'good']",
    "['good']"
   ],
   "ans": 1,
   "exp": "量词 ? 表示前面的字符出现 0 次或 1 次，o? 即 o 可有可无，故能匹配 gd 和 god；good 中有两个 o，无法匹配。",
   "difficulty": 1
  },
  {
   "id": "mcq-l7-004",
   "level": 7,
   "topic": "正则锚点",
   "q": "有如下程序：\nimport re\nprint(re.findall(r'^\\w+$', 'hello'))\nprint(re.findall(r'^\\w+$', 'hello world'))\n输出结果是____。",
   "opts": [
    "第一行 ['hello']，第二行 []",
    "第一行 []，第二行 ['hello world']",
    "两行都输出 ['hello']",
    "两行都报错"
   ],
   "ans": 0,
   "exp": "^ 匹配字符串开头，$ 匹配字符串结尾，^\\w+$ 要求整个字符串都由字母数字下划线组成：'hello' 整体匹配，'hello world' 中含空格不能整体匹配，findall 返回空列表 []。",
   "difficulty": 2
  },
  {
   "id": "mcq-l7-005",
   "level": 7,
   "topic": "match 与 search",
   "q": "下列关于 re.match() 与 re.search() 的说法，正确的是____。",
   "opts": [
    "两者都从字符串的任意位置开始查找",
    "两者都要求匹配整个字符串",
    "re.match() 只从字符串开头进行匹配，re.search() 会扫描整个字符串并返回第一个匹配",
    "re.match() 返回所有匹配的结果，re.search() 只返回一个匹配"
   ],
   "ans": 2,
   "exp": "match 只在字符串开头尝试匹配，开头不匹配就返回 None；search 从头到尾扫描，返回第一个匹配对象。返回所有匹配结果的是 findall。",
   "difficulty": 2
  },
  {
   "id": "mcq-l7-006",
   "level": 7,
   "topic": "findall",
   "q": "`re.findall(r'\\d+', 'a1b22c333')` 的返回结果是____。",
   "opts": [
    "['a', 'b', 'c']",
    "'122333'",
    "['1b22c333']",
    "['1', '22', '333']"
   ],
   "ans": 3,
   "exp": "findall 返回字符串中所有与模式匹配的子串组成的列表，\\d+ 匹配一串连续数字，得到 ['1', '22', '333']。",
   "difficulty": 1
  },
  {
   "id": "mcq-l7-007",
   "level": 7,
   "topic": "sub",
   "q": "有如下程序：\nimport re\nprint(re.sub(r'\\d+', '*', 'a1b22c333'))\n输出结果是____。",
   "opts": [
    "a*b*c*",
    "*1b22c333",
    "['*', '*', '*']",
    "a*b*c"
   ],
   "ans": 0,
   "exp": "sub(模式, 替换串, 原串) 把原串中所有匹配的子串都替换为指定内容，末尾的 333 也被替换成 *，输出 a*b*c*；漏掉末尾替换是常见错误。",
   "difficulty": 2
  },
  {
   "id": "mcq-l7-008",
   "level": 7,
   "topic": "贪婪与非贪婪",
   "q": "有如下程序：\nimport re\nprint(re.findall(r'a.*b', 'a1ba2b'))\nprint(re.findall(r'a.*?b', 'a1ba2b'))\n输出结果是____。",
   "opts": [
    "第一行 ['a1b', 'a2b']，第二行 ['a1b', 'a2b']",
    "第一行 ['a1ba2b']，第二行 ['a1ba2b']",
    "第一行 ['a1b', 'a2b']，第二行 ['a1ba2b']",
    "第一行 ['a1ba2b']，第二行 ['a1b', 'a2b']"
   ],
   "ans": 3,
   "exp": "量词 * 默认贪婪，尽可能多地匹配，a.*b 一次匹配到 a1ba2b；在量词后加 ? 变为非贪婪，尽可能少地匹配，得到 a1b 和 a2b 两个结果。",
   "difficulty": 3
  },
  {
   "id": "mcq-l7-009",
   "level": 7,
   "topic": "类与对象",
   "q": "下列关于类与对象的说法，错误的是____。",
   "opts": [
    "__init__ 方法在创建对象时自动执行，用于初始化对象的属性",
    "修改一个对象的实例属性会影响该类的其他对象，因为实例属性被所有实例共享",
    "类中方法的第一个参数习惯上命名为 self，代表当前对象本身",
    "创建对象的过程称为实例化，如 s = Student() 就是实例化"
   ],
   "ans": 1,
   "exp": "实例属性属于各个对象自己，互相独立，修改一个对象的实例属性不影响其他对象，B 错误；被所有实例共享的是类属性（定义在类中、方法之外）。",
   "difficulty": 1
  },
  {
   "id": "mcq-l7-010",
   "level": 7,
   "topic": "实例化",
   "q": "有如下程序：\nclass Student:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n    def info(self):\n        return self.name + ':' + str(self.score)\n\ns = Student('李明', 90)\nprint(s.info())\n输出结果是____。",
   "opts": [
    "name:score",
    "程序报错",
    "李明:90",
    "李明"
   ],
   "ans": 2,
   "exp": "实例化时 __init__ 自动执行，把 '李明' 和 90 存为对象属性；s.info() 中 self 绑定到 s，拼接输出 李明:90。调用方法时 self 由 Python 自动传入。",
   "difficulty": 3
  },
  {
   "id": "mcq-l7-011",
   "level": 7,
   "topic": "继承",
   "q": "有如下程序：\nclass A:\n    def hello(self):\n        return 'A'\n\nclass B(A):\n    def hello(self):\n        return 'B' + super().hello()\n\nprint(B().hello())\n输出结果是____。",
   "opts": [
    "A",
    "B",
    "BA",
    "程序报错"
   ],
   "ans": 2,
   "exp": "B 继承 A；B 中重写了 hello 方法，其中 super().hello() 调用父类 A 的版本得 'A'，与 'B' 拼接后输出 BA。",
   "difficulty": 3
  },
  {
   "id": "mcq-l7-012",
   "level": 7,
   "topic": "sqlite3",
   "q": "使用 sqlite3 模块操作 SQLite 数据库的基本步骤，下列顺序正确的是____。",
   "opts": [
    "创建游标 → 连接数据库 → 关闭连接 → 执行 SQL",
    "执行 SQL → 连接数据库 → 获取结果 → 创建游标",
    "连接数据库 → 执行 SQL → 创建游标 → 关闭连接",
    "连接数据库 → 创建游标 → 执行 SQL → 获取结果 → 关闭连接"
   ],
   "ans": 3,
   "exp": "标准流程：sqlite3.connect(文件名) 建立连接，conn.cursor() 创建游标，cursor.execute(SQL) 执行语句，用 fetchone()/fetchall() 获取结果，最后 conn.close() 关闭连接。",
   "difficulty": 1
  },
  {
   "id": "mcq-l7-013",
   "level": 7,
   "topic": "sqlite3",
   "q": "数据库 test.db 的表 t 中共有 3 条记录。有如下程序：\nimport sqlite3\nconn = sqlite3.connect('test.db')\ncur = conn.cursor()\ncur.execute('SELECT * FROM t')\nrows = cur.fetchall()\nprint(len(rows))\nconn.close()\n输出结果是____。",
   "opts": [
    "1",
    "3",
    "0",
    "程序报错"
   ],
   "ans": 1,
   "exp": "fetchall() 取回结果集中的全部记录，组成的列表长度等于记录条数 3；fetchone() 每次只取一条记录。",
   "difficulty": 2
  },
  {
   "id": "mcq-l7-014",
   "level": 7,
   "topic": "json",
   "q": "有如下程序：\nimport json\ns = '{\"a\": 1, \"b\": [2, 3]}'\nd = json.loads(s)\nprint(d['b'][1])\nprint(type(d))\n输出结果是____。",
   "opts": [
    "第一行 3，第二行 <class 'dict'>",
    "第一行 2，第二行 <class 'list'>",
    "程序报错",
    "第一行 3，第二行 <class 'str'>"
   ],
   "ans": 0,
   "exp": "json.loads 把 JSON 字符串解析成 Python 对象：JSON 对象对应字典、JSON 数组对应列表。d['b'] 是 [2, 3]，下标 1 的元素是 3，d 的类型是字典。",
   "difficulty": 1
  },
  {
   "id": "mcq-l7-015",
   "level": 7,
   "topic": "RESTful",
   "q": "关于 RESTful 风格的网络接口，下列说法正确的是____。",
   "opts": [
    "RESTful 接口中，GET 请求用于创建新资源，POST 请求用于查询资源",
    "RESTful 用 URL 表示资源，用 GET/POST/PUT/DELETE 等 HTTP 方法表示对资源的查询、创建、更新、删除操作",
    "RESTful 要求所有请求都使用 GET 方法完成",
    "RESTful 是 Python 特有的协议，其他编程语言无法使用"
   ],
   "ans": 1,
   "exp": "RESTful 以资源为中心设计 URL，用标准 HTTP 方法表达操作语义：GET 查询、POST 创建、PUT 更新、DELETE 删除；它与编程语言无关。",
   "difficulty": 2
  },
  {
   "id": "mcq-l7-016",
   "level": 7,
   "topic": "Flask 路由",
   "q": "有如下 Flask 程序：\nfrom flask import Flask\napp = Flask(__name__)\n\n@app.route('/hello')\ndef hello():\n    return 'hi'\n\napp.run()\n程序运行后，在浏览器中访问 http://127.0.0.1:5000/hello，页面显示的内容是____。",
   "opts": [
    "404 页面，因为路由不存在",
    "hello",
    "hi",
    "程序报错，Flask 必须搭配数据库才能运行"
   ],
   "ans": 2,
   "exp": "@app.route('/hello') 把 URL 路径 /hello 映射到函数 hello，访问该路径时返回函数的返回值 'hi'；页面显示的是函数结果而不是函数名。",
   "difficulty": 2
  },
  {
   "id": "mcq-l7-017",
   "level": 7,
   "topic": "matplotlib",
   "q": "有如下程序：\nimport matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [2, 4, 6], label='line1')\nplt.legend()\nplt.show()\n下列说法正确的是____。",
   "opts": [
    "plt.plot 绘制折线图，label 设置图例文字，plt.legend() 显示图例，plt.show() 弹出窗口显示图形",
    "plt.plot 绘制的是柱状图",
    "删去 plt.show() 图形也会自动弹出窗口",
    "plt.legend() 的作用是把图形保存为图片文件"
   ],
   "ans": 0,
   "exp": "plot 画折线图（bar 画柱状图、pie 画饼图），legend 显示由 label 标注的图例，show 显示绘图窗口；保存图片用 savefig，不调用 show 通常不会弹出窗口。",
   "difficulty": 2
  },
  {
   "id": "mcq-l7-018",
   "level": 7,
   "topic": "matplotlib",
   "q": "要用 matplotlib 展示各品牌手机的市场份额占比（各部分占整体的百分比），最合适的绘图函数是____。",
   "opts": [
    "plt.plot()",
    "plt.scatter()",
    "plt.bar()",
    "plt.pie()"
   ],
   "ans": 3,
   "exp": "pie 绘制饼图，适合表示各部分占整体的比例；plot 折线图适合表现变化趋势，bar 柱状图适合比较数量大小，scatter 散点图适合呈现分布与相关性。",
   "difficulty": 1
  }
 ],
 "blanks": [
  {
   "id": "blk-l1-001",
   "level": 1,
   "title": "三数求和与平均值",
   "desc": "输入三个整数（每行一个），输出它们的和与平均值，平均值保留 2 位小数。例如输入 3、5、10，输出两行：和为18 与 平均值为6.00。",
   "code": "a = int(input())\nb = int(input())\nc = int(input())\ntotal = ___(1)___\navg = ___(2)___\nprint('和为%d' % total)\nprint('平均值为%.2f' % ___(3)___)",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "a + b + c",
      "a+b+c"
     ],
     "hint": "把三个变量相加"
    },
    {
     "n": 2,
     "answers": [
      "total / 3",
      "total/3"
     ],
     "hint": "和除以 3，用 / 得到浮点数"
    },
    {
     "n": 3,
     "answers": [
      "avg"
     ],
     "hint": "输出平均值变量"
    }
   ],
   "stdin": "3\n5\n10\n",
   "expected": "和为18\n平均值为6.00",
   "hint": "/ 的结果是浮点数；%.2f 表示保留两位小数",
   "exp": "考查算术表达式、变量赋值与 % 格式化输出（%d 整数、%.2f 两位小数）。",
   "ref": "a = int(input())\nb = int(input())\nc = int(input())\ntotal = a + b + c\navg = total / 3\nprint('和为%d' % total)\nprint('平均值为%.2f' % avg)"
  },
  {
   "id": "blk-l1-002",
   "level": 1,
   "title": "交换两个变量",
   "desc": "输入两个整数 a、b（每行一个），先按原顺序输出，再交换后输出。输出格式形如：交换前: a=3, b=8 与 交换后: a=8, b=3。",
   "code": "a = int(input())\nb = int(input())\nprint('交换前: a=%d, b=%d' % (a, b))\na, b = ___(1)___\nprint('交换后: a=%d, b=%d' % (___(2)___, ___(3)___))",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "b, a",
      "b,a"
     ],
     "hint": "利用元组打包同时赋值"
    },
    {
     "n": 2,
     "answers": [
      "a"
     ],
     "hint": "交换后 a 中是原来的 b 的值"
    },
    {
     "n": 3,
     "answers": [
      "b"
     ],
     "hint": "交换后 b 中是原来的 a 的值"
    }
   ],
   "stdin": "3\n8\n",
   "expected": "交换前: a=3, b=8\n交换后: a=8, b=3",
   "hint": "a, b = b, a 是 Python 特有的同时赋值写法",
   "exp": "考查序列解包（元组赋值）交换变量与 % 格式化输出。",
   "ref": "a = int(input())\nb = int(input())\nprint('交换前: a=%d, b=%d' % (a, b))\na, b = b, a\nprint('交换后: a=%d, b=%d' % (a, b))"
  },
  {
   "id": "blk-l1-003",
   "level": 1,
   "title": "温度换算与表达式求值",
   "desc": "第一行输入华氏温度（可能是小数），按公式 摄氏 = (华氏 - 32) / 1.8 换算，输出形如：华氏100.0度=摄氏37.8度（均保留 1 位小数）。第二行输入一个算式字符串（如 2**10），用 eval 求值后输出：计算结果: 1024。",
   "code": "f = float(input())\nc = ___(1)___\nprint('华氏%.1f度=摄氏%.1f度' % (___(2)___, c))\ns = input()\nprint('计算结果:', ___(3)___(s))",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "(f - 32) / 1.8",
      "(f-32)/1.8",
      "(f - 32) * 5 / 9",
      "(f-32)*5/9"
     ],
     "hint": "按华氏转摄氏公式写表达式"
    },
    {
     "n": 2,
     "answers": [
      "f"
     ],
     "hint": "华氏温度就是变量 f"
    },
    {
     "n": 3,
     "answers": [
      "eval"
     ],
     "hint": "eval 可以计算字符串形式的表达式"
    }
   ],
   "stdin": "100\n2**10\n",
   "expected": "华氏100.0度=摄氏37.8度\n计算结果: 1024",
   "hint": "float() 把输入字符串转成浮点数；eval 返回表达式的值",
   "exp": "考查 float() 类型转换、算术表达式、%.1f 格式化与 eval 表达式求值。",
   "ref": "f = float(input())\nc = (f - 32) / 1.8\nprint('华氏%.1f度=摄氏%.1f度' % (f, c))\ns = input()\nprint('计算结果:', eval(s))"
  },
  {
   "id": "blk-l2-002",
   "level": 2,
   "title": "素数判断",
   "desc": "输入若干个整数（每行一个，输入空行结束），对每个数判断是否为素数，输出形如：7 是素数、15 不是素数。",
   "code": "def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, ___(1)___):\n        if n % i == 0:\n            return ___(2)___\n    return True\n\nwhile True:\n    s = input()\n    if s == '':\n        ___(3)___\n    n = int(s)\n    if is_prime(n):\n        print(n, '是素数')\n    else:\n        print(n, '不是素数')",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "int(n ** 0.5) + 1",
      "int(n**0.5) + 1",
      "n",
      "n // 2 + 1",
      "n//2 + 1",
      "n//2+1"
     ],
     "hint": "试除的上界，可以到 n-1，也可以只试到平方根"
    },
    {
     "n": 2,
     "answers": [
      "False"
     ],
     "hint": "能被整除就不是素数"
    },
    {
     "n": 3,
     "answers": [
      "break"
     ],
     "hint": "空行作为结束标志，退出无限循环"
    }
   ],
   "stdin": "7\n15\n2\n1\n\n",
   "expected": "7 是素数\n15 不是素数\n2 是素数\n1 不是素数",
   "hint": "素数指大于 1 且只能被 1 和自身整除的数",
   "exp": "考查函数定义、循环试除判断素数、return 返回布尔值与 break 结束无限循环。",
   "ref": "def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n ** 0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\nwhile True:\n    s = input()\n    if s == '':\n        break\n    n = int(s)\n    if is_prime(n):\n        print(n, '是素数')\n    else:\n        print(n, '不是素数')"
  },
  {
   "id": "blk-l2-003",
   "level": 2,
   "title": "九九乘法表",
   "desc": "输出下三角九九乘法表：第 i 行输出 i 个等式（i 从 1 到 9），等式形如 i*j=积，同一行内用制表符 \\t 分隔。",
   "code": "for i in range(1, 10):\n    for j in range(1, ___(1)___):\n        print('%d*%d=%d' % (i, j, ___(2)___), end='\\t')\n    ___(3)___",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "i + 1",
      "i+1"
     ],
     "hint": "第 i 行有 i 个等式，j 取 1..i"
    },
    {
     "n": 2,
     "answers": [
      "i * j",
      "i*j"
     ],
     "hint": "等式的积"
    },
    {
     "n": 3,
     "answers": [
      "print()"
     ],
     "hint": "每行结束后换行"
    }
   ],
   "stdin": "",
   "expected": "1*1=1\t\n2*1=2\t2*2=4\t\n3*1=3\t3*2=6\t3*3=9\t\n4*1=4\t4*2=8\t4*3=12\t4*4=16\t\n5*1=5\t5*2=10\t5*3=15\t5*4=20\t5*5=25\t\n6*1=6\t6*2=12\t6*3=18\t6*4=24\t6*5=30\t6*6=36\t\n7*1=7\t7*2=14\t7*3=21\t7*4=28\t7*5=35\t7*6=42\t7*7=49\t\n8*1=8\t8*2=16\t8*3=24\t8*4=32\t8*5=40\t8*6=48\t8*7=56\t8*8=64\t\n9*1=9\t9*2=18\t9*3=27\t9*4=36\t9*5=45\t9*6=54\t9*7=63\t9*8=72\t9*9=81\t",
   "hint": "内层循环控制每行的列数，end='\\t' 使 print 不换行",
   "exp": "考查嵌套循环、range 边界、% 格式化与 print 的 end 参数。",
   "ref": "for i in range(1, 10):\n    for j in range(1, i + 1):\n        print('%d*%d=%d' % (i, j, i * j), end='\\t')\n    print()"
  },
  {
   "id": "blk-l2-004",
   "level": 2,
   "title": "圆周率近似",
   "desc": "用公式 π/4 = 1 - 1/3 + 1/5 - 1/7 + … 计算圆周率近似值：从 1 开始逐项累加，符号交替，当某一项的绝对值小于 1e-5 时停止累加，最后输出（保留 6 位小数）：圆周率近似值为3.141573。",
   "code": "pi4 = 0\nsign = 1\ni = 1\nwhile True:\n    item = sign / i\n    if abs(item) < 1e-5:\n        ___(1)___\n    pi4 = pi4 + item\n    sign = ___(2)___\n    i = i + 2\nprint('圆周率近似值为%.6f' % (___(3)___))",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "break"
     ],
     "hint": "项太小就退出无限循环"
    },
    {
     "n": 2,
     "answers": [
      "-sign"
     ],
     "hint": "符号正负交替"
    },
    {
     "n": 3,
     "answers": [
      "pi4 * 4",
      "pi4*4",
      "4 * pi4",
      "4*pi4"
     ],
     "hint": "累加和是 π/4，要乘 4"
    }
   ],
   "stdin": "",
   "expected": "圆周率近似值为3.141573",
   "hint": "sign 在 1 和 -1 之间交替；abs(item) 求绝对值",
   "exp": "考查 while True 无限循环、break、累加求和、符号交替与 %.6f 格式化。",
   "ref": "pi4 = 0\nsign = 1\ni = 1\nwhile True:\n    item = sign / i\n    if abs(item) < 1e-5:\n        break\n    pi4 = pi4 + item\n    sign = -sign\n    i = i + 2\nprint('圆周率近似值为%.6f' % (pi4 * 4))"
  },
  {
   "id": "blk-l2-005",
   "level": 2,
   "title": "水仙花数",
   "desc": "打印所有三位水仙花数（各位数字立方和等于其本身的三位数），每行一个。",
   "code": "for n in range(100, ___(1)___):\n    a = n // 100\n    b = n // 10 % 10\n    c = ___(2)___\n    if a ** 3 + b ** 3 + c ** 3 == ___(3)___:\n        print(n)",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "1000"
     ],
     "hint": "三位数的范围是 100~999"
    },
    {
     "n": 2,
     "answers": [
      "n % 10"
     ],
     "hint": "个位数字"
    },
    {
     "n": 3,
     "answers": [
      "n"
     ],
     "hint": "与 n 本身比较"
    }
   ],
   "stdin": "",
   "expected": "153\n370\n371\n407",
   "hint": "a、b、c 分别是百位、十位、个位",
   "exp": "考查 range 边界、整除与取余运算拆分位数、幂运算符 ** 与条件判断。",
   "ref": "for n in range(100, 1000):\n    a = n // 100\n    b = n // 10 % 10\n    c = n % 10\n    if a ** 3 + b ** 3 + c ** 3 == n:\n        print(n)"
  },
  {
   "id": "blk-l2-006",
   "level": 2,
   "title": "辗转相除法求最大公约数",
   "desc": "输入两个正整数（每行一个），用辗转相除法求它们的最大公约数，并输出最小公倍数。输出形如：最大公约数: 12 与 最小公倍数: 72。",
   "code": "a = int(input())\nb = int(input())\nm, n = a, b\nwhile n != 0:\n    r = m % ___(1)___\n    m = n\n    n = ___(2)___\nprint('最大公约数:', ___(3)___)\nprint('最小公倍数:', a * b // m)",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "n"
     ],
     "hint": "用除数去除"
    },
    {
     "n": 2,
     "answers": [
      "r"
     ],
     "hint": "余数作为新一轮的除数"
    },
    {
     "n": 3,
     "answers": [
      "m"
     ],
     "hint": "循环结束时 m 就是最大公约数"
    }
   ],
   "stdin": "24\n36\n",
   "expected": "最大公约数: 12\n最小公倍数: 72",
   "hint": "最小公倍数 = 两数之积 // 最大公约数",
   "exp": "考查 while 循环实现辗转相除法、变量轮换与整除运算求最小公倍数。",
   "ref": "a = int(input())\nb = int(input())\nm, n = a, b\nwhile n != 0:\n    r = m % n\n    m = n\n    n = r\nprint('最大公约数:', m)\nprint('最小公倍数:', a * b // m)"
  },
  {
   "id": "blk-l3-001",
   "level": 3,
   "title": "字符串反转与回文判断",
   "desc": "输入一个字符串（可能含大小写），先把字母全部转为小写，输出反转后的字符串，再判断反转后是否与原串相同：相同输出 是回文，否则输出 不是回文。",
   "code": "s = input()\ns = s.lower()\nrs = ___(1)___\nprint('反转后:', rs)\nif ___(2)___:\n    print('是回文')\n___(3)___:\n    print('不是回文')",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "s[::-1]"
     ],
     "hint": "步长为 -1 的切片实现反转"
    },
    {
     "n": 2,
     "answers": [
      "s == rs"
     ],
     "hint": "比较原串与反转串"
    },
    {
     "n": 3,
     "answers": [
      "else"
     ],
     "hint": "if 的另一个分支"
    }
   ],
   "stdin": "Level\n",
   "expected": "反转后: level\n是回文",
   "hint": "s[::-1] 表示从尾到头每隔 1 个字符取一次",
   "exp": "考查 lower() 方法、切片 s[::-1] 反转字符串、字符串比较与 if-else 分支。",
   "ref": "s = input()\ns = s.lower()\nrs = s[::-1]\nprint('反转后:', rs)\nif s == rs:\n    print('是回文')\nelse:\n    print('不是回文')"
  },
  {
   "id": "blk-l3-002",
   "level": 3,
   "title": "筛选列表中的偶数",
   "desc": "输入一行用空格分隔的整数，筛选出其中的偶数放入新列表，输出偶数列表、偶数个数与偶数之和。例如输入 12 7 8 3 6，输出：偶数列表: [12, 8, 6]、偶数个数: 3、偶数和: 26。",
   "code": "nums = list(map(int, input().split()))\nevens = []\nfor x in nums:\n    if ___(1)___:\n        evens.append(x)\nprint('偶数列表:', evens)\nprint('偶数个数:', ___(2)___)\nprint('偶数和:', ___(3)___)",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "x % 2 == 0"
     ],
     "hint": "能被 2 整除即偶数"
    },
    {
     "n": 2,
     "answers": [
      "len(evens)"
     ],
     "hint": "统计列表元素个数"
    },
    {
     "n": 3,
     "answers": [
      "sum(evens)"
     ],
     "hint": "求列表元素之和"
    }
   ],
   "stdin": "12 7 8 3 6\n",
   "expected": "偶数列表: [12, 8, 6]\n偶数个数: 3\n偶数和: 26",
   "hint": "append() 向列表末尾添加元素",
   "exp": "考查 input().split() 与 map(int, ...) 组合读入、取余判断偶数、列表 append 方法与 len()/sum() 函数。",
   "ref": "nums = list(map(int, input().split()))\nevens = []\nfor x in nums:\n    if x % 2 == 0:\n        evens.append(x)\nprint('偶数列表:', evens)\nprint('偶数个数:', len(evens))\nprint('偶数和:', sum(evens))"
  },
  {
   "id": "blk-l3-003",
   "level": 3,
   "title": "列表解析式",
   "desc": "输入一个正整数 n（如 6），用列表解析式生成 1~n 各数的平方列表 squares，再生成 1~n 中的奇数列表 odds，输出两个列表及平方之和。例如 n=6 时输出：[1, 4, 9, 16, 25, 36]、[1, 3, 5]、平方和: 91。",
   "code": "n = int(input())\nsquares = [___(1)___ for i in range(1, n + 1)]\nodds = [i for i in range(1, n + 1) if i % 2 == ___(2)___]\nprint(squares)\nprint(odds)\nprint('平方和:', ___(3)___)",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "i * i",
      "i*i",
      "i ** 2",
      "i**2"
     ],
     "hint": "平方"
    },
    {
     "n": 2,
     "answers": [
      "1"
     ],
     "hint": "奇数除以 2 余 1"
    },
    {
     "n": 3,
     "answers": [
      "sum(squares)"
     ],
     "hint": "对平方列表求和"
    }
   ],
   "stdin": "6\n",
   "expected": "[1, 4, 9, 16, 25, 36]\n[1, 3, 5]\n平方和: 91",
   "hint": "列表解析式格式：[表达式 for 变量 in 序列 if 条件]",
   "exp": "考查列表解析式的基本形式与带 if 筛选的写法，以及 sum() 求和。",
   "ref": "n = int(input())\nsquares = [i * i for i in range(1, n + 1)]\nodds = [i for i in range(1, n + 1) if i % 2 == 1]\nprint(squares)\nprint(odds)\nprint('平方和:', sum(squares))"
  },
  {
   "id": "blk-l3-004",
   "level": 3,
   "title": "字典统计字符频次",
   "desc": "输入一行字符串，用字典统计每个字符出现的次数，按出现先后顺序输出（每行格式：字符 出现 次数 次），最后输出不同字符的个数。例如输入 banana，输出：b 出现 1 次、a 出现 3 次、n 出现 2 次、不同字符数: 3。",
   "code": "s = input()\nd = {}\nfor ch in s:\n    d[___(1)___] = d.get(ch, 0) + ___(2)___\nfor k, v in d.items():\n    print(k, '出现', v, '次')\nprint('不同字符数:', ___(3)___)",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "ch"
     ],
     "hint": "以当前字符为键"
    },
    {
     "n": 2,
     "answers": [
      "1"
     ],
     "hint": "每见到一次计数加 1"
    },
    {
     "n": 3,
     "answers": [
      "len(d)"
     ],
     "hint": "字典中键的个数"
    }
   ],
   "stdin": "banana\n",
   "expected": "b 出现 1 次\na 出现 3 次\nn 出现 2 次\n不同字符数: 3",
   "hint": "d.get(k, 0) 在键不存在时返回默认值 0",
   "exp": "考查字典分类计数、get 方法设置默认值、items() 遍历与 len() 求键数。",
   "ref": "s = input()\nd = {}\nfor ch in s:\n    d[ch] = d.get(ch, 0) + 1\nfor k, v in d.items():\n    print(k, '出现', v, '次')\nprint('不同字符数:', len(d))"
  },
  {
   "id": "blk-l3-005",
   "level": 3,
   "title": "集合去重与排序",
   "desc": "输入一行用空格分隔的整数，用集合去掉重复元素后转为列表并升序排序，输出去重后个数、排序结果以及最大值和最小值。例如输入 5 3 9 3 5 1 7，输出：去重后共 5 个不同数、[1, 3, 5, 7, 9]、最大值: 9 最小值: 1。",
   "code": "nums = list(map(int, input().split()))\ns = ___(1)___(nums)\nlst = ___(2)___(s)\nlst.___(3)___()\nprint('去重后共', len(lst), '个不同数')\nprint(lst)\nprint('最大值:', lst[-1], '最小值:', lst[0])",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "set"
     ],
     "hint": "集合自动去重"
    },
    {
     "n": 2,
     "answers": [
      "list"
     ],
     "hint": "集合再转回列表"
    },
    {
     "n": 3,
     "answers": [
      "sort"
     ],
     "hint": "列表原地升序排序"
    }
   ],
   "stdin": "5 3 9 3 5 1 7\n",
   "expected": "去重后共 5 个不同数\n[1, 3, 5, 7, 9]\n最大值: 9 最小值: 1",
   "hint": "sort() 排序后 lst[-1] 是最大值，lst[0] 是最小值",
   "exp": "考查 set() 去重、list() 类型转换、sort() 排序与列表索引。",
   "ref": "nums = list(map(int, input().split()))\ns = set(nums)\nlst = list(s)\nlst.sort()\nprint('去重后共', len(lst), '个不同数')\nprint(lst)\nprint('最大值:', lst[-1], '最小值:', lst[0])"
  },
  {
   "id": "blk-l4-001",
   "level": 4,
   "title": "自定义函数求最大值与阶乘",
   "desc": "输入三个整数（每行一个），函数 mymax 返回三者中的最大值；函数 fact 用循环计算阶乘。输出最大值及其阶乘。例如输入 3、9、5，输出：最大值: 9 与 最大值的阶乘: 362880。",
   "code": "def mymax(a, b, c):\n    m = a\n    if b > m:\n        m = b\n    if ___(1)___:\n        m = c\n    return ___(2)___\n\ndef fact(n):\n    r = 1\n    for i in range(2, n + 1):\n        r = r ___(3)___ i\n    return r\n\na = int(input())\nb = int(input())\nc = int(input())\nt = mymax(a, b, c)\nprint('最大值:', t)\nprint('最大值的阶乘:', fact(t))",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "c > m"
     ],
     "hint": "c 比当前最大值还大"
    },
    {
     "n": 2,
     "answers": [
      "m"
     ],
     "hint": "返回最大值"
    },
    {
     "n": 3,
     "answers": [
      "*"
     ],
     "hint": "累乘用乘法"
    }
   ],
   "stdin": "3\n9\n5\n",
   "expected": "最大值: 9\n最大值的阶乘: 362880",
   "hint": "求最值先假设第一个数最大，再逐个比较更新",
   "exp": "考查函数定义与 return、分支求最值、循环累乘求阶乘。",
   "ref": "def mymax(a, b, c):\n    m = a\n    if b > m:\n        m = b\n    if c > m:\n        m = c\n    return m\n\ndef fact(n):\n    r = 1\n    for i in range(2, n + 1):\n        r = r * i\n    return r\n\na = int(input())\nb = int(input())\nc = int(input())\nt = mymax(a, b, c)\nprint('最大值:', t)\nprint('最大值的阶乘:', fact(t))"
  },
  {
   "id": "blk-l4-002",
   "level": 4,
   "title": "默认参数与关键字参数",
   "desc": "函数 power(x, n=2) 计算 x 的 n 次方（n 有默认值 2）。依次输出 power(3)、power(2, 10) 和 power(x=5, n=3) 的结果，每行一个：9、1024、125。",
   "code": "def power(x, n=2):\n    r = 1\n    for i in range(n):\n        r = r * x\n    return ___(1)___\n\nprint(power(3))\nprint(power(2, ___(2)___))\nprint(power(x=___(3)___, n=3))",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "r"
     ],
     "hint": "返回累乘结果"
    },
    {
     "n": 2,
     "answers": [
      "10"
     ],
     "hint": "2 的 10 次方是 1024"
    },
    {
     "n": 3,
     "answers": [
      "5"
     ],
     "hint": "关键字参数 x=5"
    }
   ],
   "stdin": "",
   "expected": "9\n1024\n125",
   "hint": "不传 n 时使用默认值 2；关键字参数按名字传递，顺序可以颠倒",
   "exp": "考查函数默认参数（省略实参时取默认值）与关键字参数（x=5, n=3）的用法。",
   "ref": "def power(x, n=2):\n    r = 1\n    for i in range(n):\n        r = r * x\n    return r\n\nprint(power(3))\nprint(power(2, 10))\nprint(power(x=5, n=3))"
  },
  {
   "id": "blk-l4-003",
   "level": 4,
   "title": "map 与 filter 处理列表",
   "desc": "输入一行用空格分隔的整数，用 map 把每个数变成它的平方，用 filter 筛出平方后大于 50 的数，输出平方列表、筛出的列表与平均值（保留 1 位小数）。例如输入 3 6 8 5，输出：平方列表: [9, 36, 64, 25]、大于50的数: [64]、平均值: 33.5。",
   "code": "nums = list(map(int, input().split()))\nsq = list(map(___(1)___, nums))\nbig = list(filter(lambda x: x > ___(2)___, sq))\nprint('平方列表:', sq)\nprint('大于50的数:', big)\nprint('平均值: %.1f' % (sum(sq) / ___(3)___))",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "lambda x: x * x",
      "lambda x: x*x",
      "lambda x: x**2"
     ],
     "hint": "用 lambda 返回 x 的平方"
    },
    {
     "n": 2,
     "answers": [
      "50"
     ],
     "hint": "筛选阈值是 50"
    },
    {
     "n": 3,
     "answers": [
      "len(sq)",
      "len(nums)"
     ],
     "hint": "平均值 = 总和 / 个数"
    }
   ],
   "stdin": "3 6 8 5\n",
   "expected": "平方列表: [9, 36, 64, 25]\n大于50的数: [64]\n平均值: 33.5",
   "hint": "map 对每个元素施加函数，filter 按条件筛选",
   "exp": "考查 lambda 表达式、map 映射、filter 筛选与 len()/sum() 统计。",
   "ref": "nums = list(map(int, input().split()))\nsq = list(map(lambda x: x * x, nums))\nbig = list(filter(lambda x: x > 50, sq))\nprint('平方列表:', sq)\nprint('大于50的数:', big)\nprint('平均值: %.1f' % (sum(sq) / len(sq)))"
  },
  {
   "id": "blk-l4-004",
   "level": 4,
   "title": "递归求斐波那契与汉诺塔次数",
   "desc": "递归函数 fib(n) 返回斐波那契数列第 n 项（f(1)=f(2)=1）；递归函数 hanoi(n) 返回 n 个盘子的汉诺塔最少移动次数（hanoi(1)=1，hanoi(n)=2*hanoi(n-1)+1）。输出 fib(10) 与 hanoi(5)，格式：fib(10) = 55 与 hanoi(5) = 31。",
   "code": "def fib(n):\n    if n == 1 or n == ___(1)___:\n        return 1\n    return fib(n - 1) + ___(2)___\n\ndef hanoi(n):\n    if n == 1:\n        return 1\n    return 2 * hanoi(n - 1) + ___(3)___\n\nprint('fib(10) =', fib(10))\nprint('hanoi(5) =', hanoi(5))",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "2"
     ],
     "hint": "递归基例有两个：n=1 和 n=2"
    },
    {
     "n": 2,
     "answers": [
      "fib(n - 2)",
      "fib(n-2)"
     ],
     "hint": "斐波那契递推式"
    },
    {
     "n": 3,
     "answers": [
      "1"
     ],
     "hint": "移动次数递推：2*f(n-1)+1"
    }
   ],
   "stdin": "",
   "expected": "fib(10) = 55\nhanoi(5) = 31",
   "hint": "递归 = 基例（直接得出结果）+ 递推式（调用自己）",
   "exp": "考查递归函数的基例与递推式：斐波那契数列与汉诺塔移动次数 2^n-1。",
   "ref": "def fib(n):\n    if n == 1 or n == 2:\n        return 1\n    return fib(n - 1) + fib(n - 2)\n\ndef hanoi(n):\n    if n == 1:\n        return 1\n    return 2 * hanoi(n - 1) + 1\n\nprint('fib(10) =', fib(10))\nprint('hanoi(5) =', hanoi(5))"
  },
  {
   "id": "blk-l5-001",
   "level": 5,
   "title": "文件逐行读取统计",
   "desc": "data.txt（UTF-8 编码）存放了若干行英文句子。逐行读取：统计总行数、包含 Python 的行数，以及所有行的平均长度（每行去掉行尾换行符后取长度，保留 1 位小数）。输出格式：总行数: 4、含Python的行数: 2、平均行长: 19.0。",
   "files": [
    {
     "name": "data.txt",
     "content": "Python is easy to learn\nI love coding\nLife is short, use Python\nKeep it simple!\n"
    }
   ],
   "code": "f = open('data.txt', 'r', encoding='utf-8')\nn = 0\ncnt = 0\ntotal = 0\nfor line in f:\n    line = line.___(1)___()\n    n = n + 1\n    total = total + ___(2)___\n    if 'Python' in line:\n        cnt = cnt + 1\nprint('总行数:', n)\nprint('含Python的行数:', cnt)\nprint('平均行长: %.1f' % (total / n))\nf.___(3)___()",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "strip"
     ],
     "hint": "去掉行尾的换行符"
    },
    {
     "n": 2,
     "answers": [
      "len(line)"
     ],
     "hint": "当前行的长度"
    },
    {
     "n": 3,
     "answers": [
      "close"
     ],
     "hint": "文件用完要关闭"
    }
   ],
   "stdin": "",
   "expected": "总行数: 4\n含Python的行数: 2\n平均行长: 19.0",
   "hint": "for line in f 逐行迭代文件对象",
   "exp": "考查 open 打开文件、for 逐行读取、strip() 去换行、len() 计长、in 判断包含与 close()。",
   "ref": "f = open('data.txt', 'r', encoding='utf-8')\nn = 0\ncnt = 0\ntotal = 0\nfor line in f:\n    line = line.strip()\n    n = n + 1\n    total = total + len(line)\n    if 'Python' in line:\n        cnt = cnt + 1\nprint('总行数:', n)\nprint('含Python的行数:', cnt)\nprint('平均行长: %.1f' % (total / n))\nf.close()"
  },
  {
   "id": "blk-l5-002",
   "level": 5,
   "title": "CSV 成绩文件处理",
   "desc": "data.csv（UTF-8 编码）首行为标题行：姓名,语文,数学,英语，其后每行是一名学生的三科成绩。逐行读取并计算每人的总分（输出格式：姓名 总分 数值），最后输出总分最高的学生：总分最高: 姓名 总分。跳过标题行用 next(f)。",
   "files": [
    {
     "name": "data.csv",
     "content": "姓名,语文,数学,英语\n张三,85,92,78\n李四,90,88,95\n王五,76,85,80\n"
    }
   ],
   "code": "f = open('data.csv', 'r', encoding='utf-8')\n___(1)___\nbest_name = ''\nbest_total = 0\nfor line in f:\n    parts = line.strip().___(2)___(',')\n    total = int(parts[1]) + int(parts[2]) + int(parts[3])\n    print(parts[0], '总分', total)\n    if total > best_total:\n        best_total = total\n        best_name = ___(3)___\nf.close()\nprint('总分最高:', best_name, best_total)",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "next(f)",
      "f.readline()"
     ],
     "hint": "读走第一行标题"
    },
    {
     "n": 2,
     "answers": [
      "split"
     ],
     "hint": "按逗号切分一行"
    },
    {
     "n": 3,
     "answers": [
      "parts[0]"
     ],
     "hint": "姓名是切分后的第一项"
    }
   ],
   "stdin": "",
   "expected": "张三 总分 255\n李四 总分 273\n王五 总分 241\n总分最高: 李四 273",
   "hint": "split(',') 得到列表，parts[1]~parts[3] 是三科成绩字符串，要 int() 转换",
   "exp": "考查 CSV 逐行处理：next() 跳过标题、strip() 去换行、split(',') 切分、int() 转换与打擂台求最值。",
   "ref": "f = open('data.csv', 'r', encoding='utf-8')\nnext(f)\nbest_name = ''\nbest_total = 0\nfor line in f:\n    parts = line.strip().split(',')\n    total = int(parts[1]) + int(parts[2]) + int(parts[3])\n    print(parts[0], '总分', total)\n    if total > best_total:\n        best_total = total\n        best_name = parts[0]\nf.close()\nprint('总分最高:', best_name, best_total)"
  },
  {
   "id": "blk-l5-003",
   "level": 5,
   "title": "英文词频统计",
   "desc": "article.txt（UTF-8 编码）是一篇英文短文。先把全部字母转为小写，再把标点 .,!?;: 替换为空格，然后按空格分词，用字典统计词频。输出不同单词数与 the 出现的次数，格式：不同单词数: 6 与 the 出现次数: 2。",
   "files": [
    {
     "name": "article.txt",
     "content": "Python is simple. Python is powerful!\nThe simple is the best.\n"
    }
   ],
   "code": "f = open('article.txt', 'r', encoding='utf-8')\ntext = f.read().lower()\nf.close()\nfor ch in '.,!?;:':\n    text = text.replace(ch, ' ')\nwords = text.___(1)___()\nd = {}\nfor w in words:\n    d[w] = d.get(w, 0) + ___(2)___\nprint('不同单词数:', ___(3)___)\nprint('the 出现次数:', d.get('the', 0))",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "split"
     ],
     "hint": "按空白切分成单词列表"
    },
    {
     "n": 2,
     "answers": [
      "1"
     ],
     "hint": "每出现一次计数加 1"
    },
    {
     "n": 3,
     "answers": [
      "len(d)"
     ],
     "hint": "不同单词的个数就是键的个数"
    }
   ],
   "stdin": "",
   "expected": "不同单词数: 6\nthe 出现次数: 2",
   "hint": "split() 不带参数时按任意空白（含换行）切分，比 split(' ') 更稳",
   "exp": "考查文件读入、字符串 lower()/replace()、split() 分词与字典 get 词频统计。",
   "ref": "f = open('article.txt', 'r', encoding='utf-8')\ntext = f.read().lower()\nf.close()\nfor ch in '.,!?;:':\n    text = text.replace(ch, ' ')\nwords = text.split()\nd = {}\nfor w in words:\n    d[w] = d.get(w, 0) + 1\nprint('不同单词数:', len(d))\nprint('the 出现次数:', d.get('the', 0))"
  },
  {
   "id": "blk-l5-004",
   "level": 5,
   "title": "文件复制与追加",
   "desc": "把 source.txt（UTF-8 编码）的内容逐行复制到 copy.txt（用写模式打开），再以追加模式在 copy.txt 末尾写入一行 --- END ---，最后读出 copy.txt 全部内容打印。输出：Hello Python、File copy test、--- END --- 共三行。",
   "files": [
    {
     "name": "source.txt",
     "content": "Hello Python\nFile copy test\n"
    }
   ],
   "code": "f = open('source.txt', 'r', encoding='utf-8')\ng = open('copy.txt', ___(1)___, encoding='utf-8')\nfor line in f:\n    g.write(line)\nf.close()\ng.close()\ng = open('copy.txt', ___(2)___, encoding='utf-8')\ng.write('--- END ---\\n')\ng.___(3)___()\nh = open('copy.txt', 'r', encoding='utf-8')\nprint(h.read(), end='')\nh.close()",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "'w'",
      "\"w\""
     ],
     "hint": "写模式打开新文件"
    },
    {
     "n": 2,
     "answers": [
      "'a'",
      "\"a\""
     ],
     "hint": "追加模式不会清空原内容"
    },
    {
     "n": 3,
     "answers": [
      "close"
     ],
     "hint": "写完关闭文件，内容才稳妥落盘"
    }
   ],
   "stdin": "",
   "expected": "Hello Python\nFile copy test\n--- END ---\n",
   "hint": "r 读、w 写（清空）、a 追加，是三种最常用的文件模式",
   "exp": "考查文件读写模式 r/w/a 的区别、write() 写入与 close()、read() 读全文。",
   "ref": "f = open('source.txt', 'r', encoding='utf-8')\ng = open('copy.txt', 'w', encoding='utf-8')\nfor line in f:\n    g.write(line)\nf.close()\ng.close()\ng = open('copy.txt', 'a', encoding='utf-8')\ng.write('--- END ---\\n')\ng.close()\nh = open('copy.txt', 'r', encoding='utf-8')\nprint(h.read(), end='')\nh.close()"
  },
  {
   "id": "blk-l6-001",
   "level": 6,
   "title": "random 猜数字游戏",
   "desc": "用固定种子 random.seed(5) 生成一个 1~100 的随机整数作为答案，循环读入玩家猜的整数：比答案大输出 猜大了，比答案小输出 猜小了，猜中输出 猜对了，共用了N次 并结束（N 为已猜次数）。测试输入依次为 100、50、80，输出：猜大了、猜小了、猜对了，共用了3次。",
   "code": "import random\nrandom.seed(5)\ntarget = random.___(1)___(1, 100)\ncnt = 0\nwhile True:\n    g = int(input())\n    cnt = cnt + 1\n    if g > target:\n        print('猜大了')\n    elif g ___(2)___ target:\n        print('猜小了')\n    else:\n        print('猜对了，共用了%d次' % cnt)\n        ___(3)___",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "randint"
     ],
     "hint": "生成 [a, b] 区间随机整数的函数"
    },
    {
     "n": 2,
     "answers": [
      "<"
     ],
     "hint": "比答案小"
    },
    {
     "n": 3,
     "answers": [
      "break"
     ],
     "hint": "猜中后退出循环"
    }
   ],
   "stdin": "100\n50\n80\n",
   "expected": "猜大了\n猜小了\n猜对了，共用了3次",
   "hint": "random.seed(5) 固定种子后，random.randint(1, 100) 生成 80",
   "exp": "考查 random.seed 固定随机种子、randint 生成区间整数、多分支判断与 break。",
   "ref": "import random\nrandom.seed(5)\ntarget = random.randint(1, 100)\ncnt = 0\nwhile True:\n    g = int(input())\n    cnt = cnt + 1\n    if g > target:\n        print('猜大了')\n    elif g < target:\n        print('猜小了')\n    else:\n        print('猜对了，共用了%d次' % cnt)\n        break"
  },
  {
   "id": "blk-l6-002",
   "level": 6,
   "title": "turtle 画正方形",
   "desc": "用 turtle 画一个蓝色正方形（边长 100，每画完一条边右转 90 度），然后抬起画笔移到 (150, 0)，换成红色画笔写上文字 正方形，最后打印验证信息（格式：正方形颜色: blue、落点: 150 0、画笔按下: False）。本站已内置 turtle 画布，可直接运行。",
   "code": "import turtle\nt = turtle.Turtle()\nc1 = ___(1)___\nt.pencolor(c1)\nfor i in range(4):\n    t.forward(100)\n    t.right(90)\nt.penup()\nt.goto(___(2)___, 0)\nt.pencolor('red')\nt.write('正方形')\nprint('正方形颜色:', c1)\nprint('落点:', round(t.xcor()), round(t.ycor()))\nprint('画笔按下:', t.___(3)___())",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "'blue'",
      "\"blue\""
     ],
     "hint": "正方形要用蓝色画笔"
    },
    {
     "n": 2,
     "answers": [
      "150"
     ],
     "hint": "移到横坐标 150 处"
    },
    {
     "n": 3,
     "answers": [
      "isdown"
     ],
     "hint": "查询画笔是否落下的方法"
    }
   ],
   "stdin": "",
   "expected": "正方形颜色: blue\n落点: 150 0\n画笔按下: False",
   "hint": "penup() 抬笔后移动不会再画线；isdown() 返回 True/False",
   "exp": "考查 turtle 基本绘图：pencolor、forward/right 循环画正方形、penup/goto 移动、write 写字与 isdown 状态查询。",
   "ref": "import turtle\nt = turtle.Turtle()\nc1 = 'blue'\nt.pencolor(c1)\nfor i in range(4):\n    t.forward(100)\n    t.right(90)\nt.penup()\nt.goto(150, 0)\nt.pencolor('red')\nt.write('正方形')\nprint('正方形颜色:', c1)\nprint('落点:', round(t.xcor()), round(t.ycor()))\nprint('画笔按下:', t.isdown())"
  },
  {
   "id": "blk-l7-001",
   "level": 7,
   "title": "正则提取手机号与邮箱",
   "desc": "输入一行文本，用 re.findall 提取其中所有手机号（模式：1[35789]\\d{9}，即 1 开头、第二位为 3/5/7/8/9 的 11 位数字）和所有邮箱（模式：\\w+@\\w+\\.\\w+），按格式输出两个列表与手机号个数。测试输入：联系我: 13812345678 或 zhang3@qq.com, 备用 15987654321.",
   "code": "import re\ns = input()\nphones = re.findall(r'1[35789]\\d{9}', s)\nemails = re.findall(___(1)___, s)\nprint('手机号:', ___(2)___)\nprint('邮箱:', emails)\nprint('共提取手机号', ___(3)___, '个')",
   "blanks": [
    {
     "n": 1,
     "answers": [
      "r'\\w+@\\w+\\.\\w+'",
      "'\\w+@\\w+\\.\\w+'",
      "r\"\\w+@\\w+\\.\\w+\"",
      "\"\\w+@\\w+\\.\\w+\""
     ],
     "hint": "邮箱正则：\\w+@\\w+\\.\\w+（建议加 r 前缀写原始字符串）"
    },
    {
     "n": 2,
     "answers": [
      "phones"
     ],
     "hint": "输出手机号列表"
    },
    {
     "n": 3,
     "answers": [
      "len(phones)"
     ],
     "hint": "统计列表长度"
    }
   ],
   "stdin": "联系我: 13812345678 或 zhang3@qq.com, 备用 15987654321.\n",
   "expected": "手机号: ['13812345678', '15987654321']\n邮箱: ['zhang3@qq.com']\n共提取手机号 2 个",
   "hint": "findall 返回所有匹配组成的列表",
   "exp": "考查 re.findall、字符类 [...]、\\d、\\w 量词与量词 {9}，以及 len() 统计。",
   "ref": "import re\ns = input()\nphones = re.findall(r'1[35789]\\d{9}', s)\nemails = re.findall(r'\\w+@\\w+\\.\\w+', s)\nprint('手机号:', phones)\nprint('邮箱:', emails)\nprint('共提取手机号', len(phones), '个')"
  },
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
   "id": "fix-l2-002",
   "level": 2,
   "title": "成绩等级判断",
   "desc": "循环读入整数（输入 -999 结束）：85 及以上输出 优秀，60~84 输出 及格，0~59 输出 不及格，负数输出 输入错误。程序有 3 处错误，请修改（不增删语句）。",
   "buggy": "while True:\n    s = int(input())\n    if s == -999:\n        break\n    if s > 85:\n        print('优秀')\n    elif s >= 60:\n        print('及格')\n    elif s > 0:\n        print('不及格')\n    else:\n        print('输入错误')",
   "stdin": "85\n60\n0\n-999\n",
   "expected": "优秀\n及格\n不及格",
   "errors": [
    {
     "line": 5,
     "hint": "85 分也应算优秀，条件应为 s >= 85"
    },
    {
     "line": 7,
     "hint": "60 分应算及格，条件应为 s >= 60"
    },
    {
     "line": 9,
     "hint": "0 分应算不及格，条件应为 s >= 0"
    }
   ],
   "ref": "while True:\n    s = int(input())\n    if s == -999:\n        break\n    if s >= 85:\n        print('优秀')\n    elif s >= 60:\n        print('及格')\n    elif s >= 0:\n        print('不及格')\n    else:\n        print('输入错误')",
   "exp": "考查 if-elif 多分支条件的边界值（>= 与 > 的区别）。"
  },
  {
   "id": "fix-l2-003",
   "level": 2,
   "title": "打印偶数并求和",
   "desc": "输入正整数 n，在同一行用空格分隔输出 1~n 中的所有偶数（含 n），然后换行输出它们的和，格式：1~12的偶数和: 42。程序有 3 处错误，请修改（不增删语句）。",
   "buggy": "n = int(input())\ntotal = 0\nfor i in range(2, n, 2):\n    print(i)\n    total =+ i\nprint()\nprint('1~%d的偶数和:' % n, total)",
   "stdin": "12\n",
   "expected": "2 4 6 8 10 12 \n1~12的偶数和: 42",
   "errors": [
    {
     "line": 3,
     "hint": "n 本身是偶数时也要包含，range 终点应为 n + 1"
    },
    {
     "line": 4,
     "hint": "偶数要输出在同一行，print 应加 end=' ' 参数"
    },
    {
     "line": 5,
     "hint": "total =+ i 把 + 当成了正号，累加应写 total += i"
    }
   ],
   "ref": "n = int(input())\ntotal = 0\nfor i in range(2, n + 1, 2):\n    print(i, end=' ')\n    total += i\nprint()\nprint('1~%d的偶数和:' % n, total)",
   "exp": "考查 range(start, stop, step) 边界、print 的 end 参数与 += 累加写法。"
  },
  {
   "id": "fix-l2-004",
   "level": 2,
   "title": "累加求和（死循环）",
   "desc": "程序想计算 1+2+…+10 并输出：1加到10的和: 55，但运行时陷入死循环。程序有 3 处错误，请修改（不增删语句）。",
   "buggy": "i = 1\ns = 1\nwhile i < 10:\n    s = s + i\n    j = i + 1\nprint('1加到10的和:', s)",
   "stdin": "",
   "expected": "1加到10的和: 55",
   "errors": [
    {
     "line": 2,
     "hint": "累加器 s 的初值应为 0"
    },
    {
     "line": 3,
     "hint": "10 也要加进去，条件应为 i <= 10"
    },
    {
     "line": 5,
     "hint": "更新了没用的 j，循环变量 i 永远不变导致死循环，应改为 i = i + 1"
    }
   ],
   "ref": "i = 1\ns = 0\nwhile i <= 10:\n    s = s + i\n    i = i + 1\nprint('1加到10的和:', s)",
   "exp": "考查 while 循环三要素：初值、循环条件与循环变量的更新（忘更新即死循环）。"
  },
  {
   "id": "fix-l2-005",
   "level": 2,
   "title": "统计 3 的倍数（缩进错误）",
   "desc": "输入正整数 n，统计 1~n 中能被 3 整除的数的个数与总和并输出。例如 n=15 时输出：个数: 5 与 和: 45。程序有 3 处错误，请修改（不增删语句）。",
   "buggy": "n = int(input())\ns = 0\ncnt = 0\nfor i in range(1, n):\n    if i % 3 == 0:\n        cnt = cnt + i\ns = s + i\nprint('个数:', cnt)\nprint('和:', s)",
   "stdin": "15\n",
   "expected": "个数: 5\n和: 45",
   "errors": [
    {
     "line": 4,
     "hint": "range 终点不含 n，应改为 range(1, n + 1)"
    },
    {
     "line": 6,
     "hint": "cnt 统计的是个数，应加 1 而不是加 i"
    },
    {
     "line": 7,
     "hint": "该行缩进错误：应移入 if 分支内（与上一行对齐），只累加 3 的倍数"
    }
   ],
   "ref": "n = int(input())\ns = 0\ncnt = 0\nfor i in range(1, n + 1):\n    if i % 3 == 0:\n        cnt = cnt + 1\n        s = s + i\nprint('个数:', cnt)\nprint('和:', s)",
   "exp": "考查 range 边界、计数与累加的区别以及缩进决定语句归属的规则。"
  },
  {
   "id": "fix-l2-006",
   "level": 2,
   "title": "break 与 continue 误用",
   "desc": "输出 1~20 中的所有奇数（同一行用空格分隔），一旦遇到大于 15 的奇数就停止输出，然后统计实际输出的个数。正确输出：1 3 5 7 9 11 13 15 与 个数: 8。程序把 break/continue 用反了，连同计数器初值共 3 处错误，请修改（不增删语句）。",
   "buggy": "cnt = 1\nfor i in range(1, 21):\n    if i % 2 == 0:\n        break\n    if i > 15:\n        continue\n    print(i, end=' ')\n    cnt += 1\nprint()\nprint('个数:', cnt)",
   "stdin": "",
   "expected": "1 3 5 7 9 11 13 15 \n个数: 8",
   "errors": [
    {
     "line": 1,
     "hint": "计数器初值应为 0"
    },
    {
     "line": 4,
     "hint": "遇到偶数只是跳过本次继续循环，应该用 continue 而不是 break"
    },
    {
     "line": 6,
     "hint": "遇到大于 15 的奇数要结束整个循环，应该用 break 而不是 continue"
    }
   ],
   "ref": "cnt = 0\nfor i in range(1, 21):\n    if i % 2 == 0:\n        continue\n    if i > 15:\n        break\n    print(i, end=' ')\n    cnt += 1\nprint()\nprint('个数:', cnt)",
   "exp": "考查 break（结束整个循环）与 continue（跳过本次循环）的区别。"
  },
  {
   "id": "fix-l3-001",
   "level": 3,
   "title": "字符串切片",
   "desc": "输入一个字符串（如 Python），依次输出：前 3 个字符、后 2 个字符、反转后的字符串。正确输出：前3个字符: Pyt、后2个字符: on、反转: nohtyP。程序有 3 处切片错误，请修改（不增删语句）。",
   "buggy": "s = input()\nprint('前3个字符:', s[1:3])\nprint('后2个字符:', s[2:])\nprint('反转:', s[::1])",
   "stdin": "Python\n",
   "expected": "前3个字符: Pyt\n后2个字符: on\n反转: nohtyP",
   "errors": [
    {
     "line": 2,
     "hint": "前 3 个字符应从头开始：s[:3] 或 s[0:3]"
    },
    {
     "line": 3,
     "hint": "后 2 个字符用负索引：s[-2:]"
    },
    {
     "line": 4,
     "hint": "反转要使用步长 -1：s[::-1]"
    }
   ],
   "ref": "s = input()\nprint('前3个字符:', s[:3])\nprint('后2个字符:', s[-2:])\nprint('反转:', s[::-1])",
   "exp": "考查切片语法 [start:stop:step]：省略起点、负索引与负步长。"
  },
  {
   "id": "fix-l3-002",
   "level": 3,
   "title": "列表方法返回值",
   "desc": "程序想把列表 [5, 2, 8, 9, 7] 升序排序、删除其中的 2、再在末尾添加 10，最后输出：[5, 7, 8, 9, 10]。运行却报错。程序有 3 处错误，请修改（不增删语句）。",
   "buggy": "nums = [5, 2, 8, 9, 7]\nnums = nums.sort()\nnums = nums.remove(2)\nnums = nums.append(10)\nprint(nums)",
   "stdin": "",
   "expected": "[5, 7, 8, 9, 10]",
   "errors": [
    {
     "line": 2,
     "hint": "sort() 原地排序并返回 None，应直接写 nums.sort()"
    },
    {
     "line": 3,
     "hint": "remove() 返回 None，应直接写 nums.remove(2)"
    },
    {
     "line": 4,
     "hint": "append() 返回 None，应直接写 nums.append(10)"
    }
   ],
   "ref": "nums = [5, 2, 8, 9, 7]\nnums.sort()\nnums.remove(2)\nnums.append(10)\nprint(nums)",
   "exp": "考查列表 sort/remove/append 均为原地操作、返回值是 None，不能再赋回变量。"
  },
  {
   "id": "fix-l3-003",
   "level": 3,
   "title": "字典统计次数",
   "desc": "统计列表 [3, 5, 3, 7, 5, 3] 中每个数出现的次数，输出：3出现了 3 次、5出现了 2 次、所有次数: [3, 2, 1]。程序有 3 处错误，请修改（不增删语句）。",
   "buggy": "nums = [3, 5, 3, 7, 5, 3]\nd = []\nfor x in nums:\n    d[x] = d.get(x, 0) + 1\nprint('3出现了', d[3], '次')\nprint('5出现了', d['5'], '次')\nprint('所有次数:', d.values())",
   "stdin": "",
   "expected": "3出现了 3 次\n5出现了 2 次\n所有次数: [3, 2, 1]",
   "errors": [
    {
     "line": 2,
     "hint": "统计用的容器应是字典 {} 而不是列表 []"
    },
    {
     "line": 6,
     "hint": "键是整数，d['5'] 应改为 d[5]"
    },
    {
     "line": 7,
     "hint": "dict_values 不是列表，应输出 list(d.values())"
    }
   ],
   "ref": "nums = [3, 5, 3, 7, 5, 3]\nd = {}\nfor x in nums:\n    d[x] = d.get(x, 0) + 1\nprint('3出现了', d[3], '次')\nprint('5出现了', d[5], '次')\nprint('所有次数:', list(d.values()))",
   "exp": "考查字典创建、键类型必须与存入时一致（整数键）、values() 需转列表输出。"
  },
  {
   "id": "fix-l3-004",
   "level": 3,
   "title": "可变对象作默认参数",
   "desc": "tag_page(title) 想把标题加入标签列表并返回：tag_page('基础') 应返回 ['基础']，tag_page('提高') 应返回 ['提高']。程序还输出 p1 的最后一个标签（基础）和 p2 的长度（1）。现在运行报错且结果不对，共 3 处错误，请修改（不增删语句）。",
   "buggy": "def tag_page(title, tags=['Python']):\n    tags.append(title)\n    return tags\n\np1 = tag_page('基础')\ntag_page('提高')\nprint(p1)\nprint(p2)\nprint(p1[-1])\nprint(len(p2))",
   "stdin": "",
   "expected": "['基础']\n['提高']\n基础\n1",
   "errors": [
    {
     "line": 1,
     "hint": "默认参数不应预设非空列表，应改为 tags=[]"
    },
    {
     "line": 2,
     "hint": "append 会修改共享的默认列表，应改为 tags = tags + [title] 生成新列表"
    },
    {
     "line": 6,
     "hint": "函数返回值应接收保存：p2 = tag_page('提高')"
    }
   ],
   "ref": "def tag_page(title, tags=[]):\n    tags = tags + [title]\n    return tags\n\np1 = tag_page('基础')\np2 = tag_page('提高')\nprint(p1)\nprint(p2)\nprint(p1[-1])\nprint(len(p2))",
   "exp": "考查可变对象作默认参数的陷阱：默认列表在多次调用间共享，应避免原地修改（或改用 tags=[] 配合生成新列表），以及返回值要接收。"
  },
  {
   "id": "fix-l4-001",
   "level": 4,
   "title": "函数累计消费金额",
   "desc": "consume(money, t) 表示在当前累计 t 的基础上消费 money，返回新累计。依次消费 100、200、300 后输出合计，正确输出：合计: 600。程序有 3 处错误，请修改（不增删语句）。",
   "buggy": "total = 0\ndef consume(money, t):\n    t = t + money\n    return t\n\ntotal = consume(100, total)\ntotal = consume(200)\nconsume(300, total)\nprint('合计:', t)",
   "stdin": "",
   "expected": "合计: 600",
   "errors": [
    {
     "line": 7,
     "hint": "调用时漏传了当前累计值 total，应为 consume(200, total)"
    },
    {
     "line": 8,
     "hint": "函数的返回值没有被接收，累加结果被丢弃，应写 total = consume(300, total)"
    },
    {
     "line": 9,
     "hint": "t 是函数内部的局部变量，函数外应输出全局变量 total"
    }
   ],
   "ref": "total = 0\ndef consume(money, t):\n    t = t + money\n    return t\n\ntotal = consume(100, total)\ntotal = consume(200, total)\ntotal = consume(300, total)\nprint('合计:', total)",
   "exp": "考查局部变量与全局变量的作用域、参数传递与函数返回值的接收。"
  },
  {
   "id": "fix-l4-002",
   "level": 4,
   "title": "求幂函数的返回值",
   "desc": "函数 power(x, y) 用循环计算 x 的 y 次方。程序想输出 power(2, 10) + power(3, 3) 的结果 1051，但运行报错。程序有 3 处错误，请修改（不增删语句）。",
   "buggy": "def power(x, y):\n    r = 0\n    for i in range(y):\n        r = r * x\n    print(r)\n\npower(2, 10)\nb = power(3, 3)\nprint(a + b)",
   "stdin": "",
   "expected": "1051",
   "errors": [
    {
     "line": 2,
     "hint": "累乘器初值应为 1，0 乘任何数都是 0"
    },
    {
     "line": 5,
     "hint": "应把结果 return 回去，而不是 print 出来"
    },
    {
     "line": 7,
     "hint": "返回值应接收保存：a = power(2, 10)"
    }
   ],
   "ref": "def power(x, y):\n    r = 1\n    for i in range(y):\n        r = r * x\n    return r\n\na = power(2, 10)\nb = power(3, 3)\nprint(a + b)",
   "exp": "考查函数 return 与 print 的区别：没有 return 的函数返回 None。"
  },
  {
   "id": "fix-l4-003",
   "level": 4,
   "title": "递归斐波那契",
   "desc": "递归函数 fib(n) 返回斐波那契数列第 n 项（f(1)=f(2)=1），程序想输出 fib(10) 即 55。程序有 3 处错误，请修改（不增删语句）。",
   "buggy": "def fib(n):\n    if n == 1:\n        return 1\n    return fib(n - 1) + fib(n - 1)\n\nprint(fib(9))",
   "stdin": "",
   "expected": "55",
   "errors": [
    {
     "line": 2,
     "hint": "递归基例缺少 n == 2，应为 if n == 1 or n == 2"
    },
    {
     "line": 4,
     "hint": "递推式应为 fib(n - 1) + fib(n - 2)，第二项写重了"
    },
    {
     "line": 6,
     "hint": "题目要求输出第 10 项，实参应为 fib(10)"
    }
   ],
   "ref": "def fib(n):\n    if n == 1 or n == 2:\n        return 1\n    return fib(n - 1) + fib(n - 2)\n\nprint(fib(10))",
   "exp": "考查递归三要素：基例必须完整（n=1 与 n=2）、递推式正确、调用实参正确。"
  },
  {
   "id": "fix-l5-001",
   "level": 5,
   "title": "日志文件追加记录",
   "desc": "log.txt（UTF-8 编码）已有一行日志。程序要把新日志 2026-09-25 登录成功 追加到文件末尾（保留原有内容，新日志独占一行），然后读出整个文件打印。正确输出两行：2026-09-23 启动系统 与 2026-09-25 登录成功。程序有 3 处错误，请修改（不增删语句）。",
   "files": [
    {
     "name": "log.txt",
     "content": "2026-09-23 启动系统\n"
    }
   ],
   "buggy": "f = open('log.txt', 'w', encoding='utf-8')\nf.write('2026-09-25 登录成功')\nf.close()\ng = open('log.txt', 'w', encoding='utf-8')\nprint(g.read(), end='')\ng.close()",
   "stdin": "",
   "expected": "2026-09-23 启动系统\n2026-09-25 登录成功\n",
   "errors": [
    {
     "line": 1,
     "hint": "'w' 模式会清空原文件，追加应使用 'a' 模式"
    },
    {
     "line": 2,
     "hint": "写入内容末尾缺少换行符 \\n"
    },
    {
     "line": 4,
     "hint": "读取文件应使用 'r' 模式，'w' 模式打开的文件不能读"
    }
   ],
   "ref": "f = open('log.txt', 'a', encoding='utf-8')\nf.write('2026-09-25 登录成功\\n')\nf.close()\ng = open('log.txt', 'r', encoding='utf-8')\nprint(g.read(), end='')\ng.close()",
   "exp": "考查文件打开模式：r 读、w 写（清空）、a 追加，以及 write 不会自动换行。"
  },
  {
   "id": "fix-l5-002",
   "level": 5,
   "title": "读取数字文件求和",
   "desc": "nums.txt（UTF-8 编码）每行存放一个整数。程序要统计个数、总和与最大值并输出：共 4 个数、总和: 55、最大值: 30。程序有 3 处错误，请修改（不增删语句）。",
   "files": [
    {
     "name": "nums.txt",
     "content": "12\n5\n30\n8\n"
    }
   ],
   "buggy": "f = open('nums.txt', 'r', encoding='utf-8')\ntotal = 0\nmx = 0\ncnt == 0\nfor line in f:\n    total = total + line\n    if line > mx:\n        mx = line\n    cnt = cnt + 1\nf.close()\nprint('共', cnt, '个数')\nprint('总和:', total)\nprint('最大值:', mx)",
   "stdin": "",
   "expected": "共 4 个数\n总和: 55\n最大值: 30",
   "errors": [
    {
     "line": 4,
     "hint": "cnt == 0 是比较不是赋值，应为 cnt = 0"
    },
    {
     "line": 6,
     "hint": "从文件读到的 line 是字符串，求和前要 int(line) 转换"
    },
    {
     "line": 7,
     "hint": "比较大小时同样要 int(line) 转换后再比较"
    }
   ],
   "ref": "f = open('nums.txt', 'r', encoding='utf-8')\ntotal = 0\nmx = 0\ncnt = 0\nfor line in f:\n    total = total + int(line)\n    if int(line) > mx:\n        mx = int(line)\n    cnt = cnt + 1\nf.close()\nprint('共', cnt, '个数')\nprint('总和:', total)\nprint('最大值:', mx)",
   "exp": "考查 == 与 = 的区别，以及文件逐行读到的字符串必须转换类型后才能运算比较。"
  },
  {
   "id": "fix-l6-001",
   "level": 6,
   "title": "turtle 画正方形",
   "desc": "程序要用红色画笔画一个边长 100 的正方形（每画完一条边左转 90 度），画完抬起画笔，然后打印验证信息。正确输出：画笔颜色: red、落点: 0 0、画笔按下: False。程序有 3 处错误，请修改（不增删语句）。本站已内置 turtle 画布。",
   "buggy": "import turtle\nt = turtle.Turtle()\nt.pencolor('blue')\nfor i in range(4):\n    t.forward(100)\n    t.left(45)\nt.pendown()\nprint('画笔颜色:', t.pencolor())\nprint('落点:', round(t.xcor()), round(t.ycor()))\nprint('画笔按下:', t.isdown())",
   "stdin": "",
   "expected": "画笔颜色: red\n落点: 0 0\n画笔按下: False",
   "errors": [
    {
     "line": 3,
     "hint": "题目要求红色画笔，应为 pencolor('red')"
    },
    {
     "line": 6,
     "hint": "正方形每个外角是 90 度，left(45) 转角度数不对"
    },
    {
     "line": 7,
     "hint": "画完后应抬起画笔 penup()，而不是落下 pendown()"
    }
   ],
   "ref": "import turtle\nt = turtle.Turtle()\nt.pencolor('red')\nfor i in range(4):\n    t.forward(100)\n    t.left(90)\nt.penup()\nprint('画笔颜色:', t.pencolor())\nprint('落点:', round(t.xcor()), round(t.ycor()))\nprint('画笔按下:', t.isdown())",
   "exp": "考查 turtle 画笔颜色、正方形转角 90 度与 penup/pendown 画笔状态。"
  },
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
   "id": "code-l1-001",
   "level": 1,
   "title": "两数交换与平均值",
   "desc": "输入两个整数 a、b（各占一行）。程序将两个数交换（交换后 a 中存放原来 b 的值，b 中存放原来 a 的值）：第一行输出交换后的两个整数（用空格分隔），第二行输出这两个数的平均值（保留 2 位小数）。",
   "starter": "# 读入两个整数，交换后输出，再输出平均值\n",
   "tests": [
    {
     "stdin": "3\n5\n",
     "expected": "5 3\n4.00"
    },
    {
     "stdin": "10\n-2\n",
     "expected": "-2 10\n4.00"
    },
    {
     "stdin": "7\n8\n",
     "expected": "8 7\n7.50"
    }
   ],
   "ref": "a = int(input())\nb = int(input())\na, b = b, a\nprint(a, b)\nprint('{:.2f}'.format((a + b) / 2))",
   "hint": "用 `a, b = b, a` 一行完成交换；平均值可能带小数，用 `'{:.2f}'.format(x)` 保留两位。",
   "exp": "考查 int() 类型转换、多元赋值交换、print 输出与 format 保留小数位——L1 输入输出基本功。",
   "tags": [
    "输入输出",
    "变量",
    "格式化"
   ]
  },
  {
   "id": "code-l1-002",
   "level": 1,
   "title": "华氏温度转摄氏温度",
   "desc": "输入一个华氏温度值 f（可能是小数），按公式 c = 5×(f−32)÷9 换算成摄氏温度，输出换算结果并保留 1 位小数。",
   "starter": "# 读入华氏温度，换算后保留 1 位小数输出\n",
   "tests": [
    {
     "stdin": "100\n",
     "expected": "37.8"
    },
    {
     "stdin": "32\n",
     "expected": "0.0"
    },
    {
     "stdin": "212\n",
     "expected": "100.0"
    }
   ],
   "ref": "f = float(input())\nc = 5 * (f - 32) / 9\nprint('{:.1f}'.format(c))",
   "hint": "用 `float(input())` 读入可能带小数的温度；`'{:.1f}'.format(c)` 保留 1 位小数。",
   "exp": "考查 float() 类型转换、算术表达式书写与 format 格式化——温度换算是真题常客。",
   "tags": [
    "类型转换",
    "运算符",
    "格式化"
   ]
  },
  {
   "id": "code-l1-003",
   "level": 1,
   "title": "三角形面积（海伦公式）",
   "desc": "输入三角形的三条边长 a、b、c（各占一行，可以是小数）。先判断能否构成三角形（任意两边之和大于第三边）：能构成则用海伦公式计算面积，输出格式为\"面积=x.xx\"（x.xx 表示保留 2 位小数的面积值）；不能构成则输出\"不能构成三角形\"。",
   "starter": "import math\n\n# 读入三边，判断能否构成三角形并计算面积\n",
   "tests": [
    {
     "stdin": "3\n4\n5\n",
     "expected": "面积=6.00"
    },
    {
     "stdin": "7\n8\n9\n",
     "expected": "面积=26.83"
    },
    {
     "stdin": "1\n2\n3\n",
     "expected": "不能构成三角形"
    }
   ],
   "ref": "import math\na = float(input())\nb = float(input())\nc = float(input())\nif a + b > c and a + c > b and b + c > a:\n    p = (a + b + c) / 2\n    area = math.sqrt(p * (p - a) * (p - b) * (p - c))\n    print('面积={:.2f}'.format(area))\nelse:\n    print('不能构成三角形')",
   "hint": "海伦公式：p=(a+b+c)/2，面积=√(p(p−a)(p−b)(p−c))，开平方用 `math.sqrt()`。",
   "exp": "考查多分支 if-else、逻辑运算符 and、math 模块使用与格式化输出。",
   "tags": [
    "math",
    "if 分支",
    "格式化"
   ]
  },
  {
   "id": "code-l1-004",
   "level": 1,
   "title": "姓名年龄表格输出",
   "desc": "第一行输入整数 n（1≤n≤10），随后 n 行每行输入一个学生的\"姓名 年龄\"（姓名中不含空格，年龄为整数，姓名与年龄之间用一个空格分隔）。按输入顺序输出 n 行，每行格式为：姓名左对齐占 6 个字符宽，年龄右对齐占 4 个字符宽，两个格式域之间不加任何其他字符（用 format 或 f-string 的对齐功能实现）。",
   "starter": "# 读 n 个\"姓名 年龄\"，按指定宽度格式化输出\n",
   "tests": [
    {
     "stdin": "3\n张三 18\nLucy 20\n李四 19\n",
     "expected": "张三      18\nLucy    20\n李四      19"
    },
    {
     "stdin": "1\n王小明 100\n",
     "expected": "王小明    100"
    },
    {
     "stdin": "2\nTom 9\nJerry 12\n",
     "expected": "Tom      9\nJerry   12"
    }
   ],
   "ref": "n = int(input())\nfor i in range(n):\n    name, age = input().split()\n    print('{:<6}{:>4}'.format(name, age))",
   "hint": "`'{:<6}'.format(name)` 左对齐占 6 位，`'{:>4}'.format(age)` 右对齐占 4 位；`input().split()` 按空白拆开姓名和年龄。",
   "exp": "考查字符串 split 拆分与 format 的 `<`、`>` 对齐宽度控制——格式化输出的典型考题。",
   "tags": [
    "字符串",
    "格式化",
    "循环"
   ]
  },
  {
   "id": "code-l2-001",
   "level": 2,
   "title": "素数判断与区间统计",
   "desc": "输入两个整数 m、n（各占一行，满足 2≤m≤n≤1000）。输出 m 到 n 之间（含端点）的全部素数，每行一个；最后输出一行\"共N个\"（N 为该区间内素数个数）。若区间内没有素数，则只输出\"共0个\"。",
   "starter": "# 输出 [m, n] 内的全部素数并统计个数\n",
   "tests": [
    {
     "stdin": "2\n10\n",
     "expected": "2\n3\n5\n7\n共4个"
    },
    {
     "stdin": "10\n20\n",
     "expected": "11\n13\n17\n19\n共4个"
    },
    {
     "stdin": "14\n16\n",
     "expected": "共0个"
    }
   ],
   "ref": "m = int(input())\nn = int(input())\ncount = 0\nfor x in range(m, n + 1):\n    if x < 2:\n        continue\n    is_prime = True\n    for i in range(2, int(x ** 0.5) + 1):\n        if x % i == 0:\n            is_prime = False\n            break\n    if is_prime:\n        print(x)\n        count += 1\nprint('共{}个'.format(count))",
   "hint": "判断 x 是否素数：用 2 到 √x 之间的整数试除，能整除就不是素数；注意 2 是最小的素数，1 不是素数。",
   "exp": "考查嵌套循环、break 提前退出、标志变量与计数——素数是二级考试出现率最高的算法之一。",
   "tags": [
    "循环",
    "素数",
    "计数"
   ]
  },
  {
   "id": "code-l2-002",
   "level": 2,
   "title": "九九乘法表（前 n 行）",
   "desc": "输入一个 1~9 的整数 n，输出九九乘法表的前 n 行。第 i 行（1≤i≤n）由 i 个乘式组成，第 j 个乘式为\"jxi=积\"（j 从 1 到 i），乘式之间用一个空格分隔，行末不输出多余空格。",
   "starter": "# 输出九九乘法表的前 n 行\n",
   "tests": [
    {
     "stdin": "1\n",
     "expected": "1x1=1"
    },
    {
     "stdin": "5\n",
     "expected": "1x1=1\n1x2=2 2x2=4\n1x3=3 2x3=6 3x3=9\n1x4=4 2x4=8 3x4=12 4x4=16\n1x5=5 2x5=10 3x5=15 4x5=20 5x5=25"
    },
    {
     "stdin": "9\n",
     "expected": "1x1=1\n1x2=2 2x2=4\n1x3=3 2x3=6 3x3=9\n1x4=4 2x4=8 3x4=12 4x4=16\n1x5=5 2x5=10 3x5=15 4x5=20 5x5=25\n1x6=6 2x6=12 3x6=18 4x6=24 5x6=30 6x6=36\n1x7=7 2x7=14 3x7=21 4x7=28 5x7=35 6x7=42 7x7=49\n1x8=8 2x8=16 3x8=24 4x8=32 5x8=40 6x8=48 7x8=56 8x8=64\n1x9=9 2x9=18 3x9=27 4x9=36 5x9=45 6x9=54 7x9=63 8x9=72 9x9=81"
    }
   ],
   "ref": "n = int(input())\nfor i in range(1, n + 1):\n    row = []\n    for j in range(1, i + 1):\n        row.append('{}x{}={}'.format(j, i, i * j))\n    print(' '.join(row))",
   "hint": "外层 i 控制行数，内层 j 从 1 到 i；把每行的乘式先拼进列表再用 `' '.join()` 连接，可避免行尾多出空格。",
   "exp": "考查嵌套循环、range 的两个参数、字符串格式化与 join——乘法表是循环章节的必考图形题。",
   "tags": [
    "嵌套循环",
    "字符串",
    "乘法表"
   ]
  },
  {
   "id": "code-l2-003",
   "level": 2,
   "title": "水仙花数判断",
   "desc": "水仙花数是指一个三位数，它等于其百位、十位、个位数字的立方和（如 153=1³+5³+3³）。输入一个 100~999 之间的整数 n：第一行输出 n 的各位数字立方和；第二行输出判断结果——若 n 是水仙花数输出\"是水仙花数\"，否则输出\"不是水仙花数\"。",
   "starter": "# 分离 n 的百位、十位、个位，求立方和并判断\n",
   "tests": [
    {
     "stdin": "153\n",
     "expected": "153\n是水仙花数"
    },
    {
     "stdin": "100\n",
     "expected": "1\n不是水仙花数"
    },
    {
     "stdin": "407\n",
     "expected": "407\n是水仙花数"
    }
   ],
   "ref": "n = int(input())\na = n // 100\nb = n // 10 % 10\nc = n % 10\ns = a ** 3 + b ** 3 + c ** 3\nprint(s)\nif s == n:\n    print('是水仙花数')\nelse:\n    print('不是水仙花数')",
   "hint": "用整除 `//` 和取余 `%` 分离各位数字：百位 `n//100`，十位 `n//10%10`，个位 `n%10`；`**` 求立方。",
   "exp": "考查整除与取余运算、幂运算、if-else 判断——水仙花数是经典小算法高频考点。",
   "tags": [
    "运算符",
    "if 分支",
    "水仙花数"
   ]
  },
  {
   "id": "code-l2-004",
   "level": 2,
   "title": "猜数字游戏",
   "desc": "程序开头已给定三行代码（不要改动）：`import random`、`random.seed(10)`、`target = random.randint(1, 100)`，由固定种子生成一个 1~100 的目标数。之后每行输入一个 1~100 的整数进行猜测：猜的数比目标数大输出\"大了\"，比目标数小输出\"小了\"，恰好等于目标数输出\"猜对了\"并结束程序（测试数据保证一定能猜中）。",
   "starter": "import random\nrandom.seed(10)\ntarget = random.randint(1, 100)\n# 请补全猜数字过程：反复读入猜测，直到猜中\n",
   "tests": [
    {
     "stdin": "74\n",
     "expected": "猜对了"
    },
    {
     "stdin": "50\n90\n74\n",
     "expected": "小了\n大了\n猜对了"
    },
    {
     "stdin": "1\n100\n74\n",
     "expected": "小了\n大了\n猜对了"
    }
   ],
   "ref": "import random\nrandom.seed(10)\ntarget = random.randint(1, 100)\nwhile True:\n    g = int(input())\n    if g > target:\n        print('大了')\n    elif g < target:\n        print('小了')\n    else:\n        print('猜对了')\n        break",
   "hint": "用 `while True` 配合 `break` 反复读入；先判断大于、小于，剩下相等的情况输出\"猜对了\"后跳出。",
   "exp": "考查 random.seed 固定随机数、while True 无限循环、if-elif-else 多分支与 break 的配合使用。",
   "tags": [
    "random",
    "while 循环",
    "分支"
   ]
  },
  {
   "id": "code-l2-005",
   "level": 2,
   "title": "星号菱形打印",
   "desc": "输入一个奇数 n（1≤n≤9），输出由星号 `*` 组成的菱形：共 n 行，正中间一行有 n 个连续的星号，向上每行星号依次减少 2 个、向下每行星号依次减少 2 个；每行星号前用空格补齐使菱形左右居中，行末不输出多余空格。",
   "starter": "# 读入奇数 n，打印 n 行星号菱形\n",
   "tests": [
    {
     "stdin": "1\n",
     "expected": "*"
    },
    {
     "stdin": "3\n",
     "expected": "*\n***\n *"
    },
    {
     "stdin": "5\n",
     "expected": "*\n ***\n*****\n ***\n  *"
    }
   ],
   "ref": "n = int(input())\nm = (n + 1) // 2\nfor i in range(1, n + 1):\n    stars = n - 2 * abs(i - m)\n    print(' ' * ((n - stars) // 2) + '*' * stars)",
   "hint": "中间行行号 m=(n+1)//2；第 i 行星号数为 n−2×|i−m|，前导空格数为 (n−星数)//2；用字符串乘法 `' '*k` 和 `'*'*k` 拼行。",
   "exp": "考查找规律、字符串乘法与循环打印图形——图形题的关键是算准每行空格数与星号数。",
   "tags": [
    "循环",
    "字符串",
    "图形打印"
   ]
  },
  {
   "id": "code-l3-001",
   "level": 3,
   "title": "回文判断",
   "desc": "输入一个不含空格的字符串 s（长度 1~100）：第一行输出 s 的反串（倒序字符串）；第二行判断 s 是否为回文串（正读反读完全相同，区分大小写）——是则输出\"是回文\"，否则输出\"不是回文\"。",
   "starter": "# 用切片求反串并判断是否回文\n",
   "tests": [
    {
     "stdin": "level\n",
     "expected": "level\n是回文"
    },
    {
     "stdin": "abc\n",
     "expected": "cba\n不是回文"
    },
    {
     "stdin": "上海自来水来自海上\n",
     "expected": "上海自来水来自海上\n是回文"
    }
   ],
   "ref": "s = input()\nt = s[::-1]\nprint(t)\nif s == t:\n    print('是回文')\nelse:\n    print('不是回文')",
   "hint": "切片 `s[::-1]` 步长为 -1，直接得到反串；回文即 `s == s[::-1]`。",
   "exp": "考查字符串切片步长 -1 与比较运算——回文判断是字符串部分的高频考题，中文回文同样适用。",
   "tags": [
    "字符串",
    "切片",
    "回文"
   ]
  },
  {
   "id": "code-l3-002",
   "level": 3,
   "title": "列表奇偶分离",
   "desc": "输入一行以空格分隔的整数（至少 1 个，可能含负数和 0）。把其中的奇数按输入顺序存入列表 odds、偶数按输入顺序存入列表 evens：第一行输出 odds，第二行输出 evens（均按 Python 列表格式输出，空列表输出 []）。",
   "starter": "# 读入一行整数，分离奇偶到两个列表\n",
   "tests": [
    {
     "stdin": "1 2 3 4 5 6\n",
     "expected": "[1, 3, 5]\n[2, 4, 6]"
    },
    {
     "stdin": "-3 -2 0 7\n",
     "expected": "[-3, 7]\n[-2, 0]"
    },
    {
     "stdin": "8\n",
     "expected": "[]\n[8]"
    }
   ],
   "ref": "nums = list(map(int, input().split()))\nodds = []\nevens = []\nfor x in nums:\n    if x % 2 != 0:\n        odds.append(x)\n    else:\n        evens.append(x)\nprint(odds)\nprint(evens)",
   "hint": "`input().split()` 拆分后用 `map(int, ...)` 转整数；判奇偶用 `x % 2 != 0`（Python 中 -3 % 2 == 1，负数同样适用）；空列表 print 出来是 `[]`。",
   "exp": "考查 split、map 类型转换、列表 append 与 if-else 分类——组合数据类型的基本功。",
   "tags": [
    "列表",
    "循环",
    "split"
   ]
  },
  {
   "id": "code-l3-003",
   "level": 3,
   "title": "字符频次统计",
   "desc": "输入一行不含空格的字符串 s（长度 1~100），统计每个字符出现的次数：每行输出\"字符:次数\"（字符与次数之间用英文冒号分隔），按字符在 s 中首次出现的顺序输出。",
   "starter": "# 用字典统计每个字符出现的次数\n",
   "tests": [
    {
     "stdin": "hello\n",
     "expected": "h:1\ne:1\nl:2\no:1"
    },
    {
     "stdin": "aabbcc\n",
     "expected": "a:2\nb:2\nc:2"
    },
    {
     "stdin": "abcabcab\n",
     "expected": "a:3\nb:3\nc:2"
    }
   ],
   "ref": "s = input()\nd = {}\nfor ch in s:\n    d[ch] = d.get(ch, 0) + 1\nfor ch in d:\n    print('{}:{}'.format(ch, d[ch]))",
   "hint": "`d.get(ch, 0) + 1` 是字典计数惯用写法；字典保留插入顺序，按插入顺序遍历正好是字符首次出现的顺序。",
   "exp": "考查字典 get 计数与遍历输出——字符/词频统计类题目的基础套路，为 L5 词频统计打底。",
   "tags": [
    "字典",
    "计数",
    "字符串"
   ]
  },
  {
   "id": "code-l3-004",
   "level": 3,
   "title": "成绩分段统计",
   "desc": "输入一行以空格分隔的成绩（0~100 的整数，至少 1 个）。按 优秀(90~100)、良好(80~89)、中等(70~79)、及格(60~69)、不及格(0~59) 五段统计人数，输出 5 行，依次为：\"优秀N人\"、\"良好N人\"、\"中等N人\"、\"及格N人\"、\"不及格N人\"（N 为该段人数）。",
   "starter": "# 读入成绩列表，分段统计到字典并输出\n",
   "tests": [
    {
     "stdin": "95 82 73 61 45 100 80\n",
     "expected": "优秀2人\n良好2人\n中等1人\n及格1人\n不及格1人"
    },
    {
     "stdin": "0 59\n",
     "expected": "优秀0人\n良好0人\n中等0人\n及格0人\n不及格2人"
    },
    {
     "stdin": "90 89 79 69 60 80\n",
     "expected": "优秀1人\n良好2人\n中等1人\n及格2人\n不及格0人"
    }
   ],
   "ref": "scores = list(map(int, input().split()))\nd = {'优秀': 0, '良好': 0, '中等': 0, '及格': 0, '不及格': 0}\nfor s in scores:\n    if s >= 90:\n        d['优秀'] += 1\n    elif s >= 80:\n        d['良好'] += 1\n    elif s >= 70:\n        d['中等'] += 1\n    elif s >= 60:\n        d['及格'] += 1\n    else:\n        d['不及格'] += 1\nfor k in d:\n    print('{}{}人'.format(k, d[k]))",
   "hint": "if-elif 按从高到低的顺序判断，注意边界 90、80、70、60 归属哪一段；用字典保存各段人数，遍历字典按插入顺序输出。",
   "exp": "考查列表遍历、if-elif 多分支边界划分与字典统计——成绩分段是列表+字典组合的典型真题。",
   "tags": [
    "列表",
    "字典",
    "if-elif"
   ]
  },
  {
   "id": "code-l3-005",
   "level": 3,
   "title": "去重并排序",
   "desc": "输入一行以空格分隔的整数（可能重复，可能为负数，至少 1 个）。用集合去掉重复元素后按从小到大排序：第一行输出去重后的元素个数，第二行输出排序后的列表（按 Python 列表格式输出）。",
   "starter": "# 用集合去重，再排序输出\n",
   "tests": [
    {
     "stdin": "3 1 2 3 5 1\n",
     "expected": "4\n[1, 2, 3, 5]"
    },
    {
     "stdin": "5 5 5 5\n",
     "expected": "1\n[5]"
    },
    {
     "stdin": "-1 0 -1 3\n",
     "expected": "3\n[-1, 0, 3]"
    }
   ],
   "ref": "nums = list(map(int, input().split()))\ns = set(nums)\nlst = sorted(s)\nprint(len(lst))\nprint(lst)",
   "hint": "`set(nums)` 去重，`sorted(s)` 返回升序列表；集合是无序的，不能直接 print 集合，要先 sorted 成列表。",
   "exp": "考查集合去重与 sorted 排序的组合使用——\"set+sorted\"是去重排序题的标准解法。",
   "tags": [
    "集合",
    "排序",
    "列表"
   ]
  },
  {
   "id": "code-l4-001",
   "level": 4,
   "title": "函数求最大公约数",
   "desc": "编写函数 `gcd(a, b)`，用辗转相除法（while 循环）返回 a、b 的最大公约数。主程序输入两个正整数 m、n（各占一行），调用 gcd 求出最大公约数 g：第一行输出\"最大公约数:g\"，第二行输出\"最小公倍数:l\"（其中 l=m×n÷g，用整除计算）。",
   "starter": "def gcd(a, b):\n    # 用辗转相除法求最大公约数\n    pass\n\nm = int(input())\nn = int(input())\n# 请调用 gcd 并按要求输出\n",
   "tests": [
    {
     "stdin": "12\n18\n",
     "expected": "最大公约数:6\n最小公倍数:36"
    },
    {
     "stdin": "7\n13\n",
     "expected": "最大公约数:1\n最小公倍数:91"
    },
    {
     "stdin": "100\n25\n",
     "expected": "最大公约数:25\n最小公倍数:100"
    }
   ],
   "ref": "def gcd(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a\n\nm = int(input())\nn = int(input())\ng = gcd(m, n)\nprint('最大公约数:{}'.format(g))\nprint('最小公倍数:{}'.format(m * n // g))",
   "hint": "辗转相除：循环中 `a, b = b, a % b`，当 b 为 0 时 a 就是最大公约数；最小公倍数 = m*n//g。",
   "exp": "考查函数定义与调用、while 循环与整除运算——辗转相除法是函数章节的经典算法题。",
   "tags": [
    "函数",
    "while 循环",
    "辗转相除"
   ]
  },
  {
   "id": "code-l4-002",
   "level": 4,
   "title": "可变参数求和",
   "desc": "编写函数 `my_sum(*args)`，返回所有位置参数之和；不传参数时返回 0。主程序读入一行以空格分隔的整数，用 `*` 解包方式把每个整数作为独立参数传给 my_sum，输出求和结果（一行，只有一个整数）。",
   "starter": "def my_sum(*args):\n    pass\n\nnums = list(map(int, input().split()))\n# 请用 *nums 解包调用 my_sum 并输出结果\n",
   "tests": [
    {
     "stdin": "1 2 3 4 5\n",
     "expected": "15"
    },
    {
     "stdin": "10\n",
     "expected": "10"
    },
    {
     "stdin": "-1 -2 3\n",
     "expected": "0"
    }
   ],
   "ref": "def my_sum(*args):\n    total = 0\n    for x in args:\n        total += x\n    return total\n\nnums = list(map(int, input().split()))\nprint(my_sum(*nums))",
   "hint": "函数体内 args 是一个元组，遍历累加即可；调用时 `my_sum(*nums)` 把列表解包成一个个独立参数。",
   "exp": "考查可变参数 `*args` 的定义、元组遍历与调用时 `*` 解包——可变参数的直接考法。",
   "tags": [
    "函数",
    "可变参数",
    "解包"
   ]
  },
  {
   "id": "code-l4-003",
   "level": 4,
   "title": "map 与 filter 加工单词表",
   "desc": "输入一行英文单词（以空格分隔，至少 1 个）。先用 `filter` 筛选出长度不小于 4 的单词，再用 `map` 把筛选出的单词全部转为大写：第一行输出处理后组成的列表（按 Python 列表格式输出），第二行输出列表中单词的个数。",
   "starter": "# 用 filter 筛选长度>=4 的单词，再用 map 转大写\n",
   "tests": [
    {
     "stdin": "i love python code\n",
     "expected": "['LOVE', 'PYTHON', 'CODE']\n3"
    },
    {
     "stdin": "a bc\n",
     "expected": "[]\n0"
    },
    {
     "stdin": "Abc Defg Hi\n",
     "expected": "['DEFG']\n1"
    }
   ],
   "ref": "words = input().split()\npicked = list(map(str.upper, filter(lambda w: len(w) >= 4, words)))\nprint(picked)\nprint(len(picked))",
   "hint": "`filter(lambda w: len(w) >= 4, words)` 得到筛选结果，外接 `map(str.upper, ...)` 转大写，最后 `list()` 收拢。",
   "exp": "考查 filter+lambda 筛选、map 映射与 list 转换的链式使用——函数式加工列表的标准考法。",
   "tags": [
    "map",
    "filter",
    "lambda"
   ]
  },
  {
   "id": "code-l4-004",
   "level": 4,
   "title": "递归求阶乘与斐波那契",
   "desc": "编写两个递归函数：`fact(n)` 返回 n 的阶乘（约定 fact(0)=fact(1)=1）；`fib(n)` 返回斐波那契数列第 n 项（fib(1)=fib(2)=1，从第 3 项起每项等于前两项之和）。输入一个正整数 n（1≤n≤10）：第一行输出 n!，第二行输出斐波那契数列第 n 项。",
   "starter": "def fact(n):\n    pass\n\ndef fib(n):\n    pass\n\nn = int(input())\nprint(fact(n))\nprint(fib(n))\n",
   "tests": [
    {
     "stdin": "5\n",
     "expected": "120\n5"
    },
    {
     "stdin": "1\n",
     "expected": "1\n1"
    },
    {
     "stdin": "10\n",
     "expected": "3628800\n55"
    }
   ],
   "ref": "def fact(n):\n    if n <= 1:\n        return 1\n    return n * fact(n - 1)\n\ndef fib(n):\n    if n <= 2:\n        return 1\n    return fib(n - 1) + fib(n - 2)\n\nn = int(input())\nprint(fact(n))\nprint(fib(n))",
   "hint": "递归要有终止条件：fact 在 n≤1 时返回 1，fib 在 n≤2 时返回 1；一般情况调用自身缩小问题规模。",
   "exp": "考查递归函数的终止条件与自我调用——阶乘与斐波那契是递归理解题的两大经典。",
   "tags": [
    "递归",
    "函数",
    "阶乘"
   ]
  },
  {
   "id": "code-l5-002",
   "level": 5,
   "title": "学生成绩统计",
   "desc": "当前目录下有 data.csv，存放若干学生的选课成绩（首行为标题行，UTF-8 编码），列依次为：姓名,科目,分数。程序输入一个科目名（保证在文件中出现），统计该科目成绩：第一行输出该科目的平均分（保留 2 位小数），第二行输出该科目最高分学生的姓名；若最高分并列，输出文件中先出现的学生。",
   "files": [
    {
     "name": "data.csv",
     "content": "姓名,科目,分数\n张伟,数学,85\n李娜,数学,92\n王强,英语,78\n刘洋,数学,92\n陈静,英语,88\n赵磊,数学,67\n孙悦,语文,90\n周涛,语文,76\n"
    }
   ],
   "starter": "# 读入 data.csv，统计输入科目的平均分与最高分学生\n",
   "tests": [
    {
     "stdin": "数学\n",
     "expected": "84.00\n李娜\n"
    },
    {
     "stdin": "英语\n",
     "expected": "83.00\n陈静\n"
    },
    {
     "stdin": "语文\n",
     "expected": "83.00\n孙悦\n"
    }
   ],
   "ref": "f = open('data.csv', 'r', encoding='utf-8')\nnext(f)\nsub = input()\ntotal = 0\ncnt = 0\nmx = -1\ntop = ''\nfor line in f:\n    parts = line.strip().split(',')\n    if parts[1] == sub:\n        s = int(parts[2])\n        total += s\n        cnt += 1\n        if s > mx:\n            mx = s\n            top = parts[0]\nf.close()\nprint('{:.2f}'.format(total / cnt))\nprint(top)",
   "hint": "用 next(f) 跳过标题行；每行 strip() 后 split(',')；累加总分和人数求平均，打擂台（大于才更新）求最高分，并列时自然保留先出现者。",
   "exp": "综合考查 CSV 文件逐行读取、split 切分、类型转换、累加求平均与打擂台求最值——文件数据分析大题的标准套路。",
   "tags": [
    "文件",
    "CSV",
    "统计"
   ]
  },
  {
   "id": "code-l5-003",
   "level": 5,
   "title": "英文词频统计",
   "desc": "当前目录下有 data.txt，存放一段英文（若干行，UTF-8 编码；单词只由英文字母组成，单词后可能跟逗号、句号等标点，标点不属于单词）。统计每个单词出现的次数（不区分大小写，统计前统一转为小写）：输出出现次数最多的前 3 个单词，每行格式为\"单词 次数\"（空格分隔）；次数相同的按单词字典序从小到大输出。数据保证第 3 名与第 4 名的次数不同。",
   "files": [
    {
     "name": "data.txt",
     "content": "Python is a great language.\nPython is easy to learn!\nMany people love python, because python is powerful.\nWe can use python for many things.\n"
    }
   ],
   "starter": "# 读入 data.txt，统计每个单词出现次数，输出前 3 名\n",
   "tests": [
    {
     "stdin": "",
     "expected": "python 5\nis 3\nmany 2\n"
    },
    {
     "stdin": "",
     "expected": "python 5\nis 3\nmany 2\n"
    }
   ],
   "ref": "f = open('data.txt', 'r', encoding='utf-8')\nd = {}\nfor line in f:\n    for ch in ',.!?;:':\n        line = line.replace(ch, ' ')\n    for w in line.lower().split():\n        d[w] = d.get(w, 0) + 1\nf.close()\nitems = sorted(d.items(), key=lambda x: (-x[1], x[0]))\nfor w, c in items[:3]:\n    print(w, c)",
   "hint": "先把每行中的标点替换成空格再 split()；用 d.get(w, 0) + 1 计数；sorted(d.items(), key=lambda x: (-x[1], x[0])) 一步完成按次数降序、同次数按字典序升序。",
   "exp": "考查文件读取、标点清洗、转小写、字典计数与多关键字排序——词频统计是 L5 的代表性大题。",
   "tags": [
    "文件",
    "词频统计",
    "字典"
   ]
  },
  {
   "id": "code-l5-004",
   "level": 5,
   "title": "手机月销量分析",
   "desc": "当前目录下有 data.csv，存放某手机店各品牌的月销量数据（首行为标题行，UTF-8 编码），列依次为：品牌,销量,月份（月份为整数）。程序输入一个月份（整数），输出该月销售情况：第一行输出该月销量最高的品牌名与销量（空格分隔，若并列输出文件中先出现的品牌），第二行输出该月的总销量。",
   "files": [
    {
     "name": "data.csv",
     "content": "品牌,销量,月份\n华为,120,1\n苹果,98,1\n小米,150,1\n华为,135,2\n苹果,110,2\n小米,90,2\n华为,160,3\n苹果,105,3\n小米,88,3\nOPPO,200,3\n"
    }
   ],
   "starter": "# 读入 data.csv，统计输入月份的销量最高品牌与总销量\n",
   "tests": [
    {
     "stdin": "1\n",
     "expected": "小米 150\n368\n"
    },
    {
     "stdin": "3\n",
     "expected": "OPPO 200\n553\n"
    },
    {
     "stdin": "2\n",
     "expected": "华为 135\n335\n"
    }
   ],
   "ref": "f = open('data.csv', 'r', encoding='utf-8')\nnext(f)\nm = int(input())\nbest_name = ''\nbest_num = -1\ntotal = 0\nfor line in f:\n    parts = line.strip().split(',')\n    if int(parts[2]) == m:\n        num = int(parts[1])\n        total += num\n        if num > best_num:\n            best_num = num\n            best_name = parts[0]\nf.close()\nprint(best_name, best_num)\nprint(total)",
   "hint": "列顺序是 品牌,销量,月份，注意下标；筛选出该月的记录后打擂台求最大销量，同时累加总销量。",
   "exp": "考查按列筛选 CSV 记录、条件统计与求最值，贴近真实数据清洗场景。",
   "tags": [
    "文件",
    "CSV",
    "最值"
   ]
  },
  {
   "id": "code-l5-005",
   "level": 5,
   "title": "访问日志分析",
   "desc": "当前目录下有 data.log，存放网站访问日志（UTF-8 编码），每行格式为：日期 IP 状态码（三部分用空格分隔，如 2024-05-01 192.168.1.5 200）。程序输入一个状态码（如 404）：第一行输出该状态码在日志中出现的次数，随后按首次出现顺序每行输出一个产生过该状态码的 IP（去重，每个 IP 只输出一次）。",
   "files": [
    {
     "name": "data.log",
     "content": "2024-05-01 192.168.1.5 200\n2024-05-01 192.168.1.12 404\n2024-05-01 192.168.1.5 404\n2024-05-02 10.0.0.8 200\n2024-05-02 192.168.1.12 404\n2024-05-02 172.16.0.3 500\n2024-05-02 10.0.0.8 404\n2024-05-03 192.168.1.5 200\n"
    }
   ],
   "starter": "# 读入 data.log，统计输入状态码的出现次数与涉及的 IP\n",
   "tests": [
    {
     "stdin": "404\n",
     "expected": "4\n192.168.1.12\n192.168.1.5\n10.0.0.8\n"
    },
    {
     "stdin": "200\n",
     "expected": "3\n192.168.1.5\n10.0.0.8\n"
    },
    {
     "stdin": "500\n",
     "expected": "1\n172.16.0.3\n"
    }
   ],
   "ref": "f = open('data.log', 'r', encoding='utf-8')\ncode = input()\ncnt = 0\nips = []\nfor line in f:\n    parts = line.split()\n    if parts[2] == code:\n        cnt += 1\n        if parts[1] not in ips:\n            ips.append(parts[1])\nf.close()\nprint(cnt)\nfor ip in ips:\n    print(ip)",
   "hint": "line.split() 按空白切出三部分；用列表的 not in 判断 IP 是否已出现过，可保持首次出现的顺序。",
   "exp": "考查 split 解析空格分隔的日志、条件筛选、计数与保序去重（列表 not in）。",
   "tags": [
    "文件",
    "字符串",
    "去重"
   ]
  },
  {
   "id": "code-l5-006",
   "level": 5,
   "title": "商品价格表合并",
   "desc": "当前目录下有 goods1.csv 和 goods2.csv 两个商品价格表（首行为标题行，UTF-8 编码），每行格式为：品名,价格（价格为整数）。goods1 是旧价格表，goods2 是新价格表：合并时若品名相同，以 goods2 中的价格为准。把两个文件合并后，按价格从高到低输出全部商品，每行格式为\"品名 价格\"（空格分隔）；价格相同的按品名字典序从小到大输出。",
   "files": [
    {
     "name": "goods1.csv",
     "content": "品名,价格\n苹果,5\n牛奶,12\n面包,8\n鸡蛋,15\n"
    },
    {
     "name": "goods2.csv",
     "content": "品名,价格\n牛奶,13\n香蕉,6\n苹果,4\n咖啡,30\n"
    }
   ],
   "starter": "# 合并 goods1.csv 与 goods2.csv，按价格降序输出全部商品\n",
   "tests": [
    {
     "stdin": "",
     "expected": "咖啡 30\n鸡蛋 15\n牛奶 13\n面包 8\n香蕉 6\n苹果 4\n"
    },
    {
     "stdin": "",
     "expected": "咖啡 30\n鸡蛋 15\n牛奶 13\n面包 8\n香蕉 6\n苹果 4\n"
    }
   ],
   "ref": "d = {}\nf = open('goods1.csv', 'r', encoding='utf-8')\nnext(f)\nfor line in f:\n    parts = line.strip().split(',')\n    d[parts[0]] = int(parts[1])\nf.close()\nf = open('goods2.csv', 'r', encoding='utf-8')\nnext(f)\nfor line in f:\n    parts = line.strip().split(',')\n    d[parts[0]] = int(parts[1])\nf.close()\nitems = sorted(d.items(), key=lambda x: (-x[1], x[0]))\nfor name, price in items:\n    print(name, price)",
   "hint": "用字典合并：先读 goods1 存入字典，再读 goods2 覆盖同名品名；sorted(d.items(), key=lambda x: (-x[1], x[0])) 按价格降序、同价按品名升序。",
   "exp": "考查多文件读取、字典覆盖式合并与 sorted 多关键字排序。",
   "tags": [
    "文件",
    "字典",
    "排序"
   ]
  },
  {
   "id": "code-l5-007",
   "level": 5,
   "title": "文本字符分类统计",
   "desc": "当前目录下有 data.txt，存放一段英文文本（若干行，UTF-8 编码）。逐行统计文件中各类字符的个数（每行先去掉行末换行符再统计，空格计入其他字符），输出 4 行，依次为：\"大写字母:N\"、\"小写字母:N\"、\"数字:N\"、\"其他字符:N\"（N 为相应个数）。",
   "files": [
    {
     "name": "data.txt",
     "content": "Hello Python 123!\nI like Python3.11\nRoom 404, Floor 2\n"
    }
   ],
   "starter": "# 读入 data.txt，分类统计大写/小写/数字/其他字符\n",
   "tests": [
    {
     "stdin": "",
     "expected": "大写字母:6\n小写字母:25\n数字:10\n其他字符:10\n"
    },
    {
     "stdin": "",
     "expected": "大写字母:6\n小写字母:25\n数字:10\n其他字符:10\n"
    }
   ],
   "ref": "f = open('data.txt', 'r', encoding='utf-8')\nupper = lower = digit = other = 0\nfor line in f:\n    line = line.strip('\\n')\n    for ch in line:\n        if ch.isupper():\n            upper += 1\n        elif ch.islower():\n            lower += 1\n        elif ch.isdigit():\n            digit += 1\n        else:\n            other += 1\nf.close()\nprint('大写字母:{}'.format(upper))\nprint('小写字母:{}'.format(lower))\nprint('数字:{}'.format(digit))\nprint('其他字符:{}'.format(other))",
   "hint": "逐行读取，line.strip('\\n') 去掉换行；字符分类用 isupper()/islower()/isdigit()，都不满足即其他字符。",
   "exp": "考查逐字符分类统计：isupper/islower/isdigit 与 else 兜底，注意先把换行符去掉。",
   "tags": [
    "文件",
    "字符串",
    "统计"
   ]
  },
  {
   "id": "code-l5-008",
   "level": 5,
   "title": "成绩分段统计",
   "desc": "当前目录下有 data.csv，存放全班学生的程序设计成绩（首行为标题行，UTF-8 编码），每行格式为：姓名,分数（分数为 0~100 的整数）。按分数段统计人数并输出 5 行：前 4 行依次为\"90分及以上:N\"、\"80-89分:N\"、\"60-79分:N\"、\"60分以下:N\"；第 5 行输出\"不及格名单:\"，随后按文件原顺序每行输出一个不及格（60 分以下）学生的姓名。",
   "files": [
    {
     "name": "data.csv",
     "content": "姓名,分数\n张伟,95\n李娜,84\n王强,55\n刘洋,73\n陈静,88\n赵磊,91\n孙悦,64\n"
    }
   ],
   "starter": "# 读入 data.csv，分段统计人数并输出不及格名单\n",
   "tests": [
    {
     "stdin": "",
     "expected": "90分及以上:2\n80-89分:2\n60-79分:2\n60分以下:1\n不及格名单:\n王强\n"
    },
    {
     "stdin": "",
     "expected": "90分及以上:2\n80-89分:2\n60-79分:2\n60分以下:1\n不及格名单:\n王强\n"
    }
   ],
   "ref": "f = open('data.csv', 'r', encoding='utf-8')\nnext(f)\nc1 = c2 = c3 = c4 = 0\nfailed = []\nfor line in f:\n    parts = line.strip().split(',')\n    s = int(parts[1])\n    if s >= 90:\n        c1 += 1\n    elif s >= 80:\n        c2 += 1\n    elif s >= 60:\n        c3 += 1\n    else:\n        c4 += 1\n        failed.append(parts[0])\nf.close()\nprint('90分及以上:{}'.format(c1))\nprint('80-89分:{}'.format(c2))\nprint('60-79分:{}'.format(c3))\nprint('60分以下:{}'.format(c4))\nprint('不及格名单:')\nfor name in failed:\n    print(name)",
   "hint": "if-elif 按从高到低的顺序判断边界；60 分以下的记录在计数的同时把姓名存入列表。",
   "exp": "考查 if-elif 边界划分、分段计数以及\"边统计边收集\"输出名单。",
   "tags": [
    "文件",
    "CSV",
    "分段统计"
   ]
  },
  {
   "id": "code-l5-009",
   "level": 5,
   "title": "凯撒加密写文件",
   "desc": "当前目录下有 data.txt，存放若干行英文文本（UTF-8 编码）。程序对每一行做凯撒加密：每行先去掉行末换行符，然后将其中的字母循环右移 3 位（a→d、b→e、…、x→a、y→b、z→c，大写字母同理），非字母字符保持不变。按原行顺序把加密后的每一行打印出来，同时把加密后的内容逐行写入当前目录下的 out.txt（每行末尾写一个换行符）。",
   "files": [
    {
     "name": "data.txt",
     "content": "Hello, Python!\nAttack at dawn\nabc XYZ 123\n"
    }
   ],
   "starter": "# 读入 data.txt 逐行加密，打印并写入 out.txt\n",
   "tests": [
    {
     "stdin": "",
     "expected": "Khoor, Sbwkrq!\nDwwdfn dw gdzq\ndef ABC 123\n"
    },
    {
     "stdin": "",
     "expected": "Khoor, Sbwkrq!\nDwwdfn dw gdzq\ndef ABC 123\n"
    }
   ],
   "ref": "f = open('data.txt', 'r', encoding='utf-8')\nout = open('out.txt', 'w', encoding='utf-8')\nfor line in f:\n    line = line.rstrip('\\n')\n    res = ''\n    for ch in line:\n        if 'a' <= ch <= 'z':\n            res += chr((ord(ch) - ord('a') + 3) % 26 + ord('a'))\n        elif 'A' <= ch <= 'Z':\n            res += chr((ord(ch) - ord('A') + 3) % 26 + ord('A'))\n        else:\n            res += ch\n    print(res)\n    out.write(res + '\\n')\nf.close()\nout.close()",
   "hint": "循环移位用 chr((ord(ch) - ord('a') + 3) % 26 + ord('a'))，大写同理；每行加密结果 print 的同时 out.write(res + '\\n')。",
   "exp": "考查逐行读写文件与 ord/chr 字符编码运算——凯撒密码是文件+字符处理的综合题。",
   "tags": [
    "文件",
    "字符串",
    "加密"
   ]
  },
  {
   "id": "code-l6-001",
   "level": 6,
   "title": "随机密码生成器",
   "desc": "第一行输入一个整数作为随机数种子，第二行输入密码长度 n（1≤n≤16）。程序先执行 `random.seed(种子)`，再从固定字符池 `string.ascii_letters + string.digits`（52 个大小写字母在前、10 个数字在后，顺序固定）中用 `random.choice(字符池)` 依次随机取 n 个字符，拼接成密码后输出（只输出这一行密码）。",
   "starter": "import random\nimport string\n\n# 读入种子和长度 n，先 random.seed(种子)，再用 random.choice 从固定字符池依次取 n 个字符\n",
   "tests": [
    {
     "stdin": "10\n8\n",
     "expected": "KcBEKanD\n"
    },
    {
     "stdin": "2024\n12\n",
     "expected": "ElULtm4UAWTW\n"
    },
    {
     "stdin": "7\n1\n",
     "expected": "u\n"
    }
   ],
   "ref": "import random\nimport string\n\nseed = int(input())\nn = int(input())\nrandom.seed(seed)\npool = string.ascii_letters + string.digits\npw = ''\nfor i in range(n):\n    pw = pw + random.choice(pool)\nprint(pw)",
   "hint": "random.seed 要在读入后立即调用；pool = string.ascii_letters + string.digits；循环 n 次 pw += random.choice(pool)。",
   "exp": "考查 random.seed 固定随机序列、random.choice 取元素与字符串拼接——随机类题目必须先固定种子。",
   "tags": [
    "random",
    "string",
    "循环"
   ]
  },
  {
   "id": "code-l6-002",
   "level": 6,
   "title": "莱布尼茨级数求圆周率",
   "desc": "用莱布尼茨级数近似圆周率：π/4 = 1 − 1/3 + 1/5 − 1/7 + 1/9 − …（分母依次为 1,3,5,7,…，第 1 项为正，之后各项符号交替）。输入一个正整数 n，计算前 n 项之和 s，按 π ≈ 4×s 输出近似值（保留 6 位小数）。如 n=1 时输出 4.000000。",
   "starter": "# 读入 n，循环累加莱布尼茨级数前 n 项，输出 4*s（保留 6 位小数）\n",
   "tests": [
    {
     "stdin": "1\n",
     "expected": "4.000000\n"
    },
    {
     "stdin": "10\n",
     "expected": "3.041840\n"
    },
    {
     "stdin": "10000\n",
     "expected": "3.141493\n"
    }
   ],
   "ref": "n = int(input())\ns = 0.0\nsign = 1\nfor i in range(n):\n    s = s + sign / (2 * i + 1)\n    sign = -sign\nprint('{:.6f}'.format(4 * s))",
   "hint": "第 i 项（i 从 0 开始）为 sign / (2*i + 1)，sign 每轮取反；注意先乘 4 再用 '{:.6f}'.format 格式化。",
   "exp": "考查循环累加交错级数与 format 保留小数——数学近似计算的经典题。",
   "tags": [
    "循环",
    "格式化",
    "数学近似"
   ]
  },
  {
   "id": "code-l6-003",
   "level": 6,
   "title": "闰年与月份天数",
   "desc": "第一行输入年份（整数），第二行输入月份（1~12 的整数）。用 `calendar.isleap()` 判断该年是否闰年：第一行输出\"闰年\"或\"平年\"；第二行输出\"该月有N天\"（N 为该月实际天数，闰年 2 月为 29 天）。要求用 if 语句或列表手写各月天数表，不得使用 `calendar.monthrange`。",
   "starter": "import calendar\n\n# 读入年、月，用 calendar.isleap 判断闰年，用手写天数表输出该月天数\n",
   "tests": [
    {
     "stdin": "2024\n2\n",
     "expected": "闰年\n该月有29天\n"
    },
    {
     "stdin": "2023\n2\n",
     "expected": "平年\n该月有28天\n"
    },
    {
     "stdin": "1900\n2\n",
     "expected": "平年\n该月有28天\n"
    }
   ],
   "ref": "import calendar\n\ny = int(input())\nm = int(input())\ndays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\nif calendar.isleap(y):\n    print('闰年')\n    days[1] = 29\nelse:\n    print('平年')\nprint('该月有{}天'.format(days[m - 1]))",
   "hint": "days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]；闰年时把 days[1] 改成 29；calendar.isleap(y) 返回 True/False（整百年要能被 400 整除才算闰年）。",
   "exp": "考查 calendar.isleap、列表下标与分支修改——万年历天数计算的常考点。",
   "tags": [
    "calendar",
    "闰年",
    "列表"
   ]
  },
  {
   "id": "code-l6-004",
   "level": 6,
   "title": "turtle 画正多边形",
   "desc": "第一行输入正多边形的边数 n（3~8 的整数），第二行输入边长 d（正整数）。用红色画笔画这个正多边形：画笔从默认位置 (0,0)、朝向右方出发，每画一条长 d 的边就右转 360/n 度，共画 n 条边。画完后输出三行验证信息：第一行\"外角: X\"（X 为 360/n 的值，用 / 除法，形如 90.0）；第二行\"落点: X Y\"（画完后画笔的横、纵坐标，用 `round()` 取整）；第三行\"画笔颜色: red\"。本站已内置 turtle 画布，可直接运行。",
   "starter": "import turtle\n\nn = int(input())\nd = int(input())\nt = turtle.Turtle()\n# 请补全：设红色画笔，循环画 n 条边（每条边后右转 360/n 度），最后打印三行验证信息\n",
   "tests": [
    {
     "stdin": "4\n100\n",
     "expected": "外角: 90.0\n落点: 0 0\n画笔颜色: red\n"
    },
    {
     "stdin": "3\n100\n",
     "expected": "外角: 120.0\n落点: 0 0\n画笔颜色: red\n"
    },
    {
     "stdin": "6\n50\n",
     "expected": "外角: 60.0\n落点: 0 0\n画笔颜色: red\n"
    }
   ],
   "ref": "import turtle\n\nn = int(input())\nd = int(input())\nt = turtle.Turtle()\nt.pencolor('red')\nang = 360 / n\nfor i in range(n):\n    t.forward(d)\n    t.right(ang)\nprint('外角:', ang)\nprint('落点:', round(t.xcor()), round(t.ycor()))\nprint('画笔颜色:', t.pencolor())",
   "hint": "for i in range(n): t.forward(d) 后 t.right(360 / n)；最后用 t.xcor()、t.ycor()、t.pencolor() 查询状态打印。",
   "exp": "考查 turtle 画笔控制、循环画正多边形与 xcor/ycor/pencolor 状态查询，判题以打印的状态值为准。",
   "tags": [
    "turtle",
    "循环",
    "图形"
   ]
  },
  {
   "id": "code-l7-001",
   "level": 7,
   "title": "正则提取手机号",
   "desc": "程序开头已给定字符串变量 text（starter 中已提供，内容包含若干手机号、邮箱和座机）。用 `re` 模块找出 text 中所有的手机号（以 1 开头、后面跟 10 位数字的连续 11 位数字），按出现顺序每行输出一个。",
   "starter": "import re\n\ntext = \"请联系张先生，电话 13812345678；备用邮箱 zhang_wei@example.com，也可拨打 15901234567 或 150。李女士的电话是 18765432109，邮箱 li_miss@163.com 不必回复。应急电话 010-62785000 为座机。\"\n# 请补全：用 re 找出 text 中所有手机号并逐行输出\n",
   "tests": [
    {
     "stdin": "",
     "expected": "13812345678\n15901234567\n18765432109\n"
    },
    {
     "stdin": "",
     "expected": "13812345678\n15901234567\n18765432109\n"
    }
   ],
   "ref": "import re\n\ntext = \"请联系张先生，电话 13812345678；备用邮箱 zhang_wei@example.com，也可拨打 15901234567 或 150。李女士的电话是 18765432109，邮箱 li_miss@163.com 不必回复。应急电话 010-62785000 为座机。\"\n\nfor p in re.findall(r'1\\d{10}', text):\n    print(p)",
   "hint": "re.findall(r'1\\d{10}', text) 返回所有匹配的手机号列表，直接遍历打印。",
   "exp": "考查 re.findall 与正则 r'1\\d{10}' 的书写——手机号匹配是正则最高频的考题。",
   "tags": [
    "re",
    "正则",
    "字符串"
   ]
  },
  {
   "id": "code-l7-002",
   "level": 7,
   "title": "解析 JSON 成绩数据",
   "desc": "程序开头已给定 JSON 字符串 data_str（starter 中已提供，是一个班级的成绩数组，每个元素含 name、score 两个键）。用 `json` 模块解析后：第一行输出全班平均分（保留 2 位小数），第二行输出最高分学生的姓名（数据保证最高分唯一）。",
   "starter": "import json\n\ndata_str = '[{\"name\": \"张伟\", \"score\": 85}, {\"name\": \"李娜\", \"score\": 92}, {\"name\": \"王强\", \"score\": 78}, {\"name\": \"刘洋\", \"score\": 90}, {\"name\": \"陈静\", \"score\": 88}]'\n# 请补全：解析 JSON，输出平均分（2 位小数）与最高分学生姓名\n",
   "tests": [
    {
     "stdin": "",
     "expected": "86.60\n李娜\n"
    },
    {
     "stdin": "",
     "expected": "86.60\n李娜\n"
    }
   ],
   "ref": "import json\n\ndata_str = '[{\"name\": \"张伟\", \"score\": 85}, {\"name\": \"李娜\", \"score\": 92}, {\"name\": \"王强\", \"score\": 78}, {\"name\": \"刘洋\", \"score\": 90}, {\"name\": \"陈静\", \"score\": 88}]'\nstudents = json.loads(data_str)\ntotal = 0\nmx = -1\ntop = ''\nfor st in students:\n    total += st['score']\n    if st['score'] > mx:\n        mx = st['score']\n        top = st['name']\nprint('{:.2f}'.format(total / len(students)))\nprint(top)",
   "hint": "json.loads(data_str) 得到字典列表；遍历累加 score 求平均，打擂台找最高分对应的名字。",
   "exp": "考查 json.loads 解析、字典取值与累加统计——JSON 数据处理的基础题。",
   "tags": [
    "json",
    "字典",
    "统计"
   ]
  },
  {
   "id": "code-l7-003",
   "level": 7,
   "title": "JSON 转 CSV 输出",
   "desc": "程序开头已给定 JSON 字符串 data_str（starter 中已提供，是一个商品数组，每个元素含 name、price 两个键）。解析后把数据转成 CSV 格式文本输出：第一行输出列名 name,price，随后按原顺序每行输出一个商品的 name,price（英文逗号分隔）。",
   "starter": "import json\n\ndata_str = '[{\"name\": \"apple\", \"price\": 5}, {\"name\": \"milk\", \"price\": 12}, {\"name\": \"bread\", \"price\": 8}, {\"name\": \"egg\", \"price\": 15}, {\"name\": \"coffee\", \"price\": 30}]'\n# 请补全：解析 JSON，按 CSV 格式输出（首行 name,price）\n",
   "tests": [
    {
     "stdin": "",
     "expected": "name,price\napple,5\nmilk,12\nbread,8\negg,15\ncoffee,30\n"
    },
    {
     "stdin": "",
     "expected": "name,price\napple,5\nmilk,12\nbread,8\negg,15\ncoffee,30\n"
    }
   ],
   "ref": "import json\n\ndata_str = '[{\"name\": \"apple\", \"price\": 5}, {\"name\": \"milk\", \"price\": 12}, {\"name\": \"bread\", \"price\": 8}, {\"name\": \"egg\", \"price\": 15}, {\"name\": \"coffee\", \"price\": 30}]'\nitems = json.loads(data_str)\nprint('name,price')\nfor it in items:\n    print('{},{}'.format(it['name'], it['price']))",
   "hint": "json.loads 解析后先 print 表头，再遍历列表，用 '{},{}'.format(it['name'], it['price']) 拼每一行。",
   "exp": "考查 JSON 解析与 CSV 格式拼装输出——两种数据格式的转换。",
   "tags": [
    "json",
    "CSV",
    "循环"
   ]
  },
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
 "lessons": {
  "1": "本关是整张试卷的**地基**：选择题年年考标识符规则、类型转换细节、`/` 与 `//` 的区别、`-3**2` 的值、`and/or` 的返回值，编程大题的每一行也都建立在本关语法之上。概念多、坑多、分值稳，是性价比最高的抢分关。\n\n### 标识符、关键字与书写格式\n\n- 标识符（变量名）规则：由字母、数字、下划线（和中文）组成，**不能以数字开头**，不能与关键字重名，区分大小写（`Age` 与 `age` 是两个变量）。\n- 关键字是 Python 保留字：`if、for、while、def、return、import、and、or、not、in、is` 等。注意 **`True`、`False`、`None` 首字母必须大写**。\n- 书写格式：一句一行，行尾**不需要分号**；缩进（一般 4 个空格）表示代码层次，同一块必须对齐；`#` 后是注释。\n- 一行写不下可用 `\\` 续行，或写在 `()`、`[]`、`{}` 里自然换行。\n\n```python\nimport keyword\nprint(keyword.kwlist)      # 查看全部关键字\nlong_name = (1 + 2 +\n             3 * 4)        # 括号内可自然换行\n```\n\n| 判定 | 标识符 | 原因 |\n| --- | --- | --- |\n| 合法 | `_score`、`name2`、`姓名` | 下划线/中文合法，数字不在开头 |\n| 非法 | `2nd_name` | 不能以数字开头 |\n| 非法 | `for`、`if` | 与关键字重名 |\n| 非法 | `my-name` | 不能出现连字符 `-` |\n\n### 编程环境与程序运行方式\n\n- Python 是**解释型**语言，源程序是扩展名为 `.py` 的文本文件，由解释器逐行翻译执行。\n- 两种运行方式：**交互式**（IDLE 的 `>>>` 提示符下输入一行执行一行，适合试验）与**文件式**（代码保存为 `.py` 文件整体运行，IDLE 中按 F5）。\n- 区别：交互式中表达式的值会自动回显；文件式中**必须用 `print()`** 才能看到输出。\n- 常见环境：IDLE（考试自带）、PyCharm、Jupyter Notebook。\n\n```python\n# test.py —— 文件式程序，保存后按 F5 运行\nprint('Hello')             # 不写 print 就看不到输出\n3 + 4                      # 文件式中这行没有任何效果\n```\n\n### input()、print() 与 eval()\n\n- `input()`：读入一行，**返回值永远是字符串**；可以带提示语 `input('请输入：')`。\n- `print(值1, 值2, ..., sep=' ', end='\\n')`：`sep` 是多个值之间的**分隔符**（默认空格），`end` 是打印完的**结尾符**（默认换行）。\n- `eval(s)`：**去掉字符串外侧引号**，把内容当 Python 表达式求值，是常用的\"字符串转数值\"手段。\n\n```python\na = input()                # 输入 12，a 是字符串 '12'\nprint(a + '5')             # 125（字符串拼接，不是加法！）\nn = eval(input())          # 输入 12，n 是整数 12\nprint(n + 5)               # 17\nprint(1, 2, sep='*', end='!')\nprint('ok')                # 连成一行：1*2!ok\n```\n\n### 六大基本数据类型\n\n| 类型 | 写法示例 | 要点 |\n| --- | --- | --- |\n| 整型 int | `100`、`-5`、`0x1F`、`0b101`、`0o17` | 位数不限不会溢出；`0x`/`0b`/`0o` 分别是十六/二/八进制 |\n| 浮点型 float | `3.14`、`1e-3`、`2.5e8` | 科学计数法；有精度误差 `0.1+0.2 != 0.3` |\n| 复数 complex | `3+4j` | `.real` 实部、`.imag` 虚部、`abs()` 求模 |\n| 字符串 str | `'abc'`、`\"abc\"`、`'''可跨行'''` | 有序、**不可变**的序列 |\n| 布尔 bool | `True`、`False` | 是 int 的子类：`True + True` 得 `2` |\n| 空值 None | `None` | 表示\"什么都没有\"，不是 0 也不是空串 |\n\n```python\nprint(type(3.14))          # <class 'float'>\nprint((3 + 4j).imag)       # 4.0\nprint(abs(3 + 4j))         # 5.0（复数的模）\nprint(True + True)         # 2\nprint(0.1 + 0.2 == 0.3)    # False\n```\n\n### 变量与多重、链式赋值\n\n- 变量**无需声明类型**，赋什么值就是什么类型，同一变量可随时换成其他类型；用 `type()` 查看类型。\n- **链式赋值**：`a = b = c = 10`，三个名字指向同一个值。\n- **多重赋值（序列解包）**：`a, b = 1, 2`，右边元素个数必须与左边变量个数一致；`a, b = '12'` 合法（`a='1'`、`b='2'`），但 `a, b = '123'` 报错。\n- **交换两个变量**不需要临时变量：`a, b = b, a`。\n\n```python\na = b = c = 10             # 链式赋值\nx, y = 3, 5\nx, y = y, x                # 交换后 x=5，y=3\nm, n = '12'                # m='1'，n='2'\np, q = [1, 2, 3]           # 报错！个数不匹配\n```\n\n### 类型转换细节（最爱考）\n\n| 函数 | 作用 | 考点细节 |\n| --- | --- | --- |\n| `int(x)` | 转整数 | `int(3.9)` 得 `3`（**直接截断，不是四舍五入**）；`int('35')` 合法；**`int('3.5')` 报错 ValueError** |\n| `float(x)` | 转浮点 | `float('3.5')` 得 `3.5`；`float(3)` 得 `3.0` |\n| `str(x)` | 转字符串 | 任何类型都能转：`str(3.0)` 得 `'3.0'` |\n| `eval(s)` | 还原表达式 | `eval('3.5')` 得 `3.5`；`eval('1+2')` 得 `3` |\n| `round(x, n)` | 保留 n 位小数 | **五取偶**：`round(2.5)` 得 `2`，`round(3.5)` 得 `4` |\n| `bool(x)` | 转布尔 | `0`、`0.0`、`''`、`[]`、`None` 都是 `False`，其余为 `True` |\n\n```python\nprint(int(3.9))            # 3（丢掉小数部分）\nprint(int('35') + 1)       # 36\nprint(float('3.5') + 0.5)  # 4.0\nprint(str(3) + '5')        # '35'\nprint(round(3.14159, 2))   # 3.14\n```\n\n### 算术运算符与优先级\n\n| 运算符 | 含义 | 示例 | 注意 |\n| --- | --- | --- | --- |\n| `/` | 除 | `7/2` 得 `3.5`，`6/3` 得 **`2.0`** | 结果**永远是浮点数** |\n| `//` | 整除（向下取整） | `7//2` 得 `3`；`-7//2` 得 **`-4`** | 向数轴**负方向**取整 |\n| `%` | 取余 | `7%3` 得 `1`；`-7%3` 得 **`2`** | 余数符号**跟除数** |\n| `**` | 幂 | `2**3` 得 `8`；`2**0.5` 是平方根 | **右结合**：`2**3**2` 得 `512` |\n| `*`、`+` | 乘、加 | `'ab' * 3` 得 `'ababab'` | 字符串可重复、拼接 |\n\n- 优先级从高到低：`()` → `**` → 一元 `+/-` → `* / // %` → 二元 `+ -` → 比较运算 → `not` → `and` → `or`；记不清就加括号。\n- **`-3**2 = -(3**2) = -9`，`(-3)**2 = 9`**——幂的优先级高于负号，选择题高频。\n- 不同数值类型混合运算**自动向精度高的类型转换**：int 与 float 运算得 float，再与 complex 运算得 complex。\n\n```python\nprint(6 / 3)        # 2.0\nprint(-7 // 2)      # -4\nprint(-7 % 3)       # 2\nprint(-3 ** 2)      # -9\nprint((-3) ** 2)    # 9\nprint(3 + 2.0)      # 5.0（int 自动转 float）\n```\n\n### 比较与逻辑运算：and/or 的返回值\n\n- 比较运算的结果是布尔值，还可以**连写**：`1 < x <= 10` 等价于 `1 < x and x <= 10`。\n- 字符串比较按 Unicode 编码逐位进行：`'abc' < 'abd'` 为 True，`'9' > '100'` 也为 True（逐位比 `'9' > '1'`）。\n- 逻辑运算优先级：`not` > `and` > `or`。\n- **`and`/`or` 返回的是操作数本身，不一定是布尔值**：\n  - `a and b`：a 为假则返回 a（**短路**，b 不再计算）；a 为真则返回 b；\n  - `a or b`：a 为真则返回 a（**短路**）；a 为假则返回 b；\n  - `not` 一定返回 True/False。\n\n```python\nprint(3 and 5)      # 5（都真返回后一个）\nprint(0 and 5)      # 0（短路，直接返回假值）\nprint(3 or 5)       # 3（都真返回前一个）\nprint(0 or 5)       # 5\nprint(not 3)        # False\nprint(3 > 2 == 1)   # False（等价 3>2 and 2==1）\n```\n\n### 必背清单\n\n- 标识符规则：字母/数字/下划线/中文，**不以数字开头**、不与关键字重名、区分大小写。\n- `input()` 返回字符串；`print(sep=分隔符, end=结尾符)`；`eval()` 去引号求值。\n- 六大类型：int、float、complex、str、bool、None；`type()` 查类型；`True/False/None` 首字母大写。\n- `int('3.5')` 报错；`int(3.9)` 截断为 3；`round(2.5)` 得 2、`round(3.5)` 得 4。\n- `6/3` 得 `2.0`；`7//2=3`、`-7//2=-4`；`-7%3=2`；`-3**2=-9`、`(-3)**2=9`、幂右结合。\n- `and` 返回第一个假值或最后一个真值；`or` 返回第一个真值；两者都可能短路。\n- 优先级：`**` > `* / // %` > `+ -` > 比较 > `not` > `and` > `or`。\n- 链式赋值 `a = b = c = 1`；解包赋值 `a, b = 1, 2`；交换 `a, b = b, a`。\n\n### 易错点\n\n- `input()` 拿到的永远是字符串，参与算术运算前必须 `int()`/`float()`/`eval()` 转换。\n- `int('3.5')` 直接报错；含小数点的字符串要先 `float()` 再 `int()`。\n- `/` 的结果一定是浮点数，`6/3` 是 `2.0` 而不是 `2`。\n- `-7//2` 是 `-4` 不是 `-3`（整除向负无穷方向取整）。\n- `-7%3` 是 `2` 不是 `-1`（余数的符号跟除数一致）。\n- `-3**2` 等于 `-9`：幂运算优先级高于负号，想算负数的平方要写 `(-3)**2`。\n- `true`、`false`、`none` 全是错的，必须写 `True`、`False`、`None`。\n- `'a' and 'b'` 的结果是 `'b'` 而不是 True——`and/or` 返回操作数，只有 `not` 保证返回布尔值。\n- `0.1 + 0.2 == 0.3` 为 False，浮点数不能直接用 `==` 判等。\n- 同一缩进块混用 Tab 和空格会报 IndentationError，缩进错误也是语法错误。\n",
  "2": "控制流程是**程序填空题和改错题的主干**：几乎每道大题都是\"输入 → 分支判断 → 循环处理 → 按格式输出\"的骨架，本关的 `range()`、`break/continue`、双层循环缩进是最常见的设错点。本关末尾的经典算法小抄（素数、水仙花数、斐波那契、辗转相除等）务必练到能默写。\n\n### 三种基本结构\n\n- **顺序结构**：语句从上到下依次执行；**分支（选择）结构**：按条件走不同路线；**循环结构**：让某段代码重复执行。\n- 任何算法都由这三种结构组合而成，选择题常考结构识别与流程图对应。\n- Python 靠**缩进**表达\"谁属于谁\"，不用花括号。\n\n```python\nn = int(input())            # 顺序\nif n % 2 == 0:              # 分支\n    print('偶数')\nelse:\n    print('奇数')\n```\n\n### if / elif / else 与嵌套\n\n- 单分支 `if 条件:`；双分支 `if...else`；多分支 `if...elif...else`，**从上往下依次判断，命中一个分支后其余全部跳过**。\n- 条件后必须有冒号 `:`；`else` 与**同缩进的 if** 配对，嵌套分支靠缩进区分层次。\n- 条件表达式（三元运算）：`变量 = 值1 if 条件 else 值2`。\n- 条件可以是任何对象：**非零数值、非空字符串/列表都算 True**，`0`、`''`、`[]`、`None` 都算 False。\n\n```python\nscore = int(input())\nif score >= 90:\n    grade = '优秀'\nelif score >= 80:\n    grade = '良好'\nelif score >= 60:\n    grade = '及格'\nelse:\n    grade = '不及格'\nprint(grade)\nprint('及格' if score >= 60 else '不及格')   # 三元表达式\n```\n\n### while 循环\n\n- `while 条件:` 适合**循环次数不确定**的场合；循环体内必须有让条件趋向结束的语句，否则死循环。\n- 万能套路 `while True:` + `if 结束条件: break`——\"不断读输入直到空行\"的标准写法（填空题高频）。\n\n```python\ni, s = 1, 0\nwhile i <= 100:        # 1 加到 100\n    s += i\n    i += 1             # 忘了这行就是死循环\nprint(s)               # 5050\n\nwhile True:            # 持续读入，空行结束\n    line = input()\n    if line == '':\n        break\n    print('你输入了', line)\n```\n\n### for 与 range() 三参数\n\n- `for 变量 in 序列:` 依次取出序列中的每个元素；配 `range()` 实现指定次数循环。\n- **`range(start, stop, step)` 含头不含尾**，step 省略默认 1，可为负。\n\n| 写法 | 生成的序列 |\n| --- | --- |\n| `range(5)` | 0, 1, 2, 3, 4 |\n| `range(1, 6)` | 1, 2, 3, 4, 5 |\n| `range(1, 10, 2)` | 1, 3, 5, 7, 9 |\n| `range(10, 0, -1)` | 10, 9, 8, ..., 1 |\n| `range(10, 0)` | 空！步长为正却往小走，循环体一次都不执行 |\n\n- `range()` 本身不是列表，`list(range(5))` 才得到 `[0, 1, 2, 3, 4]`。\n- 直接遍历字符串：`for ch in 'Python':`。\n\n```python\ntotal = 0\nfor i in range(1, 101):    # i 取 1..100\n    total += i\nprint(total)               # 5050\nfor ch in 'Python':\n    print(ch, end=' ')     # P y t h o n\n```\n\n### break、continue 与 for-else\n\n- `break`：**立即跳出本层整个循环**；`continue`：**跳过本次剩余语句，直接进入下一次循环**。\n- 两者只对**所在那一层**循环生效，多层嵌套时外层不受影响。\n- `for...else` / `while...else`：循环**没有被 break 打断**、正常跑完时执行 `else` 块——查找、判素数的惯用法。\n\n```python\nfor i in range(5):\n    if i == 3:\n        break\n    print(i, end=' ')      # 0 1 2（3 及以后全没了）\nprint()\nfor i in range(5):\n    if i == 3:\n        continue\n    print(i, end=' ')      # 0 1 2 4（只跳过 3）\nprint()\nfor n in [2, 4, 6, 8]:\n    if n % 2 == 1:\n        break\nelse:\n    print('没有奇数')       # 循环没被 break，else 执行\n```\n\n### 循环嵌套：乘法表与图形打印\n\n- 外层控制**行**、内层控制**列**；外层执行 1 次，内层完整执行一遍。\n- 固定搭配：内层用 `print(x, end='')` 控制不换行，外层循环末尾用 `print()` 换行。\n\n```python\n# 九九乘法表（下三角）\nfor i in range(1, 10):\n    for j in range(1, i + 1):\n        print('{}*{}={}\\t'.format(i, j, i * j), end='')\n    print()\n\n# 星号金字塔：4 行\nn = 4\nfor i in range(1, n + 1):\n    print(' ' * (n - i) + '*' * (2 * i - 1))\n```\n\n### try-except 异常处理【知道】\n\n- 把可能出错的语句放进 `try`，一旦出错程序**不崩溃**，转去执行类型匹配的 `except`；可以写多个 except；`finally` 中的语句**无论是否出错都执行**。\n- 要认识常见异常名：`ZeroDivisionError` 除零、`ValueError` 类型转换失败、`IndexError` 下标越界、`NameError` 变量未定义、`TypeError` 类型错误。\n\n```python\ntry:\n    a = int(input())\n    print(10 / a)\nexcept ZeroDivisionError:\n    print('除数不能为0')\nexcept ValueError:\n    print('输入的不是整数')\nfinally:\n    print('程序结束')\n```\n\n### 经典算法小抄（必须练到默写）\n\n**素数判断**（试除 + for-else，只需试除到平方根）：\n\n```python\nn = int(input())\nfor i in range(2, int(n ** 0.5) + 1):\n    if n % i == 0:\n        print(n, '不是素数')\n        break\nelse:\n    print(n, '是素数')\n```\n\n**水仙花数**（三位数，各位数字立方和等于自身；取位套路通用）：\n\n```python\nfor n in range(100, 1000):\n    a = n // 100          # 百位\n    b = n // 10 % 10      # 十位\n    c = n % 10            # 个位\n    if a ** 3 + b ** 3 + c ** 3 == n:\n        print(n)          # 153 370 371 407\n```\n\n**斐波那契数列**（1 1 2 3 5 8...，双变量同时更新是核心）：\n\n```python\na, b = 1, 1\nfor i in range(20):\n    print(a, end=' ')\n    a, b = b, a + b\n```\n\n**辗转相除求最大公约数**（最小公倍数 = 两数之积 ÷ 最大公约数）：\n\n```python\nm, n = int(input()), int(input())\na, b = m, n\nwhile b != 0:\n    a, b = b, a % b       # 余数不为 0 就继续除\nprint('最大公约数', a, '最小公倍数', m * n // a)\n```\n\n**累加、累乘、计数与最值**（初始化是关键）：\n\n```python\nnums = [3, 7, 2, 9, 4]\ns, t, cnt = 0, 1, 0        # 累加器 0 / 累乘器 1 / 计数器 0\nmx = nums[0]               # 求最值用第一个元素初始化\nfor x in nums:\n    s += x                 # 累加\n    t *= x                 # 累乘\n    if x > mx:             # 打擂台求最大\n        mx = x\n    if x % 2 == 0:         # 满足条件才计数\n        cnt += 1\nprint(s, t, cnt, mx)       # 25 1512 2 9\n```\n\n### 必背清单\n\n- `range(start, stop, step)` 含头不含尾；`range(1,10,2)`、`range(10,0,-1)`、`range(10,0)` 的结果。\n- `while True:` + `if ...: break` 读输入到空行的模板。\n- 九九乘法表双层循环：内层 `end=''`，外层末尾 `print()`。\n- 素数判断：试除 2 到 `int(n**0.5)+1`，配 for-else 或标志变量。\n- 水仙花数取位：`n//100`、`n//10%10`、`n%10`。\n- 斐波那契：`a, b = 1, 1` 与 `a, b = b, a + b`。\n- 辗转相除：`while b != 0: a, b = b, a % b`，最小公倍数 `m*n//a`。\n- 初始化：累加器 `0`、累乘器 `1`、计数器 `0`、最值用首元素。\n\n### 易错点\n\n- `range(1, 10)` 不包含 10，只有 1 到 9。\n- 倒序必须写负步长 `range(10, 0, -1)`；`range(10, 0)` 是空序列，循环体一次都不执行。\n- `break` 只跳出**当前这一层**循环，嵌套时外层循环继续。\n- `continue` 只是跳过本次，循环变量照常更新，不会造成死循环。\n- `for-else` 的 `else` 在循环**未被 break 打断**时执行，与循环体里有没有 if 无关。\n- `while` 循环忘了更新循环变量（如 `i += 1`）就是死循环。\n- `else` 与哪个 `if` 配对完全由缩进决定，缩进错位逻辑全变。\n- 从 `input()` 读到的数字参与比较或计算前忘了 `int()` 转换。\n- 1 和 0 都不是素数，2 是最小的素数；上面的素数模板默认 `n >= 2`。\n- 计数器、累加器必须在循环外初始化，累乘器初值是 1 不是 0。\n",
  "3": "组合数据类型是**选择题与编程大题的双向高频区**：字符串切片与方法、列表增删改排序、字典分类计数、集合去重，几乎每年必考其一。数据分析大题（读文件后 `split`、字典计数、排序输出）全部以本关语法为工具，方法记不牢，大题写不动。\n\n### 字符串：索引与切片\n\n- 索引从 **0** 开始，负索引 `-1` 是最后一个字符；取单个字符下标越界**报 IndexError，但切片越界不报错**，取到哪算哪。\n- 切片 `s[start:stop:step]`：**含头不含尾**；step 为负则反向取；`s[::-1]` 是反转字符串的固定写法。\n- 字符串是**不可变**序列：`s[0] = 'X'` 报 TypeError，一切\"修改\"都是生成新串。\n\n以 `s = 'Python'` 为例：\n\n| 表达式 | 结果 | 说明 |\n| --- | --- | --- |\n| `s[0]` / `s[-1]` | `'P'` / `'n'` | 正/负索引 |\n| `s[1:4]` | `'yth'` | 含头不含尾 |\n| `s[:3]` / `s[3:]` | `'Pyt'` / `'hon'` | 前 3 个 / 从 3 到末尾 |\n| `s[::-1]` | `'nohtyP'` | 反转 |\n| `s[::2]` | `'Pto'` | 步长 2 |\n| `s * 2` | `'PythonPython'` | 重复 |\n\n```python\ns = 'Python'\nprint(s[-3:])          # hon\nprint(s[::-1])         # nohtyP\nprint(s[1:5:2])        # yh\n```\n\n### 字符串方法速查表（12 个必会）\n\n| 方法 | 作用与返回 | 考点细节 |\n| --- | --- | --- |\n| `len(s)` | 长度（内建函数） | 空格也占 1 个字符 |\n| `s.find(sub)` | 首次出现的下标 | **找不到返回 -1** |\n| `s.index(sub)` | 同 find | 找不到**报错**（与 find 的区别） |\n| `s.count(sub)` | 子串出现次数 | |\n| `s.replace(old, new)` | 替换，返回**新串** | 原串不变，要接回变量 |\n| `s.split(sep)` | 切分成**列表** | 不传参按连续空白切 |\n| `s.join(列表)` | 用 s 连接列表元素 | 元素必须都是字符串 |\n| `s.strip()` | 去两端空白（含 `\\n`） | 读文件逐行处理必配 |\n| `s.upper()` / `s.lower()` | 转大写/小写 | 返回新串，原串不变 |\n| `s.startswith(t)` / `s.endswith(t)` | 判断前/后缀 | 返回布尔值 |\n| `s.isdigit()` / `s.isalpha()` | 是否全数字/全字母 | 常用于输入校验 |\n| `s.center(n)` / `ljust` / `rjust` | 按宽度对齐填充 | `'ab'.center(5,'*')` 得 `**ab*` |\n\n```python\ns = '  Hello World  '\nprint(s.strip().lower())                    # hello world\nprint('a,b,c'.split(','))                   # ['a', 'b', 'c']\nprint('-'.join(['2024', '09']))             # 2024-09\nprint('Python'.find('th'), 'Python'.find('z'))   # 2 -1\n```\n\n### 三种格式化：%、format 与 f-string\n\n| 需求 | % 法 | format 法 | f-string 法 |\n| --- | --- | --- | --- |\n| 代入值 | `'%s 是 %d 岁' % (name, age)` | `'{} 是 {} 岁'.format(name, age)` | `f'{name} 是 {age} 岁'` |\n| 保留 2 位小数 | `'%.2f' % x` | `'{:.2f}'.format(x)` | `f'{x:.2f}'` |\n| 宽度 5 右对齐 | `'%5d' % x` | `'{:5d}'.format(x)` | `f'{x:5d}'` |\n| 左对齐 | `'%-5d' % x` | `'{:<5}'.format(x)` | `f'{x:<5}'` |\n| 按位置取参数 | — | `'{1}{0}'.format(a, b)` | 直接写变量名 |\n\n- `%s` 对应字符串、`%d` 整数、`%f` 浮点；`{:.2f}` 冒号后是格式说明，也可写宽度如 `{:8.2f}`。\n- f-string 最简洁（近年真题常见），format 最通用；`{}` 个数与参数个数要一致。\n\n```python\npi = 3.14159\nprint('%.2f' % pi)                 # 3.14\nprint('{:.2f}'.format(pi))         # 3.14\nprint(f'{pi:.2f}')                 # 3.14\nprint('{0}*{1}={2}'.format(3, 4, 12))   # 3*4=12\n```\n\n### 列表：增删改查、排序与反转\n\n- 创建 `lst = [1, 2, 3]`；下标、切片规则与字符串相同；列表**可变**，可直接 `lst[i] = x` 改值。\n- 增：`append(x)` 尾部加**一个**元素；`insert(i, x)` 在位置 i 插入；`extend(t)`（或 `+`）把另一个列表**逐个并入**。\n- 删：`pop(i)` 弹出并**返回**该元素（缺省弹末尾）；`remove(x)` 删**第一个值为 x** 的元素；`del lst[i]`；`clear()` 清空。\n- 查：`x in lst`、`lst.index(x)`、`lst.count(x)`。\n- 排序反转：`lst.sort()` **原地排序、返回 None**；`sorted(lst)` 返回**新列表**、原表不变；`lst.reverse()` 原地反转，`lst[::-1]` 得反转副本；都支持 `reverse=True` 降序。\n- `key` 参数指定排序依据：`sort(key=len)` 按长度，`sort(key=lambda x: x[1])` 按第 2 项。\n\n```python\nlst = [3, 1, 4]\nlst.append(5)              # [3, 1, 4, 5]\nlst.insert(0, 9)           # [9, 3, 1, 4, 5]\nlst.extend([6, 7])         # [9, 3, 1, 4, 5, 6, 7]\nprint(lst.pop())           # 7（弹出末尾并返回）\nlst.remove(3)              # 删除第一个 3\nlst.sort(reverse=True)     # [9, 6, 5, 4, 1]\nwords = ['pear', 'fig', 'apple']\nprint(sorted(words, key=len))   # ['fig', 'pear', 'apple']，原列表不变\nprint([3, 1, 2].sort())    # None！sort() 返回 None\n```\n\n### 列表解析式、split/join 与 enumerate\n\n- 列表解析式：`[表达式 for 变量 in 序列 if 条件]`，一行生成列表，比循环简洁。\n- `enumerate(序列)`：同时给出**下标和值**：`for i, v in enumerate(lst):`。\n- `split` 把字符串切成**列表**、`join` 把列表拼成**字符串**——数据处理大题的黄金搭档。\n\n```python\nsq = [x * x for x in range(1, 11) if x % 2 == 0]\nprint(sq)                 # [4, 16, 36, 64, 100]\nfor i, ch in enumerate('abc'):\n    print(i, ch)          # 0 a / 1 b / 2 c\ncsv = '张三,90,85'\nparts = csv.split(',')    # ['张三', '90', '85']\nprint(','.join(parts))    # 张三,90,85\n```\n\n### 深浅复制：b = a、b = a[:] 与 copy()\n\n- `b = a`：**不复制**，只是别名，两个名字指向同一个列表，改一个另一个跟着变。\n- `b = a[:]`、`b = list(a)`、`b = a.copy()`：**浅复制**，新建了外层列表，对 b 顶层增删改不影响 a。\n- 嵌套列表的内层仍被共享，要彻底独立用 `copy.deepcopy(a)`。\n\n```python\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)                  # [1, 2, 3, 4] 跟着变了！\nc = a[:]                  # 等价 a.copy()\nc.append(5)\nprint(a)                  # [1, 2, 3, 4] 不受影响\n```\n\n### 元组：不可变序列\n\n- 创建 `t = (1, 2, 3)`；**只有一个元素必须写 `(5,)`**，`(5)` 只是整数 5；括号甚至可省：`t = 1, 2, 3`。\n- 元组**不可变**：不能增删改元素；但 `t.index(x)`、`t.count(x)`、索引切片、`len()` 都可用。\n- **解包**：`a, b = (1, 2)`；函数 `return a, b` 返回的其实就是元组。\n- 与列表互转：`list(t)`、`tuple(lst)`；元组不可变，**能作字典的键和集合的元素**。\n\n```python\nt = (5,)                  # 单元素元组，逗号不能省\nprint(type((5)))          # <class 'int'>，(5) 就是整数\nx, y = (3, 7)             # 解包\nprint(tuple([1, 2]), list((1, 2)))   # (1, 2) [1, 2]\n```\n\n### 字典与集合\n\n#### 字典：键值对\n\n- 创建：`d = {'a': 1}`，空字典 `d = {}`；**键必须不可变**（字符串、数字、元组可以，列表不行）且唯一，值任意。\n- 访问：`d['a']`（键不存在**报 KeyError**）；`d.get(k, 默认值)`（不存在返回默认值，**不报错**）。\n- 增改：`d[k] = v`（键存在则改，不存在则加）；删：`del d[k]`、`d.pop(k)`（返回对应的值）、`clear()`。\n- 遍历三视图：`d.keys()` 键、`d.values()` 值、`d.items()` 键值对，配 `for k, v in d.items():`；`k in d` 只判断键。\n\n**分类计数模板**（大题必备，配合读文件使用）：\n\n```python\ncounts = {}\nfor word in ['apple', 'egg', 'apple', 'egg', 'beef']:\n    counts[word] = counts.get(word, 0) + 1\nprint(counts)             # {'apple': 2, 'egg': 2, 'beef': 1}\nfor k, v in counts.items():\n    print(k, v)\n```\n\n#### 集合：无序不重复\n\n- 创建：`s = {1, 2, 3}`、`set('abc')`；**空集合必须写 `set()`**（`{}` 是空字典！）。\n- 自动去重：`set([1, 2, 2, 3])` 得 `{1, 2, 3}`——最常考的用法。\n- 运算：`a & b` 交集、`a | b` 并集、`a - b` 差集、`a ^ b` 对称差。\n- 无序、不支持下标；元素必须不可变；`add(x)` 添加、`remove(x)` 删除。\n\n```python\na = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(a & b, a | b, a - b)    # {3, 4} {1, 2, 3, 4, 5} {1, 2}\nprint(len(set('aabbcc')))     # 3（去重后计数）\n```\n\n### 必背清单\n\n- 切片 `s[a:b:c]` 含头不含尾；`s[::-1]` 反转；负索引 `-1` 是末字符；切片越界不报错。\n- 12 个字符串方法；`find` 找不到返回 -1、`index` 报错；`replace/upper/lower/strip` 返回新串。\n- 三种格式化各写一遍：`'%.2f' % x`、`'{:.2f}'.format(x)`、`f'{x:.2f}'`。\n- 列表增删：`append/insert/extend/pop/remove/del`；`sort()` 返回 None、`sorted()` 返回新列表；`key=` 与 `reverse=True`。\n- 列表解析式 `[x*2 for x in lst if 条件]`；`enumerate(lst)` 同时取下标和值。\n- `b = a` 是别名，`b = a[:]`（或 `a.copy()`）才是复制。\n- 单元素元组 `(5,)`；`list()` 与 `tuple()` 互转。\n- 分类计数：`d[k] = d.get(k, 0) + 1`；遍历 `for k, v in d.items():`。\n- `set()` 去重；`& | - ^` 交并差对称差；空集合必须 `set()`。\n\n### 易错点\n\n- 切片含头不含尾：`s[0:3]` 取不到 `s[3]`；但切片越界不报错，单下标越界才报 IndexError。\n- 字符串、元组不可变：`s[0]='a'` 报错；`replace`、`upper`、`strip` 都返回新串，必须接回变量才生效。\n- `lst.append([5,6])` 把整个列表当作一个元素塞进去，想逐个并入要用 `extend`。\n- `lst.sort()` 和 `lst.append()` 等**原地修改并返回 None**，写 `x = lst.sort()` 后 x 是 None；要新列表用 `sorted(lst)`。\n- `b = a` 不是复制，改 b 就是改 a；只有 `a[:]`、`a.copy()` 才新建外层列表。\n- 单元素元组必须写 `(5,)`，`(5)` 是整数；元组不能增删改元素。\n- 字典的键必须是不可变类型，列表不能作键；`d['x']` 键不存在报 KeyError，`d.get('x')` 返回 None。\n- `{}` 是空字典，空集合必须写 `set()`。\n- `join` 的列表元素必须全是字符串，`','.join([1, 2])` 报 TypeError。\n- `split()` 不传参按连续空白切并丢弃空串，与 `split(' ')` 的结果可能不同。\n",
  "4": "函数是\"死记语法\"与\"读懂程序\"的分水岭：选择题爱考**参数传递、作用域、返回值类型**，程序填空常给函数框架让你补全，编程大题要求把功能封装成函数。递归【理解】是二、三级难度的分界点，抓住\"基例 + 递归链条\"两要素就能读懂绝大多数真题。\n\n### 函数定义与 return\n\n- `def 函数名(参数):` 定义函数；**必须先定义后调用**，定义时不执行函数体，调用才执行。\n- `return` 立即结束函数并把值交回调用处；**没有 return 或只写 `return`，返回 None**。\n- `return a, b` 返回的是**一个元组** `(a, b)`，可用两个变量解包接收。\n- `print` 只负责显示，`return` 才是把结果交给调用方继续使用——两者不能混为一谈。\n\n```python\ndef min_max(nums):\n    return min(nums), max(nums)     # 返回元组\n\nlo, hi = min_max([3, 1, 4])\nprint(lo, hi)                        # 1 4\n\ndef say():\n    print('hi')                      # 没有 return\nx = say()\nprint(x)                             # None\n```\n\n### 四种参数：位置、默认、关键字、可变\n\n| 种类 | 写法 | 规则 |\n| --- | --- | --- |\n| 位置参数 | `f(3, 5)` | 实参按顺序一一对应形参 |\n| 默认参数 | `def f(x, n=2):` | **必须写在位置参数后面**；不传实参就用默认值 |\n| 关键字实参 | `f(n=3, x=2)` | 按\"形参名=值\"传，与顺序无关 |\n| 可变参数 | `def f(*args):` | 多余的**位置**实参收进一个**元组** |\n| 可变关键字参数 | `def f(**kwargs):` | 多余的**关键字**实参收进一个**字典** |\n\n- 混合定义的顺序固定：位置 → 默认 → `*args` → `**kwargs`。\n\n```python\ndef power(x, n=2, *args, **kwargs):\n    print(x, n, args, kwargs)\npower(3)                      # 3 2 () {}\npower(3, 4)                   # 3 4 () {}\npower(3, 4, 5, mode='fast')   # 3 4 (5,) {'mode': 'fast'}\n```\n\n### 作用域：局部与全局（LEGB）\n\n- 变量查找顺序 **L**ocal（函数内）→ **E**nclosing（外层函数）→ **G**lobal（模块级）→ **B**uilt-in（内建）。\n- 函数内**只读**全局变量可以直接用；但只要在函数内给它**赋过值**，它就成了局部变量（除非先声明 `global`）。\n- 想在函数内**修改**全局变量，必须在赋值前写 `global 变量名`。\n- 局部变量在函数调用结束后销毁，函数外部访问不到。\n\n```python\ncount = 0\ndef inc():\n    global count        # 不加这行报 UnboundLocalError\n    count += 1\ninc()\ninc()\nprint(count)            # 2\n\ndef demo():\n    x = 10              # 局部变量，函数结束即销毁\ndemo()\n# print(x)              # 报 NameError\n```\n\n### lambda 与 map / filter / sorted 三件套\n\n- `lambda 参数: 表达式`：匿名函数，**只能写一个表达式**，表达式的值就是返回值。\n- `map(f, 序列)`：对每个元素调用 f，返回**迭代器**（要 `list()` 才能看全内容）。\n- `filter(f, 序列)`：保留 f 返回**真值**的元素，同样返回迭代器。\n- `sorted(序列, key=f, reverse=True)`：按 f 的返回值排序——与 lambda 搭配是必考组合。\n\n```python\nf = lambda x: x * x\nprint(list(map(f, [1, 2, 3])))          # [1, 4, 9]\nprint(list(map(lambda x: x + 1, [1, 2])))    # [2, 3]\nprint(list(filter(lambda x: x % 2, range(10))))   # [1, 3, 5, 7, 9]\npairs = [('a', 3), ('b', 1)]\nprint(sorted(pairs, key=lambda p: p[1]))   # [('b', 1), ('a', 3)]\n```\n\n### 递归【理解】\n\n- 函数直接或间接调用自己；两个必备要素：**基例**（递归出口，能直接给出答案）+ **链条**（每层把问题缩小一步并向基例推进）。\n- 执行过程：调用时逐层压栈展开，**到达基例后逐层返回回代**。`fact(4)` 的展开：`4*fact(3)` → `4*(3*fact(2))` → `4*(3*(2*fact(1)))` → `4*(3*(2*1))` = 24。\n- 递归没有基例、或没有向基例推进，就会无限递归报 RecursionError。\n\n```python\ndef fact(n):\n    if n == 1:                # 基例：出口\n        return 1\n    return n * fact(n - 1)    # 链条：缩小问题\nprint(fact(4))                # 24\n\ndef fib(n):\n    if n == 1 or n == 2:\n        return 1\n    return fib(n - 1) + fib(n - 2)\nprint(fib(10))                # 55\n```\n\n汉诺塔（移动次数为 `2^n - 1`）：\n\n```python\nsteps = 0\ndef hanoi(n, a, b, c):        # 把 n 个盘从 a 借助 b 移到 c\n    global steps\n    if n == 1:\n        steps += 1            # 只剩 1 个盘直接移\n        return\n    hanoi(n - 1, a, c, b)     # 上面 n-1 个借助 c 移到 b\n    steps += 1                # 最大盘 a → c\n    hanoi(n - 1, b, a, c)     # n-1 个从 b 借助 a 移到 c\nhanoi(3, 'A', 'B', 'C')\nprint(steps)                  # 7\n```\n\n### 生成器与装饰器【知道】\n\n- **生成器**：函数体里出现 `yield`，它就是生成器函数；调用它**不执行函数体**，得到生成器对象，每次 `next()` 执行到下一个 `yield` 处暂停并给出值——惰性求值、按需产生。\n\n```python\ndef gen():\n    yield 1\n    yield 2\ng = gen()\nprint(next(g))            # 1\nprint(next(g))            # 2\nprint(list(gen()))        # [1, 2]\n```\n\n- **装饰器**：接收函数并返回新函数的函数；`@装饰器名` 相当于 `f = 装饰器(f)`，常用于计时、写日志等\"统一加功能\"的场景。\n\n```python\nimport time\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        t0 = time.time()\n        result = func(*args, **kwargs)\n        print('耗时', time.time() - t0)\n        return result\n    return wrapper\n\n@timer                    # 等价于 slow = timer(slow)\ndef slow():\n    time.sleep(0.1)\nslow()\n```\n\n### 模块化：import、from...import 与 __name__\n\n- `import 模块`：使用时要加前缀，如 `math.sqrt(2)`；不会与当前文件里的名字冲突。\n- `from 模块 import 名字`：直接写 `sqrt(2)`，但可能与自己定义的同名变量/函数**冲突覆盖**。\n- 别名：`import 模块 as 别名`（如 `import numpy as np`）、`from 模块 import 名字 as 别名`；`from 模块 import *` 导入全部名字（不推荐）。\n- `__name__ == '__main__'`：**直接运行**本文件时 `__name__` 为 `'__main__'`，if 内代码执行；**被别的文件 import** 时 `__name__` 是模块名，if 内代码不执行——\"既能当脚本又能当库\"的标准写法。\n- 第三方库安装：联网时 `pip install 库名`；无网络或需指定版本时用 **whl 文件**：`pip install 路径/文件名.whl`，装好后同样 import 使用。\n\n```python\n# mymath.py\ndef add(a, b):\n    return a + b\nif __name__ == '__main__':   # 只有直接运行 mymath.py 才打印\n    print(add(1, 2))\n\n# 其他文件中：import mymath 后\n# mymath.add(3, 4)           # 不会触发上面的 print\n```\n\n### 必背清单\n\n- `def` 定义、`return` 语义；无 return 返回 None；`return a, b` 返回元组。\n- 四种参数写法与混合顺序：位置 → 默认 → `*args`（收成元组）→ `**kwargs`（收成字典）。\n- `global` 声明后才能在函数内修改全局变量；LEGB 查找顺序。\n- `lambda 参数: 表达式`；`map`/`filter` 的结果要 `list()`；`sorted(序列, key=lambda x: x[1], reverse=True)`。\n- 递归两要素（基例 + 链条）；阶乘、斐波那契、汉诺塔模板。\n- 函数体含 `yield` 即生成器；`next()` 逐个取值。\n- `import 模块` 用 `模块.名字`，`from 模块 import 名字` 直接用；`__name__ == '__main__'` 的含义；`pip install 库名` / `pip install xxx.whl`。\n\n### 易错点\n\n- 函数必须**先定义后调用**；只定义不调用，函数体一行都不会执行。\n- 忘写 `return` 时函数返回 None，拿返回值继续运算会报 TypeError。\n- `print` 不是 `return`：打印了不等于返回了；`return` 之后的语句永远不会执行。\n- 默认参数不能写在位置参数前面，`def f(n=2, x)` 直接语法错误。\n- `*args` 收到的是**元组**、`**kwargs` 收到的是**字典**，别记反。\n- 函数内给全局变量赋值却忘了 `global`，报 UnboundLocalError。\n- lambda 里只能写表达式，不能写赋值语句和多行逻辑；分支要用条件表达式 `a if 条件 else b`。\n- `map`/`filter` 返回的是迭代器不是列表，直接 `print` 看不到元素，要 `list()` 转换。\n- 递归缺基例或缺推进就会无限递归；`fib` 每项重算，n 稍大就很慢（了解即可）。\n- `from 模块 import sqrt` 或 `import *` 可能覆盖自己定义的同名函数，导入的顺序决定谁生效。\n- 被 import 时 `__name__` 不是 `'__main__'`，测试代码要放进 `if __name__ == '__main__':` 里。\n",
  "5": "本关是**编程大题（75分）的主战场**。历年真题的编程大题几乎都围绕\"读文件 → 逐行处理 → 统计/筛选 → 按格式输出\"展开，本关的套路必须练到能默写。\n\n### 基本概念\n\n- **文本文件 vs 二进制文件**：文本文件按字符编码（UTF-8、GBK 等）存储，read 出来是字符串；二进制文件（图片、exe）按字节存储，要用 `'rb'/'wb'` 模式，读出的是 `bytes`。\n- **编码**：`encoding='utf-8'` 最常用；考试给中文数据文件时常明确说\"编码类型为 GBK\"，照题目要求写即可。Windows 下不写 encoding 参数时默认编码可能不是 UTF-8，是常见丢分点。\n- **文件路径**：考试中数据文件常放在 `C:/素材/` 下，题目会给定路径与文件名，写程序时照抄。\n\n### 打开与关闭：open()\n\n```python\nf = open('data.csv', 'r', encoding='utf-8')   # 打开\n...                                           # 处理\nf.close()                                     # 必须关闭\n```\n\n| 模式 | 含义 | 文件不存在 | 注意 |\n| --- | --- | --- | --- |\n| `'r'` | 只读（默认） | 报错 FileNotFoundError | 最常用 |\n| `'w'` | 写入 | 自动创建 | **清空原内容**！ |\n| `'a'` | 追加 | 自动创建 | 保留原内容，在末尾写 |\n| `'rb'/'wb'` | 二进制读写 | 同上 | 处理图片等 |\n\n推荐用 **with 语句**自动关闭，不需要写 close()：\n\n```python\nwith open('data.txt', 'r', encoding='utf-8') as f:\n    for line in f:\n        print(line, end='')\n```\n\n### 读取的三种方法\n\n| 方法 | 返回 | 典型用法 |\n| --- | --- | --- |\n| `f.read()` | 整个文件为**一个字符串**（可带参数 read(n) 读 n 个字符） | 小文件一次性读入 |\n| `f.readline()` | 每次一行的字符串（**末尾带 \\n**） | while 循环逐行 |\n| `f.readlines()` | 所有行组成的**列表**（每行末尾带 \\n） | 按行号处理、跳过标题行 |\n\n**最推荐的遍历方式**：直接 `for line in f:`，逐行迭代、内存友好。\n\n跳过标题行（CSV 数据文件常有标题行）的两种写法：\n\n```python\nf = open('data.csv', 'r', encoding='utf-8')\nnext(f)                    # 方法一：消费掉一行\nlines = f.readlines()      # 方法二：del lines[0]\ndel lines[0]\n```\n\n### 写入文件\n\n```python\nf = open('out.txt', 'w', encoding='utf-8')\nf.write('第一行\\n')        # write 不自动换行，\\n 要自己加\nf.writelines(['a\\n', 'b\\n'])  # 把字符串列表依次写入\nf.close()\n```\n\n### 指针定位\n\n- `f.tell()`：返回当前指针位置（字节）；`f.seek(offset, whence)`：移动指针，`whence` 0=文件开头（默认）、1=当前、2=文件尾。`seek(0)` 回到开头后可重新读取。\n\n### 数据分析标准套路（必须默写）\n\n**逐行处理 CSV 风格数据**（真题模板）：\n\n```python\nf = open('data.csv', 'r', encoding='utf-8')\nnext(f)                        # 跳过标题行\nn = int(input())               # 读入题目要求的阈值\ntotal = 0\nfor line in f:\n    parts = line.strip().split(',')   # 去掉行尾换行 → 按逗号切开\n    score = int(parts[2])             # 需要数值的列要类型转换\n    if score >= n:                    # 按条件筛选\n        total += 1\n        print(parts[0], score)\nf.close()\nprint('共{}本'.format(total))\n```\n\n**词频统计**（词云题、文本分析题的前置套路）：\n\n```python\ncounts = {}\nfor word in text.split():\n    counts[word] = counts.get(word, 0) + 1\nitems = sorted(counts.items(), key=lambda x: x[1], reverse=True)\nfor word, cnt in items[:10]:\n    print(word, cnt)\n```\n\n### 必背清单\n\n- `open(路径, 模式, encoding='utf-8')`、`f.close()`、`with open(...) as f`\n- 模式：`r` 读 / `w` 写(**清空**) / `a` 追加 / `rb`、`wb` 二进制\n- `read()` / `readline()` / `readlines()` 三者区别\n- `for line in f:` 逐行遍历；`next(f)` 跳标题行\n- `line.strip().split(',')` —— 每道数据处理大题的第一行处理\n- `f.seek(0)` 回到文件开头；`f.tell()` 当前位置\n- 词频三件套：`dict.get(k,0)+1`、`items()`、`sorted(..., key=lambda x: x[1], reverse=True)`\n\n### 易错点\n\n- **`'w'` 模式一打开就清空原文件**——要追加必须用 `'a'`。\n- `for line in f` 的每行**末尾带 `\\n`**：比较、转换前必须 `line.strip()` 或 `line.rstrip('\\n')`，否则 `int('1200\\n')` 报 ValueError。\n- 打开文件不写 `encoding`，遇到中文可能乱码或报错；题目指定 GBK 就写 `encoding='gbk'`。\n- `f.readlines()` 返回的列表直接下标访问时同样带 `\\n`。\n- 写文件忘加 `\\n`，所有内容挤成一行。\n- 数字列做大小比较前忘了 `int()` 转换，字符串比较 `'99' > '100'` 结果为 True。\n- 读到文件尾后继续 `readline()` 返回空字符串 `''`（不是报错），用 `while line != ''` 判断结束。"
 },
 "resources": [
  {
   "cat": "official",
   "title": "上信考官方网站（上海市教育考试院）",
   "url": "https://scite.shmeea.edu.cn/",
   "desc": "报名、下载最新考试大纲与官方模拟试卷的第一渠道，考前务必把官方模拟卷做一遍"
  },
  {
   "cat": "official",
   "title": "官方考纲解读（超星平台）",
   "url": "https://mooc1.chaoxing.com/course-ans/courseportal/portal/QYtE3phxYq1QN61Pgo_jnQ==",
   "desc": "考试院配套的考纲解读课程，了解命题思路"
  },
  {
   "cat": "official",
   "title": "Python 程序设计基础（第3版）教材配套",
   "url": "https://www.phei.com.cn/",
   "desc": "大纲指定参考教材：李东方主编，电子工业出版社 2023；配合本站查漏补缺"
  },
  {
   "cat": "github",
   "title": "Python-100-Days（约 187k★）",
   "url": "https://github.com/jackfrued/Python-100-Days",
   "desc": "最流行的中文 Python 系统教程，语言基础与生态部分与考纲高度重合，当字典用"
  },
  {
   "cat": "github",
   "title": "Python-Core-50-Courses（约 12.6k★）",
   "url": "https://github.com/jackfrued/Python-Core-50-Courses",
   "desc": "50 讲语言基础课，粒度适合按考点逐章补强"
  },
  {
   "cat": "github",
   "title": "TheAlgorithms/Python（约 225k★）",
   "url": "https://github.com/TheAlgorithms/Python",
   "desc": "经典算法参考实现（素数/排序/查找等），编程大题常用算法都能找到范本"
  },
  {
   "cat": "github",
   "title": "Python-programming-exercises（约 29.7k★）",
   "url": "https://github.com/zhiwehu/Python-programming-exercises",
   "desc": "100+ 道经典编程练习含题解，难度贴合二级编程题"
  },
  {
   "cat": "github",
   "title": "NCRE-Python 二级教程笔记",
   "url": "https://github.com/Xanxus-5/NCRE-Python",
   "desc": "全国计算机等级考试二级 Python 全书笔记；全国卷与上海卷考点相近，可交叉练习"
  },
  {
   "cat": "github",
   "title": "NCRE2-Python 分类练习题",
   "url": "https://github.com/sandianyiyuan/NCRE2-Python",
   "desc": "二级 Python 分类习题集，按知识点刷"
  },
  {
   "cat": "github",
   "title": "ncre-python-guide 备考笔记",
   "url": "https://github.com/BUZAI946/ncre-python-guide",
   "desc": "12 章 + 318 选择 + 30 编程 + 15 套卷的备考整理，题量结构可参考"
  },
  {
   "cat": "github",
   "title": "turtle 创意绘图合集",
   "url": "https://github.com/cmdragon/Python123",
   "desc": "turtle 绘图实例集，对应考点\"图形绘制\""
  },
  {
   "cat": "tutorial",
   "title": "廖雪峰 Python 教程",
   "url": "https://www.liaoxuefeng.com/wiki/1016959663602400",
   "desc": "中文最系统的免费入门教程，适合从零到一的通读"
  },
  {
   "cat": "tutorial",
   "title": "菜鸟教程 Python3",
   "url": "https://www.runoob.com/python3/python3-tutorial.html",
   "desc": "查询式语法手册带在线运行，做题时快速查函数用法"
  },
  {
   "cat": "tutorial",
   "title": "Python 官方中文文档",
   "url": "https://docs.python.org/zh-cn/3/tutorial/",
   "desc": "权威教程与标准库参考，标准库部分对应考点 random/math/time 等"
  },
  {
   "cat": "tool",
   "title": "Python123 练习平台",
   "url": "https://www.python123.io/",
   "desc": "全国等级考试官方指定上机练习平台，题库与考试同源"
  },
  {
   "cat": "tool",
   "title": "拼题A（PTA）",
   "url": "https://pintia.cn/",
   "desc": "高校程序设计题集平台，有 Python 程序设计题库可加练"
  },
  {
   "cat": "tool",
   "title": "Pyodide（本站判题引擎）",
   "url": "https://github.com/pyodide/pyodide",
   "desc": "本站浏览器内 Python 判题使用的技术，也可自己在浏览器玩 Python"
  },
  {
   "cat": "paper",
   "title": "CSDN：上信考 Python 二三级模拟题与真题回忆（站内搜索）",
   "url": "https://so.csdn.net/so/search?q=%E4%B8%8A%E6%B5%B7%E5%B8%82%E9%AB%98%E7%AD%89%E5%AD%A6%E6%A0%A1%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E6%B0%B4%E5%B9%B3%E8%80%83%E8%AF%95%20python&t=all",
   "desc": "历年考生发布的真题回忆与模拟题解析，考前浏览一遍感受真题风格"
  },
  {
   "cat": "paper",
   "title": "知乎：上信考 vs 全国计算机等级考试对比",
   "url": "https://www.zhihu.com/search?type=content&q=%E4%B8%8A%E6%B5%B7%E9%AB%98%E6%A0%A1%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E6%B0%B4%E5%B9%B3%E8%80%83%E8%AF%95%20Python",
   "desc": "过来人经验：上海卷编程题比重大，重在动手写代码（本站正是按此设计）"
  },
  {
   "cat": "video",
   "title": "B站：上海高校计算机水平考试 Python 备考视频（站内搜索）",
   "url": "https://search.bilibili.com/all?keyword=%E4%B8%8A%E6%B5%B7%E9%AB%98%E6%A0%A1%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%B0%B4%E5%B9%B3%E8%80%83%E8%AF%95python",
   "desc": "模拟卷讲解、真题回忆视频，配合本站刷题食用"
  }
 ]
};
