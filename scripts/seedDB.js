const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/fitness",
  {useNewUrlParser: true}
);

const fitSeed = [
  {
    musclegroup: "shoulders",
    exersizename: "military press",
    instructions: "stand and breathe",
    img: "img"
  }
];

db.Exersize
  .remove({})
  .then(() => db.Exersize.collection.insertMany(fitSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
