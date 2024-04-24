// 当你和ts的类型出现分歧的时候，并且更加坚定自己的主张的时候
const div = document.getElementById("mydiv") as HTMLDivElement;
// DOM和BOM的内置类型，就是对应的构造函数名称
const a = <HTMLAnchorElement>document.getElementById("a");
// 类型断言的条件：断言的类型A和被断言的类型B需要具备包含关系(a包含b/b包含a)

let d1 = { a: 1, b: false };
(d1 as { a: number; b: boolean; c: string }).c = "kfc";
console.log(d1 as { a: number; b: boolean; c: string });

let d2 = { a: 1, b: false };
(d2 as any).c = "kfc";
console.log(d2 as any);

let d3!: number | string | 123[];
(d3 as number[]).push(123);

// 非空断言！将联合类型的空值null/undefined去掉
type T1 = { value: number | undefined | null };
let t1: T1 = {} as T1;
function mmm(arg: T1) {
  arg.value = 123;
}
mmm(t1);
t1.value!.toFixed(2);

// 断言的作用是让类型更加清晰且避免类型错误同时要让代码运行的时候不出错

// 在保证运行时不出错的情况下通过断言取解决代码编写时候的类型误差
// 断言不能违背事实
const el = document.getElementById("app");
el!.innerHTML = ""; //非空断言是el不是空找的到的

// 确定赋值断言
let d5!: number;
function f() {
  d5 = 123456;
}
f();
d5.toFixed;
// 常量断言 缩小类型的范围
let d6 = {
  a: 1,
  b: false,
  c: 3,
} as const;

// 类型断言 非空断言 确定赋值断言 常量断言
