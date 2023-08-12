const express = require("express");
const router = express.Router();

const makeAReservation = require("../controllers/reservation.controller");

router.post("/reserve", makeAReservation);

module.exports = router;
