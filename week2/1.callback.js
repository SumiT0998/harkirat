function square(a) {
  return a * a;
}

function cube(a) {
  return a * a * a;
}

function sumofsomething(a, b, fn) {
  const res = fn(a) + fn(b);
  console.log(res);
}

sumofsomething(1, 2, cube);
