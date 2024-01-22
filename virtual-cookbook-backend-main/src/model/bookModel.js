// models/booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe",
    required: true,
  },
  scheduledTime: {
    type: Date,
    required: false,
    default: new Date(Date.now() + 24 * 60 * 60 * 1000),
  },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Booking", bookingSchema);
