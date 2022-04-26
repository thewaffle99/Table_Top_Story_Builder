const NPC = require("../models/npc.model");
const World = require("../models/world.model");
const Place = require("../models/place.model");

module.exports.createNPC = (request, response) => {
  NPC.create(request.body)

    .then((NPC) => {
      World.findOneAndUpdate(
        { _id: request.body.associatedWorld },
        {
          $addToSet: { NPCs: NPC._id },
        },
        {
          new: true,
          useFindAndModify: true,
        }
      )
        .populate("NPCs", "name _id")
        .then((worldToUpdate) => {
          console.log(worldToUpdate);
          response.json(NPC);
          // Place.findOneAndUpdate(
          //   { _id: request.body.associatedPlaces },
          //   {
          //     $addToSet: { NPCs: NPC_id },
          //   },
          //   {
          //     new: true,
          //     userFindAndModify: true,
          //   }
          // )
          //   .populate("NPCs", "name _id")
          //   .then((placeToUpdate) => {
          //     console.log(placeToUpdate);
          //   });
        });
    })

    .catch((err) => {
      console.log(err);
      response.status(400).json(err);
    });
};
module.exports.getAllNPCs = (request, response) => {
  NPC.find({})
    .collation({ locale: "en", strength: 2 })
    .sort({ name: 1 })
    .then((npc) => {
      console.log(npc);
      response.json(npc);
    })
    .catch((err) => {
      console.log(err);
      response(err);
    });
};
module.exports.getNPC = (request, response) => {
  NPC.findOne({ _id: request.params.id })
    .then((npc) => response.json(npc))
    .catch((err) => response.json(err));
};
module.exports.updateNPC = (request, response) => {
  NPC.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedNPC) => response.json(updatedNPC))
    .catch((err) => response.status(400).json(err));
};
module.exports.deleteNPC = (request, response) => {
  NPC.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
