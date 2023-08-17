const express = require("express");
const router = express.Router();

const {
  getReservations,
  makeReservation,
  getTables,
  checkAvailability,
} = require("../controllers/user.controller");

router.get("/tables", getTables);
router.post("/reserve", makeReservation);
router.get("/reservations", getReservations);
router.post("/availability", checkAvailability);

module.exports = router;
