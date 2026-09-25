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
 "lessons": {
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
