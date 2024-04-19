const { log } = require("console");
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});
 
console.log("hello world");

let a=0;
for (let index = 0; index < 10000000; index++) {
    a++;
}
console.log(a);

console.log("hello");