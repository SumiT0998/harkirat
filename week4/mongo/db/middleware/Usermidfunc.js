const { json } = require("stream/consumers");
const { User } = require("../index");

function Usermidfunc(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({
    username: username,
    password: password,
  }).then(function (value) {
    if (value) {
      next();
    } else {
      res.status(403),
        json({
          msg: "user doesnt exist",
        });
    }
  });
}

module.exports = Usermidfunc;
