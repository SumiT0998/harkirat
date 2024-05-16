const { json } = require("stream/consumers");
const { Admin } = require("../index");

function Adminfuncmidleware(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  Admin.findOne({
    username: username,
    password: password,
  }).then(function (value) {
    if (value) {
      next();
    } else {
      res.status(403),
        json({
          msg: "admin doesnt exist",
        });
    }
  });
}

module.exports = Adminfuncmidleware;
