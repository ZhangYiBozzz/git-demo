// infer 推导
// 类似于js的结构赋值
// infor 类型推断(针对的是类型)
// let arr = [1, false];
// let [a, b] = arr;
type T3<A extends any[]> = A extends [infer B, ...unknown[]] ? B : never;
type T2 = T3<[number, boolean, string]>;
type T4<A extends any[]> = A extends [any, infer B, ...unknown[]] ? B : never;
type T5 = T4<[number, boolean, string]>;
type T6<A extends any[]> = A extends [infer B, any, infer C, ...any]
  ? [B, C]
  : never;
type T7 = T6<[number, boolean, string]>;
type T8 = T6<[number, boolean]>;
type T9<A extends any[]> = A extends [...any[], infer B] ? B : never;
type T10 = T9<[number, boolean, string]>;

// 请你定义一个工具类型Pop可以删除数组类型的最后一个类型 并返回删除后的数组类型
type Pop<T extends any[]> = T extends [...infer Rest, any] ? Rest : T;

// 使用示例
type arr = [1, 2, 3, 4];
type ResultArray = Pop<arr>;
// 定义一个工具类型shift
type Shift<T extends any[]> = T extends [any, ...infer Rest] ? Rest : T;

// 使用示例
type arr2 = [];
type ResultArray2 = Shift<arr2>;
// 字符串模式匹配 类型推导
// 定义一个类型StartsWith工具类型  a.StartsWith("abc") 返回true 看是不是这个开头
type StartsWith<A extends string, B extends string> = A extends `${B}${string}`
  ? true
  : false;
type T13 = StartsWith<"abc", "a">;

type T16<A extends string> = A extends `${infer B}_${infer C}` ? [B, C] : A;
type T15 = T16<"ab_cdef">; //["abc","def"]
// 函数
// 请定义一个GetReturnType工具类型 获取任意函数的返回值类型
type GetReturnType<F extends (...res: any[]) => any> = F extends (
  ...res: any[]
) => infer R
  ? R
  : never;
type T18 = GetReturnType<() => string>;
// 获取第一个参数类型
// type GetReturnType1<F extends (...rest: any[]) => any> = F extends (
//   ...rest: any[infer A,...any[]]
// ) => any
//   ? A
//   : never;

// 映射类型
type ToReadOnly<T extends {}> = {
  readonly [key in keyof T]: T[key];
};
// 映射类型加深
// Filter 筛选属性对应的值的类型 满足某种条件
// in操作符中 如果你对key有额外的条件限制 则需要使用as跟条件属性
type Filter<A extends {}, B> = {
  [key in keyof A as A[key] extends B ? key : never]: A[key];
};
type T20 = Filter<{ a: number; n: boolean; c: number }, number | boolean>;

// type RepeatKey
// RepeatKey<{ a: number; b: boolean; c: number[] }>
// {aa: number, bb:boolean,cc: number[]}
type RepeatKey<T> = {
  [K in keyof T as K extends string ? `${K}${K}` : never]: T[K];
};
type T21 = RepeatKey<{ a: number; b: boolean; c: number[] }>;
