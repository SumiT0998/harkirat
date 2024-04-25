const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

// function sum(n) {
//   let ans = 0;
//   for (let index = 1; index <= n; index++) {
//     ans += index;
//   }
//   return ans;
// }

// app.get("/", (req, res) => {
//   const n = req.query.n;       // query using  /?n=10    
//   const ans = sum(n);
//   res.send("the sum of number is=>" + ans);
// });



app.listen(port);
