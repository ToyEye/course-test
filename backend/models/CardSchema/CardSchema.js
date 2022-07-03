const { Schema, model } = require("mongoose");

const order = Schema(
  {
    info: { type: Object },
    order: { type: Array },
    totalPrice: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const Order = model("order", order);

module.exports = Order;
