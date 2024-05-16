const { Router } = require("express");
const usermiddleware = require("../middleware/usermiddleware");
const { User, Course, purchasedCourse } = require("../db/index");

const router = Router();

//post admin/signup

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  //check if user already exist

  await User.create({
    username: username,
    password: password,
  });
  res.json("user created sucessfully");
});

router.get("/courses", usermiddleware, async (req, res) => {
  //implementing isting all courses
  const response = await Course.find({});
  res.json({
    Courses: response,
  });
});

router.post("/courses/:courseId", usermiddleware, async (req, res) => {
  //course purchase with individual id
  const courseId = req.params.courseId;
  const username = req.headers.username;

  try {
    await User.updateOne(
      {
        username: username,
      },
      { $push: { purchasedCourse: courseId } }
    );
  } catch (e) {
    console.log(e);
  }

  res.json({ message: "done!" });
});

router.get("/purchasedcourse", usermiddleware, async (req, res) => {
  const user = await User.findOne({
    username: req.headers.username,
  });
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourse,
    },
  });
  res.json({ courses: courses });
});

module.exports = router;
