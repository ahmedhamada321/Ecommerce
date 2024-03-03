import User from "../../../db/models/user.js";
import { asyncHndler } from "../../../utils/errorHandling.js"


export const createUser = asyncHndler( async (req,res)=>{
    const {name ,email ,password}= req.body
    console.log(name,email,password);
    await User.create({name ,email ,password})
    res.json({message:"user created", status:200})
})

export const getAllUsers = async (req,res)=>{
    const users = await User.find()
    res.json({message:"done",users})
}