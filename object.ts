// 纯对象类型
// interface  关键字定义对象类型
interface Person {
  name: string;
  age: number;
  gender?: boolean;
}

let tom: Person = {
  name: "Tom",
  age: 25,
  gender: true,
};
type tomname = (typeof tom)["name"];

// keyof 关键字的作用是将对象类型的索引key计算成一个联合类型
// keyof tom =》"name"等
type tomAll = (typeof tom)[keyof typeof tom];

// type KA = typeof any;

const t1 = { a: 1, b: false, c: [] }; //这里就可以是in，是类型确定好的
type T1 = keyof typeof t1;
// 如果对象没有写类型,是可以推导的
type T2 = (typeof t1)[keyof typeof t1];
// type T3 = {a:number,b:number,c:number}
// 类型转换
type T3 = {
  [key in T1]: (typeof t1)[keyof typeof t1];
};

// 如何排除联合类型中的某个成员
type T4 = {
  [key in keyof typeof t1]: key extends "a" | "b" ? number : (typeof t1)[key];
};
type T5 = {
  [key in Exclude<T1, "c">]: (typeof t1)[key];
};
type T6 = {
  readonly a: number; //readonly 只读属性
  b: string;
  [key: keyof any]: number | string; //这里不能in in搞成了死循环不能枚举完全 主动有穷in 被动无穷：
  // [key: keyof any]: number; 这个是会报错的 number是a的联合，不是b的联合
  // 一旦确定了任意属性，那么确定属性和可选属性的类型必须是他类型的子集 可选类型是确定类型的爹
};
let t6: T6 = {
  a: 1,
  b: "哈哈哈",
};
t6.a;

type T7 = {
  a: null;
  b: undefined;
  c: boolean;
  d: string;
  e: number;
};
type T8 = {
  readonly [key in keyof T7]: T7[key];
};
// 可选
type T9 = {
  [key in keyof T7]?: T7[key];
};
type T10 = {
  readonly [key in keyof T7]?: T7[key];
};
type T11 = {
  -readonly [key in keyof T7]-?: T7[key];
};

type T12 = {};
type T13 = {
  category: "手机";
};
type T14 = {
  category: "手机";
  brand: "华为";
};
let t12: T12;
let t13: T13;
let t14: T14;
export default {};
