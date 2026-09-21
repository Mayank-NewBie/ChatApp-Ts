import { Request, Response } from "express";
import pool from "../db/connection";

export const sendMessage = async (req: Request, res: Response) => {
  const { username, message } = req.body;
  try {
    const response = await pool.query(
      "INSERT INTO chats(username,message) VALUES($1,$2) RETURNING *",
      [username, message],
    );
    res.status(201).json({ message: "Chat posted", response: response });
  } catch (err) {
    console.log(err);
  }
};
