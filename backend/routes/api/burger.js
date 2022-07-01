const express = require("express");
const ctrlBurgers = require("../../controller/shops/burger/burger");
const router = express.Router();

router.get("/", ctrlBurgers.get);

module.exports = router;
