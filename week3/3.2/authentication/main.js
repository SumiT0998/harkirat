const express = require("express");
const jwt = require("jsonwebtoken");
const jwtpassword = "12345678";
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect();

const Users = [
  { username: "it@gmail.com", password: "ragamaga", name: "iti" },
  { username: "sumiit@gmail.com", password: "sumit12345", name: "sumit" }, //////////////////////////// in memory database
  { username: "amit@gmail.com", password: "amit00000", name: "amit" },
];

function userexist(username, password) {
  let userexist = false;

  for (let i = 0; i < Users.length; i++) {
    if (Users[i].username == username && Users[i].password == password) {
      return true;
    }
  }

  return userexist;
}

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!userexist(username, password)) {
    return res.status(403).json({
      msg: "not a valid user",
    });
  }

  var token = jwt.sign({ username: username }, jwtpassword);
  return res.json({ token });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decode = jwt.verify(token, jwtpassword);
    const username = decode.username;
    res.json({
      users: Users,
    });
  } catch (err) {
    return res.status(403).json({
      msg: "invalid token",
    });
  }
});

app.listen(3000);
