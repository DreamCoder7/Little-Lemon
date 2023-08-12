const Day = require("../models/day.model").model;
const Reservation = require("../models/reservation.model").model;

const makeAReservation = async (req, res) => {
  const { date, name, phone, email, tableId } = req.body;

  try {
    const days = await Day.find({ date: date });

    if (days.length > 0) {
      let day = days[0];

      day.tables.forEach((tbl) => {
        if (tbl._id == tableId) {
          tbl.reservation = new Reservation({
            name: name,
            phone: phone,
            email: email,
          });

          tbl.isAvailable = false;
          days.save();
          res.status(200).send("Added Reservation");
        }
      });
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = makeAReservation;
