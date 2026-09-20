import { Request, Response } from "express";
import pool from "../db/connection";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

export const registerUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const hashedpassword = await bcrypt.hash(password, 10);

  try {
    const response = await pool.query(
      "INSERT INTO users(username,password) VALUES($1, $2) RETURNING *",
      [username, hashedpassword],
    );
    return res.status(201).json({
      message: "username and password is added in the users table",
      response: response,
    });
  } catch (err) {
    console.log("Error", err);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const queryText = "SELECT * FROM users WHERE username=$1";
    const value = [username];

    const result = await pool.query(queryText, value);
    const hashedpassword=result.rows[0].password
    const passwordValue=await bcrypt.compare(password,hashedpassword);
    if(!passwordValue) return res.status(404).json({message:"Authorized User"});

    const payload={
      id:result.rows[0]._id,
      username:username
    }
    
    const token=jwt.sign(payload,process.env.JWT_SECRET as string,)

    res.cookie("token",token,{
      httpOnly:true,
      secure:false,
      sameSite:'lax',
      path:'/'
    })
    
    res.status(201).json({
      message:'Successfully Logged In',
    })

  } catch (err:unknown) {
    if(err instanceof Error){
      throw new Error("Some Went Wrong",{cause:err})
    }
  }
};

export const logoutUser=async(req:Request,res:Response)=>{
  res.clearCookie('token',{
    httpOnly:true,
    secure:true,
    sameSite:'strict'
  })

  res.status(200).json({
    message:'user logged out'
  })
}