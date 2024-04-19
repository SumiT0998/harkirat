

console.log("hi there");
setTimeout(function () {
  console.log("inside async function");
}, 5000);

setTimeout(function () {
    console.log("inside async  2 function");
  }, 2000);

let a = 0;
for (let index = 0; index < 100; index++) {
  a += index;
}
console.log(a);
