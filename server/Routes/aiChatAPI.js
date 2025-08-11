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

router.post("/topic-generator", async (req, res) => {
  const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);
  // console.log(req.body);
  // console.log(req.body.message);
  async function main() {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Ensure to Generate a summarizing topic based off from this : ${req?.body?.message}.Ensure to markDOWN all responses. return only the marked down topic
      `,
    });
    console.log(response.text);
    res.json(response.text);
  }
  main();
});

router.post("/recommendations", async (req, res) => {
  console.log("Rec running on port 8080");
  // console.log(req?.body?.message);
  const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);
  async function main() {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Give ONLY bullet point list of all exercises for improving ${req?.body?.message.name}. The given example has these instructions ${req?.body?.message.instructions} return  EXACTLY a JSON array in this format as an example no other words or characters whatsoever do not write thhe backticks and the word json just this [{
    "name": "Seated Cable Rows",
    "type": "strength",
    "muscle": "middle_back",
    "equipment": "cable",
    "difficulty": "beginner",
    "instructions": "Sit at a low pulley cable machine with your feet on the platform and knees slightly bent. Grasp the handle with both hands. Sit up straight with your back perpendicular to the floor. Pull the handle towards your abdomen, squeezing your shoulder blades together. Slowly extend your arms back to the starting position. Repeat for the desired number of repetitions."
    }] DO NOT ADD THE "json" WORD THERE. IT SHOULD BE EXACTLY A PURE ARRAY OF OBJECTS DIRECTLY. NO USE OF BACTICKS EVER. NOTHING MORE, NOTHING LESS.`,
    });
    console.log(response.text);
    res.json(response.text);
  }
  main();
});

export default router;
