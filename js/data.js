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
