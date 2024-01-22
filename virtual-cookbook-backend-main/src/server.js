import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();
const port = 4000; // Change the port number as per your requirement

async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.DATABASE, {
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
}
connectToMongoDB();
app.listen(port, () => {
  console.log(`Server is open and running ${port}`);
});
