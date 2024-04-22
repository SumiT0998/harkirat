setTimeout(() => {
  console.log("inside 1st loop");
  setTimeout(() => {
    console.log("inside 2nd timeout");
  }, 2000);
}, 1000);

console.log("hi im testing timmeout");
