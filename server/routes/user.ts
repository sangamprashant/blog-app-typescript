import express, { Request, Response } from "express";
import crypto from "crypto";
import User from "../models/users";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !name || !password)
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });

    const token = crypto.randomBytes(32).toString("hex");
    const newUser = new User({ name, email, password, token });
    await newUser.save();

    

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
