function sumofsomething(a, b, fn) {
  const val1 = fn(a);
  const val2 = fn(b);
  return val1 + val2;
}

function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}

const res = sumofsomething(1, 2, square);
console.log(res);
