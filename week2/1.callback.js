// function square(a) {
//   return a * a;
// }

// function cube(a) {
//   return a * a * a;
// }

// function sumofsomething(a, b, fn) {
//   const res = fn(a) + fn(b);
//   console.log(res);
// }

// sumofsomething(1, 2, cube); 

const fs = require("fs");

let a = 1;
console.log(a);

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log("data read from filr=>");

  console.log(data);
});

let ans = 0;

for (let index = 0; index < 100; index++) {
  ans += index;
}
console.log(ans);
