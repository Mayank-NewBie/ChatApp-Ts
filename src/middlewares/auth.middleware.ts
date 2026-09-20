import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authCheck = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.token;
  if (!token) return res.status(404).json({ message: "Token Not Found" });
  const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

  if (!decoded)
    return res
      .status(404)
      .json({ message: "auth failed due to invalid token" });

  next();
};
