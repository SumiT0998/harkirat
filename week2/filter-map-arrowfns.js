const input = [1, 2, 3, 4, 5];

function trnsfrm(i) {
  return i * 2;
}

const ans = input.map(trnsfrm);

console.log(ans);

//////filter

const answer = input.filter(function (n) {
  if (n % 2 == 0) {
    return true;
  }
  return false;
});

console.log(answer);
