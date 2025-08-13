import React, { useState } from "react";
import {
  Plus,
  Trash2,
  Target,
  Calendar,
  Activity,
  Utensils,
  TrendingUp,
  Award,
} from "lucide-react";

const Input = ({ label, id, icon: Icon, ...props }) => (
  <div className="space-y-2">
    <label
      htmlFor={id}
      className="text-sm font-semibold text-gray-700 flex items-center gap-2"
    >
      {Icon && <Icon size={16} className="text-emerald-500" />}
      {label}
    </label>
    <div className="relative">
      <input
        id={id}
        {...props}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
      />
    </div>
  </div>
);

const Select = ({ label, id, children, icon: Icon, ...props }) => (
  <div className="space-y-2">
    <label
      htmlFor={id}
      className="text-sm font-semibold text-gray-700 flex items-center gap-2"
    >
      {Icon && <Icon size={16} className="text-emerald-500" />}
      {label}
    </label>
    <select
      id={id}
      {...props}
      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 appearance-none"
    >
      {children}
    </select>
  </div>
);

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  icon: Icon,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg";

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 focus:ring-emerald-500",
    secondary:
      "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 focus:ring-gray-400",
    danger:
      "bg-gradient-to-r from-red-500 to-rose-600 text-white hover:from-red-600 hover:to-rose-700 focus:ring-red-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}
      {...props}
    >
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
};

const StatsCard = ({ title, value, unit, icon: Icon, color = "emerald" }) => {
  const colorClasses = {
    emerald: "from-emerald-500 to-teal-600",
    blue: "from-blue-500 to-indigo-600",
    purple: "from-purple-500 to-pink-600",
    orange: "from-orange-500 to-red-600",
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {value}
            <span className="text-sm font-normal text-gray-500 ml-1">
              {unit}
            </span>
          </p>
        </div>
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colorClasses[color]} flex items-center justify-center`}
        >
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </div>
  );
};

const MealCard = ({ meal, onRemove }) => {
  const mealTypeColors = {
    Breakfast: "bg-orange-100 text-orange-800 border-orange-200",
    Lunch: "bg-blue-100 text-blue-800 border-blue-200",
    Dinner: "bg-purple-100 text-purple-800 border-purple-200",
    Snack: "bg-green-100 text-green-800 border-green-200",
  };

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between mb-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${
            mealTypeColors[meal.type] || mealTypeColors.Snack
          }`}
        >
          {meal.type}
        </span>
        <Button
          onClick={() => onRemove(meal.id)}
          variant="danger"
          size="sm"
          icon={Trash2}
        >
          Remove
        </Button>
      </div>
      <h4 className="font-semibold text-gray-900 mb-2">{meal.name}</h4>
      <div className="grid grid-cols-4 gap-2 text-xs">
        <div className="text-center">
          <p className="font-semibold text-orange-600">{meal.calories}</p>
          <p className="text-gray-500">kcal</p>
        </div>
        <div className="text-center">
          <p className="font-semibold text-blue-600">{meal.protein || 0}</p>
          <p className="text-gray-500">protein</p>
        </div>
        <div className="text-center">
          <p className="font-semibold text-green-600">{meal.carbs || 0}</p>
          <p className="text-gray-500">carbs</p>
        </div>
        <div className="text-center">
          <p className="font-semibold text-yellow-600">{meal.fat || 0}</p>
          <p className="text-gray-500">fat</p>
        </div>
      </div>
    </div>
  );
};

