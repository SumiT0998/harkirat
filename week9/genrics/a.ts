function identity<T>(arg: T) {
  return arg;
}

let output1 = identity<number>(2);
let output2 = identity<string>("sumit");

console.log(output2.toUpperCase());
