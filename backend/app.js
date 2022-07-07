const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config({ path: "ENV_FILENAME" });

const burgerRouter = require("./routes/api/burger");
const chickenRouter = require("./routes/api/wildfowl");
const steakRouter = require("./routes/api/steak");
const cardRouter = require("./routes/api/order");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/shops/burger", burgerRouter);
app.use("/api/shops/wildfowl", chickenRouter);
app.use("/api/shops/steak", steakRouter);
app.use("/api/order", cardRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
