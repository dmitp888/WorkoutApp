const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fitSchema = new Schema({
  musclegroup: { type: String, required: true },
  exersizename: { type: String, required: true },
  instructions: { type: String, required: true },
  img: String,
});

const Exersize = mongoose.model("Exersize", fitSchema);

module.exports = Exersize;
