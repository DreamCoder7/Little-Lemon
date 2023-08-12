require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const AvailabilityRoute = require("./routes/availability.route");
const ReservationRoute = require("./routes/reservation.route");

const app = express();

// connect to the DB
mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", (_) => {
  console.log("Connect to DB!");
});

app.use("/", AvailabilityRoute);
app.use("/", ReservationRoute);

module.exports = app;
