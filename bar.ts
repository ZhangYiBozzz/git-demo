type A = number;
type B = 1;
type E = 1;
// extends 可以判断两个类型的兼容关系 A不是B的子集 false
type C = A extends B ? true : false;
type D = B extends A ? true : false;
// 使用类型断言进行比较
type F = B extends E ? (E extends B ? true : false) : false;
// CDf都是类型
// 分布式条件类型
export default {};
