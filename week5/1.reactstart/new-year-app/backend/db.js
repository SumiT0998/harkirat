const mongoose = require("mongoose");
const { string, boolean } = require("zod");

mongoose.connect(
  "mongodb+srv://admin:8126541626@testcase1.kcntqj2.mongodb.net/todo"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = todo;