const ExerciseCard = ({ exercise, onRemove }) => {
  const typeColors = {
    Strength: "bg-red-100 text-red-800 border-red-200",
    Cardio: "bg-blue-100 text-blue-800 border-blue-200",
  };

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between mb-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${
            typeColors[exercise.type]
          }`}
        >
          {exercise.type}
        </span>
        <Button
          onClick={() => onRemove(exercise.id)}
          variant="danger"
          size="sm"
          icon={Trash2}
        >
          Remove
        </Button>
      </div>
      <h4 className="font-semibold text-gray-900 mb-2">{exercise.name}</h4>
      <p className="text-sm text-gray-600">
        {exercise.type === "Strength"
          ? `${exercise.sets || 0} sets × ${exercise.reps || 0} reps @ ${
              exercise.weight || 0
            } kg`
          : `${exercise.duration || 0} minutes • ${exercise.distance || 0} km`}
      </p>
    </div>
  );
};

const MealLogSection = ({ meals, onAddMeal, onRemoveMeal }) => {
  const [currentMeal, setCurrentMeal] = useState({
    type: "Breakfast",
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentMeal((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddClick = () => {
    if (!currentMeal.name || !currentMeal.calories) {
      alert("Please enter at least a meal name and calories.");
      return;
    }
    onAddMeal(currentMeal);
    setCurrentMeal({
      type: "Breakfast",
      name: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
    });
  };

  const totalCalories = meals.reduce(
    (sum, meal) => sum + (parseInt(meal.calories) || 0),
    0
  );
  const totalProtein = meals.reduce(
    (sum, meal) => sum + (parseInt(meal.protein) || 0),
    0
  );

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatsCard
          title="Total Calories"
          value={totalCalories}
          unit="kcal"
          icon={TrendingUp}
          color="orange"
        />
        <StatsCard
          title="Total Protein"
          value={totalProtein}
          unit="g"
          icon={Award}
          color="blue"
        />
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
            <Plus size={20} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Add New Meal</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Select
            id="type"
            name="type"
            label="Meal Type"
            value={currentMeal.type}
            onChange={handleInputChange}
          >
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snack</option>
          </Select>
          <Input
            label="Food/Meal Name"
            id="name"
            name="name"
            type="text"
            placeholder="e.g., Grilled Chicken Salad"
            value={currentMeal.name}
            onChange={handleInputChange}
            icon={Utensils}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Input
            label="Calories"
            id="calories"
            name="calories"
            type="number"
            placeholder="450"
            value={currentMeal.calories}
            onChange={handleInputChange}
          />
          <Input
            label="Protein (g)"
            id="protein"
            name="protein"
            type="number"
            placeholder="30"
            value={currentMeal.protein}
            onChange={handleInputChange}
          />
          <Input
            label="Carbs (g)"
            id="carbs"
            name="carbs"
            type="number"
            placeholder="20"
            value={currentMeal.carbs}
            onChange={handleInputChange}
          />
          <Input
            label="Fat (g)"
            id="fat"
            name="fat"
            type="number"
            placeholder="15"
            value={currentMeal.fat}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-end">
          <Button onClick={handleAddClick} icon={Plus} size="lg">
            Add Meal
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Utensils size={24} className="text-emerald-500" />
          Today's Meals ({meals.length})
        </h3>
        {meals.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-2xl">
            <Utensils size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">No meals logged yet</p>
            <p className="text-gray-400 text-sm">
              Add your first meal above to get started
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {meals.map((meal) => (
              <MealCard key={meal.id} meal={meal} onRemove={onRemoveMeal} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ExerciseLogSection = ({ exercises, onAddExercise, onRemoveExercise }) => {
  const initialExerciseState = {
    type: "Strength",
    name: "",
    sets: "",
    reps: "",
    weight: "",
    duration: "",
    distance: "",
  };
  const [currentExercise, setCurrentExercise] = useState(initialExerciseState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentExercise((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddClick = () => {
    if (!currentExercise.name) {
      alert("Please enter an exercise name.");
      return;
    }
    onAddExercise(currentExercise);
    setCurrentExercise(initialExerciseState);
  };

  const totalExercises = exercises.length;
  const strengthExercises = exercises.filter(
    (ex) => ex.type === "Strength"
  ).length;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatsCard
          title="Total Exercises"
          value={totalExercises}
          unit="today"
          icon={Activity}
          color="purple"
        />
        <StatsCard
          title="Strength Training"
          value={strengthExercises}
          unit="exercises"
          icon={Target}
          color="emerald"
        />
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <Plus size={20} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Add New Exercise</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Input
            label="Exercise Name"
            id="ex-name"
            name="name"
            type="text"
            placeholder="e.g., Bench Press"
            value={currentExercise.name}
            onChange={handleInputChange}
            icon={Activity}
          />
          <Select
            id="ex-type"
            name="type"
            label="Exercise Type"
            value={currentExercise.type}
            onChange={handleInputChange}
          >
            <option>Strength</option>
            <option>Cardio</option>
          </Select>
        </div>

        {currentExercise.type === "Strength" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Input
              label="Sets"
              id="sets"
              name="sets"
              type="number"
              placeholder="3"
              value={currentExercise.sets}
              onChange={handleInputChange}
            />
            <Input
              label="Reps"
              id="reps"
              name="reps"
              type="number"
              placeholder="10"
              value={currentExercise.reps}
              onChange={handleInputChange}
            />
            <Input
              label="Weight (kg)"
              id="weight"
              name="weight"
              type="number"
              placeholder="60"
              value={currentExercise.weight}
              onChange={handleInputChange}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Input
              label="Duration (min)"
              id="duration"
              name="duration"
              type="number"
              placeholder="30"
              value={currentExercise.duration}
              onChange={handleInputChange}
            />
            <Input
              label="Distance (km)"
              id="distance"
              name="distance"
              type="number"
              placeholder="5"
              value={currentExercise.distance}
              onChange={handleInputChange}
            />
          </div>
        )}

        <div className="flex justify-end">
          <Button onClick={handleAddClick} icon={Plus} size="lg">
            Add Exercise
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Activity size={24} className="text-blue-500" />
          Today's Workout ({exercises.length})
        </h3>
        {exercises.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-2xl">
            <Activity size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">No exercises logged yet</p>
            <p className="text-gray-400 text-sm">
              Add your first exercise above to get started
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {exercises.map((ex) => (
              <ExerciseCard
                key={ex.id}
                exercise={ex}
                onRemove={onRemoveExercise}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const FitnessDataForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    fitnessGoal: "",
    date: new Date().toISOString().slice(0, 10),
    meals: [],
    exercises: [],
  });

  const handleAddMeal = async (meal) => {
    try {
      const res = await fetch("http://localhost:8080/diet/addMeal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { meal } }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("Error occured", error);
      throw new Error("Error fetching data");
    }

    const newMeal = { ...meal, id: Date.now() };
    setFormData((prev) => ({ ...prev, meals: [...prev.meals, newMeal] }));
  };

  const handleRemoveMeal = (mealId) => {
    setFormData((prev) => ({
      ...prev,
      meals: prev.meals.filter((meal) => meal.id !== mealId),
    }));
  };

  const handleAddExercise = async (exercise) => {
    try {
      const res = await fetch("http://localhost:8080/exercises/addExercise", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { exercise } }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("Error occured", error);
      throw new Error("Error fetching data");
    }
    const newExercise = { ...exercise, id: Date.now() };
    setFormData((prev) => ({
      ...prev,
      exercises: [...prev.exercises, newExercise],
    }));
  };

  const handleRemoveExercise = async (exerciseId) => {
    try {
      console.log(exerciseId, typeof exerciseId);
      const id = exerciseId;

      const response = await fetch(
        `http://localhost:8080/exercises/workout-logs/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ exerciseId: id }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Exercise removed successfully:", data);

      setFormData((prev) => ({
        ...prev,
        exercises: prev.exercises.filter((ex) => ex.id !== exerciseId),
      }));
    } catch (error) {
      console.error("An Error Occurred:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Form Data:", formData);
    alert("Data submitted! Check the console for the final object.");
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Header */}
          <div className="text-center bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                <Calendar size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Daily Fitness Log
                </h1>
                <p className="text-lg text-emerald-600 font-semibold">
                  {formatDate(formData.date)}
                </p>
              </div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Track your meals and exercises to stay on top of your fitness
              goals. Every small step counts towards your success!
            </p>
          </div>

          {/* Meal Tracking Section */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Utensils size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Nutrition Tracker
                </h2>
                <p className="text-gray-600">
                  Monitor your daily food intake and macronutrients
                </p>
              </div>
            </div>
            <MealLogSection
              meals={formData.meals}
              onAddMeal={handleAddMeal}
              onRemoveMeal={handleRemoveMeal}
            />
          </div>

          {/* Exercise Tracking Section */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Activity size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Workout Tracker
                </h2>
                <p className="text-gray-600">
                  Log your exercises and track your fitness progress
                </p>
              </div>
            </div>
            <ExerciseLogSection
              exercises={formData.exercises}
              onAddExercise={handleAddExercise}
              onRemoveExercise={handleRemoveExercise}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="px-12 py-4 text-lg"
            >
              Complete Daily Log
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FitnessDataForm;
