const Burger = require("../../../models/burgerSchema");

const get = async (req, res, next) => {
  try {
    const result = await Burger.find();
    res.status(200).json({ message: "success", data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = { get };
