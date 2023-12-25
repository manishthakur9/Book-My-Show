import express from "express";
import { getAllusers, singup } from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.get("/", getAllusers); 
userRouter.post("/signup", singup); 

export default userRouter;
