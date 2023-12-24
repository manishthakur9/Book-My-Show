import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes";
dotenv.config();
const app = express();

//middlewares
app.use("/user", userRouter);

mongoose
   .connect(
        `mongodb+srv://manishvipm:${process.env.MONGODB_PASSWORD}@cluster0.v0fznso.mongodb.net/?retryWrites=true&w=majority`
    )
     .then(()=>
        app.listen(5000, () =>
            console.log("Connected TO Database And Server is running")
        )
    )
.catch((e) => console.log(e)

);





