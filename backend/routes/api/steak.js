const express = require("express");
const ctrlBurgers = require("../../controller/shops/steak/steak");
const router = express.Router();

router.get("/", ctrlBurgers.get);

module.exports = router;
