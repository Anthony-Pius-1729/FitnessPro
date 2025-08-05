import { configDotenv } from "dotenv";
import { GoogleGenAI } from "@google/genai";
import express from "express";
configDotenv();

const router = express.Router();

router.post("/freddyAI", async (req, res) => {
  const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);
  console.log(req.body);
  console.log(req.body.message);
  async function main() {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: ` Give a brief energetic response (longer than one word) to this message based on context: ${req?.body?.message} . Decide on a response and give it deirectly. Ensure to markup all responses.
    `,
    });
    console.log(response.text);
    res.json(response.text);
  }
  main();
});

export default router;
