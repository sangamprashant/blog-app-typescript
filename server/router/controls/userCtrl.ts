import express, { Request, Response } from "express";
const bcrypt = require("bcryptjs");
import crypto from "crypto";
import User from "../../models/users";
import jwt from "jsonwebtoken";

const userRegister = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user)
      return res.status(400).json({
        message: "Email already exist.",
        success: false,
      });

    if (!email || !name || !password)
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });

    const token = crypto.randomBytes(32).toString("hex");

    // Hash and salt the password
    const saltRounds = 10; // Number of salt rounds, higher is more secure
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ name, email, password: hashedPassword, token });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

const userLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No user found with this email.",
      });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password.",
      });
    }

    // :TODO - Generate JWT token for authentication

    const payload = {
      user: {
        _id: user._id,
      },
    };

    jwt.sign(payload, process.env.AUTH_SECRET as string, (err, token) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({
          success: false,
          message: "Failed to generate token.",
        });
      }
      res.json({
        token: token,
        success: true,
        message: "Logged in successfully.",
      });
    });
  } catch (error) {
    console.error("Error in user login:", error);
    res.status(500).json({
      message: "Login failed",
      success: false,
    });
  }
};

const userProfile =  async (req: Request, res: Response) => {
  res.status(200).json({
    user:req.user,
    message:"user fetched successfully",
    success:true
  })
}

export { userRegister, userLogin ,userProfile};
