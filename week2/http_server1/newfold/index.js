const express = require("express"); //node library for creatinf server
const bodyParser = require("body-parser"); // Middlewares
const app = express();  //express is high library that gives a high level constructs to create http server
const port = process.env.PORT || 3000;

//fs-> read to system and write to system
///  REST api and http

app.use(express.json());

// app.get("/", function (req, res) {
//   res.send("<b>hi there testing api</b>");
// });


app.post("/conversations", function (req, res) {
  const message = req.body.message;
  console.log(message);
  res.json({
    output: "2+2=4",
  });
});

app.listen(port);
