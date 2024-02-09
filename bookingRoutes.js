import express from "express";
import { booking, getBookingById } from "../controllers/bookingController.js";

const bookingsRouter = express.Router();

bookingsRouter.get("/:id", getBookingById);
bookingsRouter.post("/", booking);
bookingsRouter.delete("/:id");
export default bookingsRouter;