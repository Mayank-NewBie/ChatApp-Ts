import {Request,Response} from "express"
import pool from "../db/connection";


export const registerUser=async(req:Request,res:Response)=>{
    const {username,password}=req.body
    
    try{
        const res=await pool.query('INSERT INTO users(username,password) VALUES($1, $2) RETURNING *',[username,password]);
        console.log('Data Saved',res.rows[0])
    }catch(err){
        console.log('Error', err)
    }
    

}