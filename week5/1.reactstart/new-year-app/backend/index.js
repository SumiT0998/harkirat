const express = require("express");
const app = express();
const { createtodo, updatetodo } = require("./types");
const todo = require("./db");
const port = 3000;

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createpayload = req.body;
  const parsedpayload = createtodo.safeParse(createpayload);
  if (!parsedpayload.success) {
    res.status(411).json({ msg: "wrong inputs" });
    return;
  }
  await todo.create({
    title: createpayload.title,
    description: createpayload.description,
    completed: false,
  });
  res.json({ msg: "todo created" });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatepayload = req.body;
  const parsedyload = updatetodo.safeParse(updatepayload);
  if (!parsedyload.success) {
    res.status(411).json({ msg: "wrong inputs" });
    return;
  }

  await todo.update({ _id: req.body.id }, { completed: true });
});

app.listen(port);
