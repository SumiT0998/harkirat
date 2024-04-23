const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("click for new text");
});

app.listen(port);
