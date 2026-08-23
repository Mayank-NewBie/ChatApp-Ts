import {Request,Response} from "express"

export const registerUser=async(req:Request,res:Response)=>{
    const {username,password}=req.body

    console.log(username,password);
}