import mongoose from "mongoose";

const { Schema } = mongoose;

const llmSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const llmResponse = mongoose.model("LLM", llmSchema);

export default llmResponse;
