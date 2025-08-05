configDotenv();
const app = express();
import express from "express";
import cors from "cors";
import appRoutes from "./Routes/appRoutes.js";
import exerciseRoute from "./Routes/excerciseRoute.js";
import dietRoutes from "./Routes/dietRoutes.js";
import freddyAI from "./Routes/aiChatAPI.js";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/user", appRoutes);
app.use("/exercises", exerciseRoute);
app.use("/diet", dietRoutes);
app.use("/AI-CHAT", freddyAI);

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Sucessfully established connetion with database");
});

// Listening on PORT:
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
