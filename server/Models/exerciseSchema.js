import mongoose from "mongoose";

const { Schema } = mongoose;

const excerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  equipment: {
    type: String,
    required: true,
  },
  muscle: {
    type: String,
    required: true,
  },

  difficulty: {
    type: String,
    required: true,
  },

  instructions: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Exercise = mongoose.model("EXERCISES", excerciseSchema);

export default Exercise;
