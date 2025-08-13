import mongoose from "mongoose";

const { Schema } = mongoose;

const WorkoutLogSchema = new Schema({
  // _id: {
  //   type: String,
  // },
  exerciseName: {
    type: String,
    required: true,
  },
  exerciseType: {
    type: String,
    required: true,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  distance: {
    type: Number,
  },
  total: {
    type: Number,
  },
  strengthTotal: {
    type: Number,
  },
  cardioTotal: {
    type: Number,
  },
});

const WorkoutLog = mongoose.model("WorkoutLog", WorkoutLogSchema);

export default WorkoutLog;
