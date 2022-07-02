const { Schema, model } = require("mongoose");

const steak = Schema(
  { name: { type: String }, price: { type: String }, img: { type: String } },
  { versionKey: false, timestamps: true }
);

const Steak = model("steak", steak);

module.exports = Steak;
