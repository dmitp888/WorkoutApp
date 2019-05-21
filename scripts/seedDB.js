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
    musclegroup: "chest",
    exersizename: "bench press",
    instructions: "Lying face up on bench, grab bar from rack with wide overhand grip (slightly wider than shoulders), lower bar to upper middle of chest and then raise until arms are nearly locked.",
    img: "client/src/images/chest-bench-press.gif"
  },
  {
    musclegroup: "chest",
    exersizename: "push ups",
    instructions: "sFingers going forward with palms on the floor, slightly wider than shoulder width and directly underneath the shoulders, toes on floor and with your body balanced in this way, lower your body until the chest nearly touches the floor and then push yourself back up again until arms are nearly locked.",
    img: "client/src/images/chest-push-ups.gif"
  },
  {
    musclegroup: "chest",
    exersizename: "incline bench press",
    instructions: "Lying face up on inclined bench, grab bar from rack with slightly larger than shoulder width grip , lower bar to upper chest (just missing your chin) and then raise until arms are nearly locked.",
    img: "client/src/images/incline-barbell-bench-press.gif"
  },
  {
    musclegroup: "shoulders",
    exersizename: "military press",
    instructions: "Standing, grasp barbell with an overhand grip that is slightly wider than shoulder width. Position the barbell in front of the neck at about shoulder height, press bar overhead until arms are extended then lower back down to starting position.    ",
    img: "client/src/images/shoulders-military-press.gif"
  },
  {
    musclegroup: "biceps",
    exersizename: "barbell biceps curls",
    instructions: "Standing, grasp barbell with shoulder width grip and, with elbows at your sides, raise until forearms are near upper arms and then lower until arms are again nearly fully extended but avoid locking out the elbows at the bottom of the exercise.    ",
    img: ""
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
