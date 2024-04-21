import express from "express";
const router = express.Router();

import {
  userLogin,
  userProfile,
  userProfileById,
  userRegister,
  userVerify,
} from "./controls/userCtrl";
import { authMiddleware } from "../middleware";

// POST || to register the system
router.post("/register", userRegister);
// POST || to login to the system
router.post("/login", userLogin);
// GET || logged user profile
router.get("/profile", authMiddleware, userProfile);
// GET || searched user Profile
router.get("/profile/:id", userProfileById);
// GET || Verify the user using token
router.get("/verify/:token", userVerify);

export default router;
