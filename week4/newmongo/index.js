const express = require("express");
const bodyparser = require("body-parser");

const app = express();
const adminroutes = require("./routes/admin");
const userroutes = require("./routes/user");

app.use(bodyparser.json());
app.use("/admin", adminroutes); //
app.use("/user", userroutes); //

const port = 3000;

app.listen(port);
