import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/auth.controller";
import { authCheck } from "../middlewares/auth.middleware";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", authCheck, logoutUser);

export default router;
