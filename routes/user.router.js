import express from "express";
import {userPost,userGet} from "../controllers/user.controller.js"
const userRouter = express.Router()

userRouter.get("/",userGet)
userRouter.post("/",userPost)

export default userRouter