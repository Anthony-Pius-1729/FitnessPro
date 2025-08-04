import express from "express";
import { configDotenv } from "dotenv";
import { GoogleGenAI } from "@google/genai";
import Exercise from "../Models/exerciseSchema.js";
configDotenv();

const router = express.Router();

async function fetchData() {
  const res = await fetch(process.env.EXCERCISES_DATA_URL);
  const data = await res.json();
  return data;
}

const allExercises = await fetchData();

async function writeDB(exercises) {
  for (const item of exercises) {
    try {
      await Exercise.findOneAndUpdate(
        { name: item.name },
        {
          type: item.type,
          equipment: item.equipment,
          muscle: item.muscle,
          difficulty: item.difficulty,
          instructions: item.instructions,
        },
        {
          upsert: true,
          new: true,
          setDefaultsOnInsert: true,
        }
      );
      // console.log(`Exercise "${item.name}" processed.`);
    } catch (error) {
      console.error(`Error processing exercise "${item.name}":`, error.message);
    }
  }
  console.log("Database synchronization complete.");
}

writeDB(allExercises);

// GET ALL EXERCISES ON LOAD
router.get("/all-exercises", async (req, res) => {
  try {
    const exercisesFromDB = await Exercise.find({});
    res.json(exercisesFromDB);
  } catch (error) {
    console.error("Error in /all-exercises:", error);
    res.status(500).send(error.message);
  }
});

//GET INFORMATION ABOUT A PARTICULAR EXERCISE
router.get("/all-exercises/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Exercise.findById({ _id: id });
    res.json(data);
    res.json(allExercises[id]);
  } catch (error) {
    console.error("Error in /all-exercises/:id:", error);
    res.status(500).send(error.message);
  }
});

//GET AI RECOMMENDATIONS BASED ON CURRENT EXERCISES
router.post("/recommendations", async (req, res) => {
  const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);
  async function main() {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Give ONLY bullet point list of all exercises for improving ${req?.body?.message} return  EXACTLY a JSON array in this format as an example no other words or characters whatsoever do not write thhe backticks and the word json just this [{
    "name": "Seated Cable Rows",
    "type": "strength",
    "muscle": "middle_back",
    "equipment": "cable",
    "difficulty": "beginner",
    "instructions": "Sit at a low pulley cable machine with your feet on the platform and knees slightly bent. Grasp the handle with both hands. Sit up straight with your back perpendicular to the floor. Pull the handle towards your abdomen, squeezing your shoulder blades together. Slowly extend your arms back to the starting position. Repeat for the desired number of repetitions."
    }]`,
    });
    res.json(response.text);
  }
  main();
});

export default router;
