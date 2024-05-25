const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/usermiddleware");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { User, Course } = require("../db/index");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username: username,
    password: password,
  });
  res.json({ msg: "user created sucessfully !" });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(JWT_SECRET);

  const user = await User.find({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } else {
    res.status(411).json({
      message: "Incorrect email and pass",
    });
  }
});

router.get("/courses", userMiddleware, async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    Course: response,
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  console.log(username);
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
