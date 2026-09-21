import express from "express";
import { sendMessage } from "../controllers/chat.controller";
import { authCheck } from "../middlewares/auth.middleware";
const router = express.Router();

router.post("/send", authCheck, sendMessage);

// router.get("/receive");

export default router;
