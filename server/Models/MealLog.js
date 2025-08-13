import mongoose from "mongoose";

const { Schema } = mongoose;

const mealLogSchema = new Schema({
  mealType: {
    type: String,
    required: true,
  },
  food: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  carbs: {
    type: Number,
    required: true,
  },
  fat: {
    type: Number,
    required: true,
  },
  caloriesTotal: {
    type: Number,
  },
  proteinTotal: {
    type: Number,
  },
});

const mealLog = mongoose.model("MealLog", mealLogSchema);

export default mealLog;
