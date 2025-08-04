import React, { useState } from "react";
import {
  Play,
  Clock,
  Flame,
  Target,
  TrendingUp,
  Calendar,
  ChevronRight,
  Star,
  Award,
  Activity,
  Utensils,
  Dumbbell,
  Heart,
  Zap,
} from "lucide-react";

const LandingPage = () => {
  const [currentDate] = useState(
    new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  const dailyStats = {
    caloriesBurned: 420,
    caloriesGoal: 600,
    workoutTime: 45,
    workoutGoal: 60,
    steps: 8240,
    stepsGoal: 10000,
  };

  const todaysWorkout = {
    name: "HIIT Upper Body Blast",
    duration: "25 min",
    difficulty: "Intermediate",
    calories: "280-340 cal",
    exercises: ["Push-ups", "Mountain Climbers", "Burpees", "Plank Hold"],
  };

  const mealRecommendations = [
    {
      type: "Breakfast",
      name: "Protein Power Bowl",
      calories: 420,
      protein: "32g",
      image: "🥣",
      ingredients: ["Greek yogurt", "Berries", "Granola", "Almonds"],
    },
    {
      type: "Lunch",
      name: "Grilled Chicken Salad",
      calories: 380,
      protein: "38g",
      image: "🥗",
      ingredients: ["Chicken breast", "Mixed greens", "Avocado", "Quinoa"],
    },
    {
      type: "Dinner",
      name: "Salmon & Sweet Potato",
      calories: 450,
      protein: "35g",
      image: "🐟",
      ingredients: ["Grilled salmon", "Roasted sweet potato", "Broccoli"],
    },
  ];

  const quickWorkouts = [
    {
      name: "Morning Energizer",
      duration: "10 min",
      type: "Cardio",
      icon: "⚡",
    },
    { name: "Abs Crusher", duration: "15 min", type: "Core", icon: "💪" },
    { name: "Flexibility Flow", duration: "20 min", type: "Yoga", icon: "🧘" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-red-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Welcome back, <span className="text-red-500">Anthony!</span>
            </h1>
            <p className="text-gray-300 text-lg">{currentDate}</p>
          </div>

          {/* Daily Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black/50 backdrop-blur rounded-xl p-6 border border-red-500/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-500 p-2 rounded-lg">
                    <Flame className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-300">Calories</span>
                </div>
                <span className="text-2xl font-bold text-red-500">
                  {dailyStats.caloriesBurned}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      (dailyStats.caloriesBurned / dailyStats.caloriesGoal) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {dailyStats.caloriesGoal - dailyStats.caloriesBurned} cal to
                goal
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur rounded-xl p-6 border border-red-500/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-500 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-300">Workout</span>
                </div>
                <span className="text-2xl font-bold text-red-500">
                  {dailyStats.workoutTime}m
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      (dailyStats.workoutTime / dailyStats.workoutGoal) * 100
                    }%`,
                  }}
                ></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {dailyStats.workoutGoal - dailyStats.workoutTime} min remaining
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur rounded-xl p-6 border border-red-500/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-500 p-2 rounded-lg">
                    <Activity className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-300">Steps</span>
                </div>
                <span className="text-2xl font-bold text-red-500">
                  {dailyStats.steps.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      (dailyStats.steps / dailyStats.stepsGoal) * 100
                    }%`,
                  }}
                ></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {(dailyStats.stepsGoal - dailyStats.steps).toLocaleString()}{" "}
                steps to goal
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Today's Recommended Workout */}
          <div className="bg-black rounded-xl p-6 border border-red-500/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center space-x-2">
                <Dumbbell className="h-6 w-6 text-red-500" />
                <span>Today's Workout</span>
              </h2>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                Recommended
              </span>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 mb-4">
              <h3 className="text-xl font-semibold mb-3 text-red-500">
                {todaysWorkout.name}
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300">
                    {todaysWorkout.duration}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300">
                    {todaysWorkout.difficulty}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Flame className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300">
                    {todaysWorkout.calories}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300">4.8 rating</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">
                  EXERCISES INCLUDE:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {todaysWorkout.exercises.map((exercise, index) => (
                    <span
                      key={index}
                      className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm"
                    >
                      {exercise}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Start Workout</span>
              </button>
            </div>
          </div>

          {/* Daily Meal Recommendations */}
          <div className="bg-black rounded-xl p-6 border border-red-500/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center space-x-2">
                <Utensils className="h-6 w-6 text-red-500" />
                <span>Meal Plan</span>
              </h2>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                Personalized
              </span>
            </div>

            <div className="space-y-4">
              {mealRecommendations.map((meal, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{meal.image}</span>
                      <div>
                        <h3 className="font-semibold text-white">
                          {meal.name}
                        </h3>
                        <p className="text-sm text-gray-400">{meal.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-red-500 font-semibold">
                        {meal.calories} cal
                      </p>
                      <p className="text-sm text-gray-400">
                        {meal.protein} protein
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {meal.ingredients.map((ingredient, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                    <span>View Recipe</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
            <Zap className="h-6 w-6 text-red-500" />
            <span>Quick Workouts</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickWorkouts.map((workout, index) => (
              <div
                key={index}
                className="bg-black rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{workout.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-red-500 transition-colors">
                    {workout.name}
                  </h3>
                  <p className="text-gray-400 mb-2">{workout.duration}</p>
                  <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">
                    {workout.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Section */}
        <div className="mt-8 bg-gradient-to-r from-red-900/20 to-black rounded-xl p-6 border border-red-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-red-500 p-3 rounded-full">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">7-Day Streak!</h3>
                <p className="text-gray-400">
                  You're on fire! Keep up the great work.
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-red-500">🔥 7</p>
              <p className="text-sm text-gray-400">days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
