const { Schema, model } = require("mongoose");

const burger = Schema(
  { name: { type: String }, price: { type: String }, img: { type: String } },
  { versionKey: false, timestamps: true }
);

const Burger = model("burger", burger);

module.exports = Burger;
