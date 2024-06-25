// function greet(name: string) {
//   console.log("hello " + name);
// }

// greet("sumit");

// function sum(a: number, b: number) {
//   return a + b;
// }

// console.log(sum(1,2));

// function islegal(age: number) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(islegal(2));

/////////function call

// function callbackafter1s(fn: () => void) {
//   setTimeout(fn, 1000);
// }

// callbackafter1s(function () {
//   console.log("hi there");
// });

enum direction {
  up="up",
  down="down",
  right="right",
  left="left",
}

function Movement(keypressed: direction) {
  if (keypressed == direction.up) {
    console.log("going up");
  }
}

Movement(direction.up);
console.log(direction.right);

