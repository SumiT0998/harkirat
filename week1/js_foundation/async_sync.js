function findsum(n) {
  let sum = 0;
  for (let index = 0; index < n; index++) {
    sum += index;
  }
  return sum;
}

function findtil100() {
  console.log(findsum(100));
}

setTimeout(findtil100, 1000);

// findtil100();
console.log("hello");