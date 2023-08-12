const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
  name: String,
  phone: String,
  email: String,
});

let Reservation = mongoose.model("Reservation", reservationSchema);

module.exports.model = Reservation;
module.exports.schema = reservationSchema;
