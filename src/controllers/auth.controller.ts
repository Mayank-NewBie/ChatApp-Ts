import {Request,Response} from "express"

export const registerUser=async(req:Request,res:Response)=>{
    const {username,password}=req.body
    
    return res.status(201).json({message:"username & password entered",username,password})

}