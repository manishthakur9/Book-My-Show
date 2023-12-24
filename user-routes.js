import express from "express";
import { getAllusers } from "../controllers/user-controller"

const userRouter = express.Router();

userRouter.get("/", getAllusers); 

export default userRouter;
