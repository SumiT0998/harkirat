const { log } = require("console");
const { resolve } = require("path");

function promisified(duration) {
  const p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, duration);
  });
  return p;
}

const ans = promisified(1000);  //call back

ans.then(function () {
  console.log("timeout done");
});


//when to use async 
//1.do a network call
//2 .sleep/wait for something
//3. read file
// 4. database call