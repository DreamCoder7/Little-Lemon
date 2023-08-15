const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  capacity: Number,
  location: String,
  isAvailable: Boolean,
});

module.exports = mongoose.model("Table", tableSchema);
