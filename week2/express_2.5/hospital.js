const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

// const user = {
//   name: "amit",
//   kidneys: [
//     {
//       healthy: false,
//     },
//   ],
// };

const users = [{ name: "ajay", kidneys: [{ healthy: false }] }];

//////////////////////get////////////////////////////////////////
app.get("/", (req, res) => {
  //in get we send data with query parameters
  const ajaykidney = users[0].kidneys;
  const noofkidney = ajaykidney.length;
  let noofhealthykidney = 0;
  for (let i = 0; i < ajaykidney.length; i++) {
    if (ajaykidney[i].healthy) {
      noofhealthykidney = noofhealthykidney + 1;
    }
  }
  const numberofunhealthykidney = noofkidney - noofhealthykidney;

  res.json({ noofkidney, noofhealthykidney, numberofunhealthykidney });
});
//////////////////////////////////////POST///////////////////////////////////////////

app.post("/", (req, res) => {
  const ishealthy = req.body.ishealthy;
  users[0].kidneys.push({
    healthy: ishealthy,
  });
  res.json({ msg: "done!" });
});

///////////////////////////////////////////put///////////////////////////////////////
app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }

  res.json({
    msg: "health 100%",
  });
});
////////////////////////////////////////delete///////////////////////////////
app.delete("/", (req, res) => {
  const newkidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newkidneys.push({ healthy: true });
    }
  }
  users[0].kidneys = newkidneys;
  res.json({
    msg: "delete operation done",
  });
});

app.listen(port);
