// // here is the way to create own synchronous function rather then using user defined

// const fs = require("fs");

// //own synchronous function

// function readFile() {
//     console.log("inside read file");

//   return new Promise(function (resolve) {
//     console.log("inside promise");
//     fs.readFile("a.txt", "utf-8", function (err, data) {
//         console.log("before resolve");
//       resolve(data);
//     });
//   });
// }

//  // callback function to call
// function onDone(data) {
//   console.log(data);
// }

// readFile().then(onDone)
// console.log("hello");

let p = new Promise(function (resolve) {
  resolve("hi there");
});

p.then(function () {
  {
    console.log(p);
  }
});


console.log("hello");