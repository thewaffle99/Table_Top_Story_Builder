const World = require("../models/world.model");

module.exports.createWorld = (request, response) => {
  World.create(request.body)
    .then((world) => {
      response.json(world);
    })
    .catch((err) => {
      console.log(err);
      response.status(400).json(err);
    });
};
module.exports.getAllWorlds = (request, response) => {
  World.find({})
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
