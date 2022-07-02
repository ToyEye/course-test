const express = require("express");
const ctrlOrder = require("../../controller/order/order");
const router = express.Router();

router.get("/", ctrlOrder.get);
router.post("/", ctrlOrder.post);

module.exports = router;
