import express from "express";
const router = express.Router();

import { userLogin, userProfile, userRegister } from "./controls/userCtrl";
import { authMiddleware } from "../middleware";


// POST || to register the system
router.post("/register", userRegister);
// POST || to login to the system
router.post("/login", userLogin);
router.get("/profile",authMiddleware ,userProfile )

export default router;
