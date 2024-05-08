const express = require("express");
const port = 3000;
const app = express();

app.use(express.json()); //rate limiting  // midleware

let numberofreq = 0;
function calculateSum(req, res, next) {
  numberofreq++;
  console.log(numberofreq);
  next();
}

function usernamevalidator(username, password) {
  if (!(username == "sumit" && password == "pass")) {
    return false;
  }
  return true;
}
function kidneyvalidator(kidneyID) {
  if (kidneyID != 1 && kidneyID != 2) {
    return false;
  }
  return true;
}

app.listen(port);
