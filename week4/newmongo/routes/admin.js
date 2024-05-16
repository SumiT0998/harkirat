const { Router } = require("express");
const adminMidleware = require("../middleware/adminmiddleware");
const { Admin, Course } = require("../db/index");

const router = Router();

//post admin/signup

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  //check if user already exist

  await Admin.create({
    username: username,
    password: password,
  });
  res.json("admin created sucessfully");
});

router.post("/courses", adminMidleware, async (req, res) => {
  //add course in admin panel
  const title = req.body.title;
  const description = req.body.description;
  const imagelink = req.body.imagelink;
  const price = req.body.price;

  const newCourse = await Course.create({
    title,
    description,
    imagelink,
    price,
  });
  console.log(newCourse);

  res.json({ msg: "course added sucessfullly", courseId: newCourse._id });
});

router.get("/courses", adminMidleware, async (req, res) => {
  //fetch all added course from courses
  const allcourses = await Course.find({
    // title,
    // description,
    // imagelink,
    // price
  });
  res.json({ courses: allcourses });
  console.log(allcourses);
});

module.exports = router;
