const { log } = require("console");

function asyncfn() {
  let p = new Promise(function (resolve) {
    resolve("inside resolve");
  });
  return p;
}

async function main() {
  let value = await asyncfn(); // await should be always in async function
  console.log(value);
}

main();
