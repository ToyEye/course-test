const { Burger } = require("../../../models/MenuSchema");

const get = async (req, res, next) => {
  try {
    const result = await Burger.find();
    res.status(200).json({ message: "success", menu: result });
  } catch (error) {
    next(error);
  }
};

module.exports = { get };
