const mongoose = require("mongoose");
const PlaceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "What is this place called?"],
    },
    enemies: {
      type: String,
    },
    allies: {
      type: String,
    },
    uniqueFeatures: {
      type: String,
    },
    suprisedToSeeWho: {
      type: String,
    },
    suprisedToSeeWhat: {
      type: String,
    },
    prejudices: {
      type: String,
    },
    placeNotes: {
      type: String,
    },
    photo: {
      type: String,
      default: "",
    },
    associatedWorld: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "World",
      required: [true],
    },
    // NPCs: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "NPC",
    //   },
    // ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Place", PlaceSchema);
