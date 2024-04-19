// here is the way to create own synchronous function rather then using user defined

const { log } = require("console");
const { promises } = require("dns");
const fs = require("fs");

//own synchronous function

function readFile() {
    console.log("inside read file");

  return new Promise(function (resolve) {
    console.log("inside promise");
    fs.readFile("a.txt", "utf-8", function (err, data) {
        console.log("before resolve");
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

readFile().then(onDone)
console.log("hello");