const Day = require("../models/day.model").model;

const checkAvailability = async (req, res) => {
  console.log("request attempted!");

  const { date } = req.body.date;

  try {
    const docs = await Day.find({ date: date });
    console.log(docs);

    if (docs.length > 0) {
      // Record already exist
      console.log("Record exists. sent docs.");
      res.status(200).send(docs[0]);
    } else {
      // date does not exist and must created
      const allTables = require("../data/allTables.json");
      const day = new Day({
        date: date,
        tables: allTables,
      });

      day.save(day);

      res.status(201).send(docs[0]);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Could not search for date");
  }
};

module.exports = checkAvailability;
