import Booking from "../model/bookModel";

const bookingController = {
  bookRecipe: async (req, res) => {
    const { recipeId, scheduledTime, notes } = req.body;
    const { userId } = req.params;

    try {
      const existingBooking = await Booking.findOne({ userId, recipeId });

      if (existingBooking) {
        return res
          .status(400)
          .json({ error: "Recipe already booked by the user" });
      }

      const newBooking = await Booking.create({
        userId,
        recipeId,
        scheduledTime,
        notes,
      });

      return res
        .status(201)
        .json({ message: "Recipe booked successfully", booking: newBooking });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error });
    }
  },

  getBookingsByUser: async (req, res) => {
    const { userId } = req.params;

    try {
      const bookings = await Booking.find({ userId }).populate("recipeId");

      return res.status(200).json({ bookings });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error });
    }
  },
  getBookingsByRecipe: async (req, res) => {
    const { recipeId } = req.params;
    try {
      const bookings = await Booking.find({ recipeId });

      return res.status(200).json({ bookings });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error });
    }
  },

  deleteBooking: async (req, res) => {
    const { bookingId } = req.params;
    try {
      const booking = await Booking.findByIdAndDelete(bookingId);

      if (!booking) {
        return res.status(404).json({ error: "Booking not found" });
      }

      return res.status(200).json({ message: "Booking deleted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error });
    }
  },
};

export default bookingController;
