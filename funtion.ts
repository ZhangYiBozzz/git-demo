function sum(x: number, y: number): number {
  return x + y;
}
sum(1, 2);

let mySum: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

function tom(Name: string, age?: number) {
  if (age) {
    return Name + age;
  } else {
    return Name;
  }
}
let mama = tom("jack", 1);

// 函数的类型
// 类型和函数的逻辑是混合在一起的
function summ(a: number, b: number): number {
  return a + b;
}
function echo(a: string, b: string): void {
  console.log(a + b);
}
// 分离写法
type SUM2 = (x: number, y: number) => number;
const sum2: SUM2 = (a, b) => a + b;
const sum3: (x: number, y: number) => number = (a, b) => a + b;

const echo1 = (a: string, b: string): void => {
  console.log(a + b);
};
const echo2: (a: string, b: string) => void = (a, b) => {
  console.log(a + b);
};
// 可选参数 必须是最后一个，要不然影响顺序
function print(a: number, b?: string, c?: number): void {}
// 默认参数
function print2(a: number, b: string = "", c?: number) {}
// 剩余参数
// 将所有参数收集数组 并且给一个数字数组类型 =>函数有若干个参数 并且参数为number
function print3(...rest: number[]) {}
function print4(a: string, ...rest: number[]) {}
// 函数的重载(overload)
// 重载含义 在函数参数类型或个数不同的情况下 同一函数具备不同的功能
// attr(el,attrName)
// attr(div,"id","abc")

const app = document.getElementById("app");
function attr(el: HTMLElement, attrName: keyof HTMLElement): string | null;
function attr(
  el: HTMLElement,
  attrName: keyof HTMLElement,
  attrValue: string
): undefined;
function attr(
  el: HTMLElement,
  attrName: keyof HTMLElement,
  attrValue?: string
): string | null | undefined {
  // if (!attrValue) {
  //   return el.getAttribute(attrName);
  // }
  // el.setAttribute(attrName, attrValue);
  if (typeof attrValue == "undefined") {
    return el.getAttribute(attrName);
  } else {
    el.setAttribute(attrName, attrValue);
  }
}

attr(app as HTMLElement, "id");
attr(app as HTMLElement, "id", "abc");
attr(app!, "id");
// 传参有两种情况
// 返回值有三种情况 6钟情况

// 定义一个函数，具备一个参数 参数类型可以为数字也可以为字符串 返回传入的数据]
function bar(val: string): string;
function bar(val: number): number;
function bar(val: string | number): string | number {
  return val;
}
bar(1).toFixed;

// 函数的兼容性 (包容关系)
app?.addEventListener("click", (e) => {
  console.log(e);
});

// void 表示没有主动使用return关键字
// undefined 使用了return返回时undefined

function fn(a: () => void) {}
// 不考虑参数类型的情况下，函数的类型的兼容性👉返回值的兼容关系决定(协变)
let f1: () => void = () => {};
f1 = () => {
  console.log(123);
  return 1;
};
// 不考虑返回值的情况下，函数的类型的兼容性与参数的兼容相反(协变)
let f5!: (a: number, b: number, c: number) => {};
let f6!: (a: number, b: number) => {};
f5 = f6;

app!.addEventListener("click", () => {
  return 123456;
});

app!.addEventListener("click", (e) => {
  console.log(a, e);
  return 123456;
});

// 参数逆变 返回值协变

// 泛型
// 类型参数
function summary(a: number, b: number): number {
  return a + b;
}
summary(2, 5);

// 泛型类型
type QT<T> = {
  name: "覃涛";
  age: number;
  gender: boolean;
  gf: T;
};
let zyb: QT<{
  a: string;
  b: string;
}> = {
  name: "覃涛",
  age: 18,
  gender: true,
  gf: {
    a: "小美",
    b: "小丽",
  },
};

type RES<T> = {
  code: number;
  msg: string;
  data: T;
};
// 泛型接口
// interface Response<T> {
//   code: number;
//   msg: string;
//   data: T;
// }

// 泛型默认值
type RES1<T = null> = {
  code: number;
  msg: string;
  data: T;
};

let res1: RES1<number> = {
  code: 200,
  msg: "请求成功",
  data: 111,
};
// 泛型约束 extends 谁是谁的子集
type RES2<
  U extends 200 | 201 | 301 | 304 | 400 | 401 | 500,
  T extends any[] = number[]
> = {
  code: U;
  msg: string;
  data: T;
};
let res2: RES2<200> = {
  code: 200,
  msg: "请求成功",
  data: [1, 11, 1, 1, 3],
};
// 泛型函数
// 定义一个函数foo 具备一个参数 参数类型为任意类型 返回值和参数类型相同
function foo<T>(value: T): T {
  return value;
}
// 泛型函数中所有的相同的泛型如果在任意一个的位置上确定了具体类型 那么所有位置类型全部确定
let zhang1 = foo("哈哈哈哈");
let zhang2 = foo(42);
let zhang3 = foo(true);
// 定义一个函数 getValue 第一个参数为纯对象,第二个参数为第一个参数任意的key，返回值为对的key的值
function getValue<T extends {}, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
getValue({ a: 1, b: 2, c: 3 } as const, "a");
getValue({ a: 1, b: 2, c: 3 } as const, "b");
getValue({ a: 1, b: 2, c: 3 } as const, "c");

// bar1("a=1&b=2");

type zhang<T> = {
  [P in keyof T]?: T[P];
};

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "好好哈",
  description: "覃总",
};

// {
//   title?: string | undefined;
//   description?: string | undefined;
// }

// const todo2 = updateTodo(todo1, {
//   description: "Learn TypeScript Enum",
// });
