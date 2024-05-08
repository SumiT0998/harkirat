const mongoose = require("mongoose");
const { number } = require("zod");

mongoose.connect(
  "mongodb+srv://sumitbisht36:36sumitbisht@cluster1.mxstryu.mongodb.net/userapp"
);

const User = mongoose.model("Users", {
  id: Number,
  name: String,
  email: String,
  password: String,
});

const user = new User(
  { id: 1, name: "sumit", email: "sumit@gmail.com", password: "11234567" },
  {
    id: 2,
    name: "sumsdit",
    email: "sumit@sdgmail.com",
    password: "11234ss567",
  },
  {
    id: 3,
    name: "sumsdit",
    email: "sumitsds@gmail.com",
    password: "112sd34567",
  }
);
user.save();
