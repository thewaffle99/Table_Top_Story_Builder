const World = require("../models/world.model");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

module.exports.createWorld = (req, res) => {
  const newWorldObject = new World(req.body);

  newWorldObject.createdBy = req.jwtpayload.id;

  // or you can use the below code

  // const decodedJWT = jwt.decode(req.cookies.usertoken, {
  //   complete: true,
  // });
  // newWorldObject.createdBy = decodedJWT.payload.id;

  newWorldObject
    .save(req.body)
    .then((world) => {
      res.json(world);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

module.exports.getAllWorlds = (request, response) => {
  World.find({})
    .populate("createdBy", "userName firstName lastName email")
    .collation({ locale: "en", strength: 2 })
    .sort({ name: 1 })
    .then((world) => {
      console.log(world);
      response.json(world);
    })
    .catch((err) => {
      console.log(err);
      response(err);
    });
};

module.exports.getWorld = (request, response) => {
  World.findOne({ _id: request.params.id })
    .populate("places", "name _id")
    .populate("NPCs", "name _id")
    .then((world) => response.json(world))
    .catch((err) => response.json(err));
};

module.exports.updateWorld = (request, response) => {
  World.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedWorld) => response.json(updatedWorld))
    .catch((err) => response.status(400).json(err));
};

module.exports.deleteWorld = (request, response) => {
  World.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};

module.exports.findAllWorldsByUser = (req, res) => {
  if (req.jwtpayload !== req.params.username) {
    User.findOne({ userName: req.params.userName })
      .then((userNotLoggedIn) => {
        World.find({ createdBy: userNotLoggedIn._id })
          .then((allWorldsFromUser) => {
            console.log(allWorldsFromUser);
            res.json(allWorldsFromUser);
          })
          .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  } else {
    World.find({ createdBy: req.jwtpayload.id })
      .then((allWorldsFromLoggedInUser) => {
        console.log(allWorldsFromLoggedInUser);
        res.json(allWorldsFromLoggedInUser);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
};
