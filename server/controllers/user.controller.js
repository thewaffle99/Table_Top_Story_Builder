const User = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports = {
  register: (req, res) => {
    console.log(req.body);

    const user = new User(req.body);

    User.findOne({ email: user.email })
      .then((uniqueEmailCheck) => {
        if (uniqueEmailCheck === null) {
          user
            .save()
            .then((newUser) => {
              console.log("Successfully registered!");
              res.json({
                successMessage: "Thank you for registering!",
                user: newUser,
              });
            })
            .catch((err) => {
              console.log("Register NOT Successful");
              res.status(400).json(err);
            });
        } else {
          res.status(400).json({ message: "email already taken" });
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  login: (req, res) => {
    User.findOne({ email: req.body.email })
      .then((userRecord) => {
        if (userRecord === null) {
          res.status(400).json({ message: "Invalid login" });
        } else {
          bcrypt
            .compare(req.body.password, userRecord.password)
            .then((isPasswordValid) => {
              if (isPasswordValid) {
                console.log("Password is Valid");
                res.json({ message: "You have successfully Logged in" });
              } else {
                res.status(400).json({
                  message: "Login or email invalid",
                });
              }
            })
            .catch((err) => {
              console.log(err);
              res.status(400).json({ message: "Login or email invalid" });
            });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ message: "Login or email invalid" });
      });
  },
  logout: (req, res) => {
    console.log("Loggin out");
    res.json({
      message: "You have logged out",
    });
  },

  getOneUser: (req, res) => {
    User.findOne({ _id: req.params.id })
      .then((oneUser) => {
        res.json(oneUser);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
