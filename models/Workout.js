const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
      type: Date
  },
  exercises:{
      //define schema for array elements[{}]
      type: []
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
