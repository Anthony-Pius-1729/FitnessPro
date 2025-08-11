import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Models/userSchema.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the user routes!");
});

router.post("/login", async (req, res) => {
  try {
    console.log(req.body.data);
    const { password, email } = req.body.data;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      const token = jwt.sign(
        { email: user.email, id: user._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );
      console.log("Generated token: ", token);
      res.json({
        message: "User logged in successfully!",
        token: token,
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    const existingUser = await User.find({ email, name });
    console.log(existingUser);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    if (savedUser) {
      const token = jwt.sign(
        { email: savedUser.email, id: savedUser._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );

      return res.status(201).json({
        message: "User registered successfully!",
        token: token,
      });
    }

    console.log(`${name} Signed Up Succesfully`);
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
