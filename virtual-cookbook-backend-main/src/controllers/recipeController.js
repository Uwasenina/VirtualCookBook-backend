// controllers/recipeController.js

import recipeModel from "../model/recipeModel";

const recipeController = {
  getAllRecipes: async (req, res) => {
    try {
      const recipes = await recipeModel.find();
      return res.status(200).json({ recipes });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error });
    }
  },

  getRecipeById: async (req, res) => {
    const { recipeId } = req.params;

    try {
      const recipe = await recipeModel.findById(recipeId);

      if (!recipe) {
        return res.status(404).json({ error: "Recipe not found" });
      }

      return res.status(200).json({ recipe });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error });
    }
  },

  createRecipe: async (req, res) => {
    const {
      title,
      category,
      ingredients,
      instructions,
      image,
      duration,
      difficulty,
    } = req.body;

    try {
      const newRecipe = await recipeModel.create({
        title,
        category,
        ingredients,
        instructions,
        image,
        duration,
        difficulty,
      });

      return res
        .status(201)
        .json({ message: "Recipe created successfully", recipe: newRecipe });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error });
    }
  },

  updateRecipe: async (req, res) => {
    const { recipeId } = req.params;
    const {
      title,
      category,
      ingredients,
      instructions,
      image,
      duration,
      difficulty,
    } = req.body;

    try {
      const updatedRecipe = await recipeModel.findByIdAndUpdate(
        recipeId,
        {
          title,
          category,
          ingredients,
          instructions,
          image,
          duration,
          difficulty,
        },
        { new: true }
      );

      if (!updatedRecipe) {
        return res.status(404).json({ error: "Recipe not found" });
      }

      return res.status(200).json({
        message: "Recipe updated successfully",
        recipe: updatedRecipe,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error });
    }
  },

  deleteRecipe: async (req, res) => {
    const { recipeId } = req.params;

    try {
      const deletedRecipe = await recipeModel.findByIdAndDelete(recipeId);

      if (!deletedRecipe) {
        return res.status(404).json({ error: error });
      }

      return res.status(200).json({
        message: "Recipe deleted successfully",
        recipe: deletedRecipe,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error });
    }
  },
};

export default recipeController;
