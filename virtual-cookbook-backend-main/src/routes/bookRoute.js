// routes/bookingRoutes.js
import express from "express";
import bookingController from "../controllers/bookController";

const router = express.Router();

router.post("/:userId", bookingController.bookRecipe);
router.get("/user/:userId", bookingController.getBookingsByUser);
router.get("/recipe/:recipeId", bookingController.getBookingsByRecipe);

router.delete("/:bookingId", bookingController.deleteBooking);

export default router;
