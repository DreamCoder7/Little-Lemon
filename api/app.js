const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

require("dotenv").config();

const userRoutes = require("./routes/user.routes");

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", userRoutes);

console.log(`Server running on port ${PORT}`);

mongoose
  .connect(MONGO_URL)
  .then((res) => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.log(err);
  });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);

// });

module.exports = app;
