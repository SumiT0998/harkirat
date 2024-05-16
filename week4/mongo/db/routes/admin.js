const express = require("express");
const adminMidleware = require("../index");
const { Admin } = require("../index");

const router = express.Router();

//post admin/signup

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.bosy.username;
  //check if user already exist

  await Admin.create({
    username: username,
    password: password,
  });
  res.json("admin created sucessfully");
});

module.exports = router;
