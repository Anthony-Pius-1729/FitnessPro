import WorkoutLog from "../Models/workoutLogSchema.js";

class WorkoutLogController {
  // ADD EXERCISE TO WORKOUT LOG
  static async addExerciseLog(req, res) {
    try {
      const { exercise } = req?.body?.data;

      if (!exercise) {
        return res.status(400).json({ error: "Exercise data is required" });
      }

      const newExerciseLog = new WorkoutLog({
        exerciseType: exercise.type,
        exerciseName: exercise.name,
        sets: exercise.sets,
        reps: exercise.reps,
        weight: exercise.weight,
        duration: exercise.duration || 0,
        distance: exercise.distance || 0,
        total: exercise.total,
      });

      const savedExerciseLog = await newExerciseLog.save();

      if (savedExerciseLog) {
        console.log("Exercise Log saved");
      }

      res.status(200).json(savedExerciseLog);
    } catch (error) {
      console.error("Error in addExerciseLog:", error);
      res.status(500).json({ error: error.message });
    }
  }

  // GET ALL WORKOUT LOGS
  static async getAllWorkoutLogs(req, res) {
    try {
      const workoutLogs = await WorkoutLog.find({}).sort({ createdAt: -1 });
      res.json(workoutLogs);
    } catch (error) {
      console.error("Error in getAllWorkoutLogs:", error);
      res.status(500).json({ error: error.message });
    }
  }

  // GET WORKOUT LOG BY ID
  static async getWorkoutLogById(req, res) {
    const { id } = req.params;

    try {
      const workoutLog = await WorkoutLog.findById(id);

      if (!workoutLog) {
        return res.status(404).json({ error: "Workout log not found" });
      }

      res.json(workoutLog);
    } catch (error) {
      console.error("Error in getWorkoutLogById:", error);
      res.status(500).json({ error: error.message });
    }
  }

  // DELETE WORKOUT LOG
  static async deleteWorkoutLog(req, res) {
    const { id } = req.params;

    console.log(id);

    try {
      const deletedLog = await WorkoutLog.findByIdAndDelete(id);

      if (!deletedLog) {
        return res.status(404).json({ error: "Workout log not found" });
      }

      res.json({ message: "Workout log deleted successfully", deletedLog });
    } catch (error) {
      console.error("Error in deleteWorkoutLog:", error);
      res.status(500).json({ error: error.message });
    }
  }
}

export default WorkoutLogController;
