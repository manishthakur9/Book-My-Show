import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import movieRouter from "./routes/movieRoutes.js";
import bookingsRouter from "./routes/bookingRoutes.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

app.listen(5000, () => {
    mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.o4nmjmh.mongodb.net/?retryWrites=true&w=majority`).then(() =>
        console.log("Connected To Database And Server is running")
    ).catch((e) => console.log(e));
})
