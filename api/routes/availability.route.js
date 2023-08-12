const express = require("express");
const router = express.Router();

const checkAvailability = require("../controllers/availability.controller");

router.post("/availability", checkAvailability);

/* GET home page. */
// router.post("/", async (req, res, next) => {
//   console.log("request attempted!");
//   console.log(req.body);

//   const dateTime = new Date(req.body.date);
//   try {
//     const docs = await Day.find({ date: dateTime });
//     console.log(docs);

//     if (docs.length > 0) {
//       // Record already exist
//       console.log("Record exists. sent docs.");
//       res.status(200).send(docs[0]);
//     } else {
//       // Searched date does not exist and we need to create
//       const allTables = require("../data/allTables.json");
//       const day = new Day({
//         date: dateTime,
//         tables: allTables,
//       });
//       console.log(day);
//       day.save(day);

//       try {
//         const docs = await Day.find({ date: dateTime });
//         res.status(200).send(docs[0]);
//         console.log("Created new date time. Here are the default docs.");
//       } catch (err) {
//         res.status(400).send("Error saving new data");
//       }
//       // day.save((err) => {
//       //   if (err) {
//       //     res.status(400).send("Error saving new data");
//       //   } else {
//       //     console.log("Created new date time. Here are the default docs.");
//       //     Day.find({ date: dateTime }, (err, docs) => {
//       //       err ? res.sendStatus(400) : res.status(200).send(docs[0]);
//       //     });
//       //   }
//       // });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(400).send("Could not search for date");
//   }
// });

module.exports = router;
