const mongoose = require("mongoose");
const NPCSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "What is this NPC called?"],
    },
    health: {
      type: Number,
    },
    attack: {
      type: Number,
    },
    occupation: {
      type: String,
    },
    want: {
      type: String,
    },
    infoTheyKnow: {
      type: String,
    },
    enemies: {
      type: String,
    },
    allies: {
      type: String,
    },
    physicalChar: {
      type: String,
    },
    flawOrIdeal: {
      type: String,
    },
    valuables: {
      type: String,
    },
    secret: {
      type: String,
    },
    NPCNotes: {
      type: String,
    },
    photo: {
      type: String,
      default: "",
    },
    // place: {
    //   type: String,
    //   required: [true],
    // },
    associatedWorld: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "World",
      required: [true],
    },
    // associatedPlaces: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: "Place",
    //   required: [true],
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("NPC", NPCSchema);
