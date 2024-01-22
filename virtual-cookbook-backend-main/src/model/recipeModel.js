import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String },
  ingredients: [{ type: String }],
  instructions: { type: String },
  image: { type: String },
  duration: { type: Number },
  difficulty: { type: String },
  createdAt: { type: Date, default: Date.now },
});



export default mongoose.model("Recipe", recipeSchema);
