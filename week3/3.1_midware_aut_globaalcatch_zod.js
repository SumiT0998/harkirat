//port //callback queue //js thread

//1. authentication 2. input validation

////////////////middleware///////////////
// bewfore we proceed lets add some  constraints  1,er need tos end kidneyId  as a query params which should be number
//2.   should send username and password in header

const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const kidneyID = req.query.kidneyID;
  const username = req.headers.username; ///making query in header
  const password = req.headers.password;

  if (username != "sumit" || password != "pass") {
    res.status(400).json({ msg: "incorrect credentials" });
    return;
  }

  if (kidneyID != 1 && kidneyID != 2) {
    res.json({ msg: "something wrong with input" });
    return;
  }

  res.json({ msg: "kidney is fine" });
});

app.listen(port);
