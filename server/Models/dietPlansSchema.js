import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const dietPlanSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Diet = mongoose.model("Diet", dietPlanSchema);
export default Diet;
