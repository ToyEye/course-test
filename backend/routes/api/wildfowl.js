const express = require("express");
const ctrlBurgers = require("../../controller/shops/wildfowl/wildfowl");
const router = express.Router();

router.get("/", ctrlBurgers.get);

module.exports = router;
