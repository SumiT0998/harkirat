const jwt = require("jsonwebtoken");

const value = {
  name: "sumit",
  account: 8126541626,
};

const token = jwt.sign(value, "secret");

console.log(token);

const vartoken = jwt.verify(   //wrap it inside try catch to handle error
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VtaXQiLCJhY2NvdW50Ijo4MTI2NTQxNjI2LCJpYXQiOjE3MTUyMjgyNzV9.cPWBgtuTLKIR7dhzV6LTVwKXutJ9ljfo_izan2x3FHI",
  "secret"
);
console.log(vartoken);
