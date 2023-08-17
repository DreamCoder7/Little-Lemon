const User = require("../models/user.model");
const Reservation = require("../models/reservation.model");
const Table = require("../models/table.model");
const allTables = require("../data/allTables.json");

//view all tables
exports.getTables = async (req, res) => {
  try {
    const tables = await Table.find();
    console.log(tables);

    if (!tables) {
      return res.status(400).send("No tables found");
    }

    return res
      .status(200)
      .json({ status: success, message: "Tables found", tables: tables });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: "Unable to get tables",
    });
  }
};

//check if a table is available for reservation
exports.checkAvailability = async (req, res) => {
  const { date, time } = req.body;

  try {
    const tables = await Table.find();

    // If the table is not found, return an error
    if (!tables) {
      return res.status(400).json({
        status: "fail",
        message: "No tables!",
      });
    }

    const availableTables = tables.filter((table) => table.isAvailable);

    //If the table is reserved, return an error
    if (availableTables.length < 0) {
      return res.status(400).json({
        status: "fail",
        message: "There is not available tables!",
      });
    }
    console.log(availableTables);

    //If the table is available, return a success message
    res
      .status(200)
      .json({
        status: "success",
        message: "Table is available for reservation",
      });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: "Unable to check availability",
    });
  }
};

//make a reservation
exports.makeReservation = async (req, res) => {
  const { tableId, user } = req.body;

  try {
    const table = await Table.findById(tableId);
    console.log(table);

    //If the table is not found, return an error
    if (!table) {
      res.status(400).json({
        status: "fail",
        message: "Table not found",
      });
    }

    // Creating fake tables
    if (table.length === 0) {
      try {
        allTables.tables.map(async (tbl) => {
          const table = new Table(tbl);
          await table.save();
        });
      } catch (err) {
        console.error(err);
      }
    }

    //If the table is reserved, return an error
    if (table.isAvailable === false) {
      return res.status(400).json({
        status: "fail",
        message: "Table is already reserved",
      });
    }

    //If the table is available, make a reservation
    const reservation = new Reservation({
      tableId: tableId,
      reserverdBy: user._id,
    });

    //Save the reservation
    await reservation.save();

    //Update the table to be unavailable for other users
    table.isAvailable = false;
    await table.save();

    return res.status(201).json({
      status: "success",
      message: "Reservation made successfully",
      reservation: reservation,
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: "Unable to make a reservation",
    });
  }
};

//view all reservations made by the user
exports.getReservations = async (req, res) => {
  try {
    //Find all reservations made by the user
    const reservations = await Reservation.find({ reserverdBy: req.user._id });
    if (!reservations) {
      return res.status(400).send("No reservations found");
    }
    //Return the reservations
    return res.status(200).send(reservations);
  } catch (err) {
    return res.status(500).send({
      status: "fail",
      message: "Unable to get reservations",
    });
  }
};
