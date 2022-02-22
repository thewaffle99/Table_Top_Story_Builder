const mongoose = require("mongoose");
const WorldSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "What is this world called?"],
    },

    worldBackStory: {
      type: String,
      required: [true, "What is the backstory of this world?"],
      minlength: [10, "You can write more than that! Dig Deep!"],
    },

    worldCatalyst: {
      type: String,
      required: [true, "What is the catalyst for your players?"],
      minlength: [10, "You can write more than that! Dig Deep!"],
    },

    worldPlotPoints: {
      type: String,
    },
    places: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Place",
      },
    ],
    NPCs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "NPC",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("World", WorldSchema);
