import { configDotenv } from "dotenv";
import { GoogleGenAI } from "@google/genai";
import express from "express";
import cors from "cors";
configDotenv();

const router = express.Router();
router.use(cors());

router.post("/freddyAI", async (req, res) => {
  const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);
  console.log(req.body);
  console.log(req.body.message);
  async function main() {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `YOU ARE A FITNESS INSTRUCTOR. YOUR NAME IS FREDDY  Give an energetic response (longer than one word) to this message based on context: ${req?.body?.message} . Decide on a response and give it deirectly. Ensure to markDOWN all responses.
    `,
    });
    console.log(response.text);
    res.json(response.text);
  }
  main();
});

export default router;
