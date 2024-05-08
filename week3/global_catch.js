const express = require("express");

const app = express();

app.use(express.json());

app.post("/health", (req, res) => {
    //kidney=[1,2,3]
  const kidney = req.body.kidney;
  const kidneylength = kidney.length;
  res.send("you have" + kidneylength + "kidneys");
});


///////////global catch
app.use((err, req, res, next) => {
  res.json({
    msg: "something wrong with server",
  });
});

app.listen(3000);



// zod schema validation