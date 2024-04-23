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
