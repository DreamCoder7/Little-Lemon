const mongoose = require("mongoose");

const tableSchema = require("./table.model").schema;

let daySchema = mongoose.Schema({
  date: Date,
  tables: [tableSchema],
});

let Day = mongoose.model("Day", daySchema);

(module.exports.model = Day), (module.exports.schema = daySchema);
