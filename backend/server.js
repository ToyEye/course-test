const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST, PORT } = process.env;

const port = PORT || 5000;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(port, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
