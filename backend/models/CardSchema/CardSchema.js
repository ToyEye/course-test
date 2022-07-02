const { Schema, model } = require("mongoose");

const order = Schema(
  { shopCard: { type: String }, totalPrice: { type: Number } },
  { versionKey: false, timestamps: true }
);

const Order = model("order", order);

module.exports = Order;
