let n1: number = 321;
let n2: string = "";
let n3: boolean = true;
let n4: null = null;
let n5: undefined = undefined;
// 数学概念中的空集
let n6: never;
let n7: 1 = 1;
let n8: false = false;
let n9: "" = "";
// 集合中出现两个成员怎么处理
let n10: 1 | 2 = 1;
// 如果有多个成员 需要用|链接成一个新集合
// 并集

// 交集
let n13: number & 1 = 1;

// 总结 类型的本质是集合 赋值的本质是值不属于该集合
// 1 类型的运算 |联合 &交叉 是并集和交集

//  ！确定赋值断言
let n15!: number;
let n16!: 1 | 2;
// number完全包含1 2
n15 = n16;
// n16 = n15 报错number比1|2多
// 如果变量a：A可以赋值给变量b:B则说明什么
// A是B的子集

// 变量的初始化和变量间的赋值本质都是判断包含关系

// 顶部类型和底部类型、
// 顶部类型是所有集合的父级 顶部类型是所有类型的父类型
// any unknown不确定的类型
// 底部类型所有类型的子集 底部类型是所有类型的子类型
// never any null undefined
// 如何验证某一个类型是顶部类型

// undefined底部 null底部 unknown顶部

// 并集 =》联合类型
// 怎么去定义自定义类型？type
// 使用type关键字定义新类型
type ns = number | string;
let m5: ns;
type one = 1;
type two = 2;
// 使用type关键字给原有类型设置别名
let m6: one = 1;
// 类型k和变量k是不会冲突的
type k = number | string;
let k: k = 123;

export default {};
