import { Router } from "express";
import * as usercontroller from "./controller/user.js"

const router = Router()
router.get("/user",usercontroller.getAllUsers)
router.post("/user",usercontroller.createUser)



export const userrouter = router

export default userrouter