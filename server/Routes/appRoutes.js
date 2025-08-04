import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the user routes!");
});

router.post("/register", (req, res) => {
  res.json({ message: "User registered successfully!" });
});

export default router;
