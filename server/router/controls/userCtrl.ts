import express, { Request, Response } from "express";
const bcrypt = require("bcryptjs");
import crypto from "crypto";
import User, { IUser } from "../../models/users";
import jwt from "jsonwebtoken";
import { VerificationMail } from "../../emails/Register";

const userRegister = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !name || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    let user = await User.findOne({ email });

    // If user exists and is already verified, send message
    if (user && user.verified) {
      return res.status(400).json({
        message: "Email already registered and verified.",
        success: false,
        redirect: "/login", //done
      });
    }

    // If user exists but not verified, update user details and send verification email
    const token = crypto.randomBytes(32).toString("hex");
    if (user && !user.verified) {
      const saltRounds = 10; // Number of salt rounds, higher is more secure
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      user.name = name;
      user.password = hashedPassword;
      user.token = token;
    } else {
      // If user does not exist, create new user
      const saltRounds = 10; // Number of salt rounds, higher is more secure
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      user = new User({ name, email, password: hashedPassword, token });
    }

    await user.save();

    // Send verification email
    const isSend: boolean | false = await VerificationMail({
      email,
      token: token,
      name,
    });

    // If verification email fails to send, return error response
    if (!isSend) {
      return res.status(406).json({
        message: "User registration failed",
        success: false,
        redirect: "/failed-verification", //pending
      });
    }

    // Fetch user every 3 seconds until verification is verified or break the loop after 5 minutes
    let intervalCount = 0;
    const maxAttempts = 100; // Adjust the maximum attempts as needed
    const interval = setInterval(async () => {
      const userForLoop = await User.findOne({ email });
      if (userForLoop && userForLoop.verified) {
        clearInterval(interval);
        forLoginAndRegister(req, res, user, "User registered successfully.");
      } else {
        intervalCount++;
        if (intervalCount >= maxAttempts) {
          clearInterval(interval);
          res.status(500).json({
            message: "Verification timeout",
            success: false,
            redirect: "/timeout-verification", // pending
          });
        }
      }
      console.log({ intervalCount });
    }, 3000);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

const userLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user: IUser | null = await User.findOne({ email });
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

    if (!user.verified) {
      return res.status(403).json({
        message: "Please verify your email address.",
        success: false,
        redirect: "/not-verified",
      });
    }
    forLoginAndRegister(req, res, user, "Logged in successfully.");
  } catch (error) {
    console.error("Error in user login:", error);
    res.status(500).json({
      message: "Login failed",
      success: false,
    });
  }
};

const forLoginAndRegister = (
  req: Request,
  res: Response,
  user: any,
  message: string
) => {
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
      token,
      success: true,
      message: message,
    });
  });
};

const userProfile = async (req: Request, res: Response) => {
  try {
    if (!req.user?._id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User not authenticated",
      });
    }
    const userId = req.user._id;

    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    console.error("Failed to get the profile:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const userProfileById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    // Fetch user profile by ID
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    // Return the user profile
    return res.status(203).json({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    console.error("Failed to get the profile:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const userVerify = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    // Find the user by token
    const user: IUser | null = await User.findOne({ token });

    if (!user) {
      // If user is not found, return error
      return res.status(404).json({
        success: false,
        message:
          "User not found for the provided token, please check your mail.",
      });
    }

    // If user is found, set verified to true and save
    user.verified = true;
    user.token = "";
    await user.save();

    // Respond with success message
    res.status(200).json({
      success: true,
      message: "User verified successfully.",
    });
  } catch (error) {
    console.log("Failed to verify the user:", error);
    res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

export { userRegister, userLogin, userProfile, userProfileById, userVerify };
