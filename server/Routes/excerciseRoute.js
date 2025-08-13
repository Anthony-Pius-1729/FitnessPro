import express from "express";
import ExerciseController from "../controllers/ExerciseLog.js";
import WorkoutLogController from "../controllers/WorkoutLog.js";

const router = express.Router();

ExerciseController.initializeDatabase();

router.get("/all-exercises", ExerciseController.getAllExercises);
router.get("/all-exercises/:id", ExerciseController.getExerciseById);

router.post("/addExercise", WorkoutLogController.addExerciseLog);
router.get("/workout-logs", WorkoutLogController.getAllWorkoutLogs);
router.get("/workout-logs/:id", WorkoutLogController.getWorkoutLogById);
router.delete("/workout-logs/:id", WorkoutLogController.deleteWorkoutLog);

export default router;
