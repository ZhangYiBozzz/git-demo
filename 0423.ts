//数组类型
// 定义一个纯数字数组
let arr: number[] = [1, 2, 3];
let a2: undefined[] = [undefined];
let a3: Array<string> = ["hi", "ts"];
// T[]等价于Array<T>
// 数组中每个成员类型相同 开发中居多
// 数组中每个成员的类型不相同 学习中居多
type A1 = typeof arr;
// arr是数组的数据
// A1数组的类型
type IALL = A1[number];

// 数组变量可以通过索引取值 数组类型可以通过索引取成员类型

arr.push(1223);

// 定义一个数组 成员的类型不统一 而且长度未知
let a4: any[] = [undefined, 1, false];
let a5: (number | string | boolean | undefined | null)[] = [
  undefined,
  1,
  false,
];
type x1 = typeof a4;
// 当在ts中任意一个赋值表达式成立则存在包含关系
// 如何判定数组类型的包含关系：
// type X=T[]; type Y=U[] 协同变化 协变
// 如果T包含U 则x包含y

// 如何定义数组类型
// 如何获取数组成员的类型(number的妙用)
// 如何判断两个数组的包含关系
// 联合类型 联合（仅为）联合底部类型是无效的
// 如何定义元组类型以及添加越界元素的类型的约束
const a8 = [1, false];
type A8 = (typeof a8)[number]; //联合

// 总结：
// 1.基本类型：number、string、boolean、null、undefined
// 2.顶部类型：any、unknown
// 3.底部类型：any、never、undefined、null
// 4.type关键字：定义新类型、定义类型别名
// 5.联合类型：并集
// 6.交叉类型：交集
// 7.extends关键字：判断类型的兼容关系（本质上就是集合的包含关系）
// 8.分布式条件类型

/**
 * 重点：
 * 1.如何定义数组类型
 * 2.如何获取数组类型获取成员类型（number的妙用）
 * 3.如何判断两个数组类型的包含关系
 * 4.联合类型联合（仅为）底部类型是无效的
 * 5.如何定义元组类型以及添加越界元素的类型的约束
 */

// A & b = c  c extends A且c extends B

// 联合类型（并集）求公共父类型
// 交叉类型（交集）求公共子类型
// A & B = C
// C extends A 且 C extends B
// A ｜ B = C
// A extends C 且 B extends C
