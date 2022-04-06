const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
                res
                  .cookie(
                    "usertoken",
                    jwt.sign(
                      {
                        id: userRecord._id,
                        userName: userRecord.userName,
                        email: userRecord.email,
                        firstName: userRecord.firstName,
                        lastName: userRecord.lastName,
                      },
                      process.env.JWT_SECRET
                    ),
                    {
                      httpOnly: true,
                      // expires: new Date(Date.now() + 9000000),
                    }
                  )
                  .json({
                    message: "Successfully Logged In",
                    userId: userRecord._id,
                  });
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
    re.clearCookie("usertoken");
    res.json({
      message: "You have logged out",
    });
  },

  // for security purposes we are going to use a different way to get users

  // getOneUser: (req, res) => {
  //   User.findOne({ _id: req.params.id })
  //     .then((oneUser) => {
  //       res.json(oneUser);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },

  getLoggedInUser: (req, res) => {
    const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
    User.findOne({ _id: decodedJwt.payload.id })
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  },

  findAllUsers: (req, res) => {
    User.find().then((allUsers) => {
      console.log("Find All Users failed");
      res.json({ message: "Something went Wrong in findAll", error: err });
    });
  },
};
