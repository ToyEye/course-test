const Order = require("../../models/CardSchema/CardSchema");

const get = async (req, res, next) => {
  try {
    const result = await Order.find();
    res.status(200).json({ message: "success", menu: result });
  } catch (error) {
    next(error);
  }
};

const post = async (req, res, next) => {
  try {
    const newOrder = req.body;
    const result = await Order.create({ ...newOrder });
    res.status(200).json({ message: "success", data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = { get, post };
