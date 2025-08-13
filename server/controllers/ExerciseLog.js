import { configDotenv } from "dotenv";
import Exercise from "../Models/exerciseSchema.js";

configDotenv();

class ExerciseController {
  static async initializeDatabase() {
    try {
      const res = await fetch(process.env.EXCERCISES_DATA_URL);
      const exercises = await res.json();

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
        } catch (error) {
          console.error(
            `Error processing exercise "${item.name}":`,
            error.message
          );
        }
      }
      console.log("Database synchronization complete.");
    } catch (error) {
      console.error("Error initializing database:", error.message);
    }
  }

  static async getAllExercises(req, res) {
    try {
      const exercisesFromDB = await Exercise.find({});
      res.json(exercisesFromDB);
    } catch (error) {
      console.error("Error in getAllExercises:", error);
      res.status(500).json({ error: error.message });
    }
  }

  // GET EXERCISE BY ID
  static async getExerciseById(req, res) {
    const { id } = req.params;

    try {
      const exercise = await Exercise.findById(id);

      if (!exercise) {
        return res.status(404).json({ error: "Exercise not found" });
      }

      res.json(exercise);
    } catch (error) {
      console.error("Error in getExerciseById:", error);
      res.status(500).json({ error: error.message });
    }
  }
}

export default ExerciseController;
