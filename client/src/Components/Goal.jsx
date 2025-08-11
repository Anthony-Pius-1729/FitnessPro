import React, { useState } from "react";
import { Target, Plus, Check, Edit2, Trash2 } from "lucide-react";

const GoalComponent = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Lose 10 pounds",
      target: 10,
      current: 3,
      unit: "lbs",
      category: "Weight Loss",
      deadline: "2025-10-01",
    },
    {
      id: 2,
      title: "Run 5K under 25 minutes",
      target: 25,
      current: 28,
      unit: "minutes",
      category: "Cardio",
      deadline: "2025-09-15",
    },
    {
      id: 3,
      title: "Bench Press 150 lbs",
      target: 150,
      current: 135,
      unit: "lbs",
      category: "Strength",
      deadline: "2025-11-01",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);
  const [newGoal, setNewGoal] = useState({
    title: "",
    target: "",
    current: "",
    unit: "",
    category: "",
    deadline: "",
  });

  const calculateProgress = (current, target, isReverse = false) => {
    if (isReverse) {
      // For goals where lower is better (like weight loss or time)
      const progress = ((target - current) / target) * 100;
      return Math.max(0, Math.min(100, progress));
    } else {
      // For goals where higher is better (like weight lifting)
      return Math.max(0, Math.min(100, (current / target) * 100));
    }
  };

  const isReverseGoal = (category) => {
    return category === "Weight Loss" || category === "Cardio";
  };

  const handleAddGoal = () => {
    if (
      newGoal.title &&
      newGoal.target &&
      newGoal.current &&
      newGoal.unit &&
      newGoal.category
    ) {
      const goal = {
        id: Date.now(),
        ...newGoal,
        target: parseFloat(newGoal.target),
        current: parseFloat(newGoal.current),
      };
      setGoals([...goals, goal]);
      setNewGoal({
        title: "",
        target: "",
        current: "",
        unit: "",
        category: "",
        deadline: "",
      });
      setShowAddForm(false);
    }
  };

  const handleUpdateProgress = (id, newCurrent) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, current: parseFloat(newCurrent) } : goal
      )
    );
  };

  const handleDeleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const formatDeadline = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const isGoalCompleted = (current, target, category) => {
    if (isReverseGoal(category)) {
      return current <= target;
    } else {
      return current >= target;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Target className="h-8 w-8 text-green-500" />
            <h1 className="text-3xl font-bold text-gray-800">Fitness Goals</h1>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Plus className="h-5 w-5" />
            <span>Add Goal</span>
          </button>
        </div>

        <p className="text-gray-600">
          Track your fitness goals and celebrate your progress!
        </p>
      </div>

      {showAddForm && (
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Add New Goal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Goal title"
              value={newGoal.title}
              onChange={(e) =>
                setNewGoal({ ...newGoal, title: e.target.value })
              }
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <select
              value={newGoal.category}
              onChange={(e) =>
                setNewGoal({ ...newGoal, category: e.target.value })
              }
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select category</option>
              <option value="Weight Loss">Weight Loss</option>
              <option value="Strength">Strength</option>
              <option value="Cardio">Cardio</option>
              <option value="Flexibility">Flexibility</option>
            </select>
            <input
              type="number"
              placeholder="Target value"
              value={newGoal.target}
              onChange={(e) =>
                setNewGoal({ ...newGoal, target: e.target.value })
              }
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="number"
              placeholder="Current value"
              value={newGoal.current}
              onChange={(e) =>
                setNewGoal({ ...newGoal, current: e.target.value })
              }
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Unit (lbs, minutes, etc.)"
              value={newGoal.unit}
              onChange={(e) => setNewGoal({ ...newGoal, unit: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="date"
              value={newGoal.deadline}
              onChange={(e) =>
                setNewGoal({ ...newGoal, deadline: e.target.value })
              }
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex space-x-3 mt-4">
            <button
              onClick={handleAddGoal}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Add Goal
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal) => {
          const progress = calculateProgress(
            goal.current,
            goal.target,
            isReverseGoal(goal.category)
          );
          const completed = isGoalCompleted(
            goal.current,
            goal.target,
            goal.category
          );

          return (
            <div
              key={goal.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {goal.title}
                  </h3>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                    {goal.category}
                  </span>
                </div>
                {completed && (
                  <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                )}
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="text-sm font-medium text-gray-800">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      completed ? "bg-green-500" : "bg-green-500"
                    }`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Current:</span>
                  <span className="text-sm font-medium text-gray-800">
                    {goal.current} {goal.unit}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Target:</span>
                  <span className="text-sm font-medium text-gray-800">
                    {goal.target} {goal.unit}
                  </span>
                </div>
                {goal.deadline && (
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Deadline:</span>
                    <span className="text-sm font-medium text-gray-800">
                      {formatDeadline(goal.deadline)}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={goal.current}
                  onChange={(e) =>
                    handleUpdateProgress(goal.id, e.target.value)
                  }
                  className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Update progress"
                />
                <button
                  onClick={() => handleDeleteGoal(goal.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {goals.length === 0 && !showAddForm && (
        <div className="text-center py-12">
          <Target className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-600 mb-2">
            No goals yet
          </h3>
          <p className="text-gray-500 mb-4">
            Start by adding your first fitness goal!
          </p>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Add Your First Goal
          </button>
        </div>
      )}
    </div>
  );
};

export default GoalComponent;
