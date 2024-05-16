const mongoose = require("mongoose");
const { title } = require("process");

mongoose.connect(
  "mongodb+srv://admin:8126541626@testcase1.kcntqj2.mongodb.net/website"
);

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Userschema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourse: [{ type: mongoose.Schema.Types.ObjectId, ref: "courses" }],
});
const Courseschema = new mongoose.Schema({
  title: String,
  description: String,
  imagelink: String,
  price: Number,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", Userschema);
const Course = mongoose.model("Course", Courseschema);

module.exports = {
  Admin,
  User,
  Course,
};
