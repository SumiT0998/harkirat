const express = require("express");
const z = require("zod");

const app = express();
app.use(express.json());

function validateinput(obj) {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const response = schema.safeParse(obj);
  console.log(response);
}

app.post("/login", (req, res) => {
  const response = validateinput(req.body);

  if (!response.sucess) {
    res.json({ msg: "invalid inputs!" });
    return;
  }
});

app.listen(3000);
