// routes/userRoutes.js
import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/:userId", userController.getUserById);

router.get("/", userController.getUsers);

export default router;
