import express from "express";
import authRouter from "./routes/auth.route";
import chatRouter from "./routes/chat.route";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/chat", chatRouter);

export default app;
