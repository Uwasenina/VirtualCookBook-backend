import express from "express";
import recipeController from "../controllers/recipeController";

const router = express.Router();

router.get("/", recipeController.getAllRecipes);
router.get("/:recipeId", recipeController.getRecipeById);
router.post("/", recipeController.createRecipe);
router.put("/:recipeId", recipeController.updateRecipe);
router.delete("/:recipeId", recipeController.deleteRecipe);




export default router;
