const { Schema, model } = require("mongoose");

const wildfowl = Schema(
  { name: { type: String }, price: { type: String }, img: { type: String } },
  { versionKey: false, timestamps: true }
);

const Wildfowl = model("wildfowl", wildfowl);

module.exports = Wildfowl;
