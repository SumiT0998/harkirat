const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (res, req) => {
  req.body({});
});

app.put("/", (res, req) => {});

app.post("/", (res, req) => {});

app.delete("/", (res, req) => {});

app.listen(port);
