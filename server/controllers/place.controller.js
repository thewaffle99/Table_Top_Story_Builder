const Place = require("../models/place.model");
const World = require("../models/world.model");

module.exports.createPlace = (request, response) => {
  Place.create(request.body)

    .then((place) => {
      World.findOneAndUpdate(
        { _id: request.body.associatedWorld },
        {
          $addToSet: { places: place._id },
        },
        {
          new: true,
          useFindAndModify: true,
        }
      )
        .populate("places", "name _id")
        .then((worldToUpdate) => {
          console.log(worldToUpdate);
          response.json(place);
        });
    })

    .catch((err) => {
      console.log(err);
      response.status(400).json(err);
    });
};
module.exports.getAllPlaces = (request, response) => {
  Place.find({})
    .collation({ locale: "en", strength: 2 })
    .sort({ name: 1 })
    .then((place) => {
      console.log(place);
      response.json(place);
    })
    .catch((err) => {
      console.log(err);
      response(err);
    });
};
module.exports.getPlace = (request, response) => {
  Place.findOne({ _id: request.params.id })
    .populate("associatedWorld", "name _id")
    .then((place) => response.json(Place))
    .catch((err) => response.json(err));
};
module.exports.updatePlace = (request, response) => {
  Place.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPlace) => response.json(updatedPlace))
    .catch((err) => response.status(400).json(err));
};
module.exports.deletePlace = (request, response) => {
  Place.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
