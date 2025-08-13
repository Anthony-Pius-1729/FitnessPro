import express from "express";
import { configDotenv } from "dotenv";
import Meal from "../Models/mealSchema.js";
import Diet from "../Models/dietPlansSchema.js";
import mealLog from "../Models/MealLog.js";
configDotenv();

const router = express.Router();

//FETCH DIET PLANS DATA FROM EXTERNAL SOURCE
async function fetchDietPlans() {
  const base_url = "https://api.spoonacular.com/recipes/complexSearch?";
  const apikey = process.env.DIET_API_KEY;
  const end_url = `apiKey=${apikey}&number=20`;
  const dietPlansUrl = base_url + end_url;
  const res = await fetch(dietPlansUrl);
  const dietPlans = await res.json();
  return dietPlans;
}

//FETCH BREAKFAST DATA FROM EXTERNAL SOURCE
async function fetchBreakFast() {
  const base_url = "https://api.spoonacular.com/recipes/complexSearch?";
  const apikey = process.env.DIET_API_KEY;
  const end_url = `apiKey=${apikey}&query=breakfast`;
  const breakFastUrl = base_url + end_url;
  const res = await fetch(breakFastUrl);
  const breakfast = await res.json();
  return breakfast;
}

//FETCH LUNCH DATA FROM EXTERNAL SOURCE
async function fetchLunch() {
  const base_url = "https://api.spoonacular.com/recipes/complexSearch?";
  const apikey = process.env.DIET_API_KEY;
  const end_url = `apiKey=${apikey}&query=lunch&includeNutrition=true`;
  const lunchUrl = base_url + end_url;
  const res = await fetch(lunchUrl);
  const lunch = await res.json();
  return lunch;
}

//FETCH DINNER DATA FROM EXTERNAL SOURCE
async function fetchDinner() {
  const base_url = "https://api.spoonacular.com/recipes/complexSearch?";
  const apikey = process.env.DIET_API_KEY;
  const end_url = `apiKey=${apikey}&query=dinner`;
  const dinnerUrl = base_url + end_url;
  const res = await fetch(dinnerUrl);
  const dinner = await res.json();
  return dinner;
}

const dietPlans = await fetchDietPlans();
const breakFast = await fetchBreakFast();
const lunch = await fetchLunch();
const dinner = await fetchDinner();

//WRITE BREAKFAST DATA TO DATABASE
async function writeBreakFastDB(breakFasts) {
  if (!breakFasts || !Array.isArray(breakFasts.results)) {
    console.error(
      "Invalid input for writeBreakFastDB: breakFasts.results is not an array."
    );
    return;
  }

  for (const item of breakFasts.results) {
    try {
      const updatedOrNewMeal = await Meal.findOneAndUpdate(
        { id: item.id },
        {
          title: item.title,
          image: item.image,
        },
        {
          upsert: true,
          new: true,
          setDefaultsOnInsert: true,
        }
      );
    } catch (error) {
      console.error(
        `Error processing meal "${item.title}" (ID: ${item.id}):`,
        error.message
      );
    }
  }
  console.log("Breakfast database synchronization complete.");
}

//WRITE LUNCH DATA TO DATABASE
async function writeLunchDB(lunches) {
  if (!lunches || !Array.isArray(lunches.results)) {
    console.error(
      "Invalid input for writeLunchDB: lunches.results is not an array."
    );
    return;
  }

  for (const item of lunches.results) {
    try {
      const updatedOrNewMeal = await Meal.findOneAndUpdate(
        { id: item.id },
        {
          title: item.title,
          image: item.image,
        },
        {
          upsert: true,
          new: true,
          setDefaultsOnInsert: true,
        }
      );
    } catch (error) {
      console.error(
        `Error processing meal "${item.title}" (ID: ${item.id}):`,
        error.message
      );
    }
  }
  console.log("Lunch database synchronization complete.");
}

//WRITE DINNER DATA TO DATABASE
async function writeDinnerDB(dinners) {
  if (!dinners || !Array.isArray(dinners.results)) {
    console.error(
      "Invalid input for writeDinnerDB: dinners.results is not an array."
    );
    return;
  }

  for (const item of dinners.results) {
    try {
      const updatedOrNewMeal = await Meal.findOneAndUpdate(
        { id: item.id },
        {
          title: item.title,
          image: item.image,
        },
        {
          upsert: true,
          new: true,
          setDefaultsOnInsert: true,
        }
      );
    } catch (error) {
      console.error(
        `Error processing meal "${item.title}" (ID: ${item.id}):`,
        error.message
      );
    }
  }
  console.log("Dinner database synchronization complete.");
}

writeBreakFastDB(breakFast);
writeLunchDB(lunch);
writeDinnerDB(dinner);

//ROUTES
router.get("/diet-plans", async (req, res) => {
  res.json(dietPlans);
});

router.get("/breakfast", async (req, res) => {
  res.json(breakFast);
});

router.get("/Lunch", async (req, res) => {
  res.json(lunch);
});

router.get("/Dinner", async (req, res) => {
  res.json(dinner);
});

router.post("/addMeal", async (req, res) => {
  const { meal } = req?.body?.data;

  const newMealLog = new mealLog({
    mealType: meal.type,
    food: meal.name,
    calories: meal.calories,
    protein: meal.protein,
    carbs: meal.carbs,
    fat: meal.fat,
  });

  const savedMealLog = await newMealLog.save();

  if (savedMealLog) {
    console.log("Meal Log saved");
  }

  res.status(200).json(savedMealLog);
});

export default router;
