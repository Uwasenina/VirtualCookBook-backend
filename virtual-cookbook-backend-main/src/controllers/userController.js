// controllers/userController.js

import User from "../model/userModel";

const userController = {
  registerUser: async (req, res) => {
    const { email, password, names, avatarUrl } = req.body;
    try {
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ error: "Email is already registered" });
      }
      const newUser = await User.create({
        email,
        password,
        names,
        avatarUrl: avatarUrl || "https://i.imgur.com/6VBx3io.png",
      });

      return res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error });
    }
  },

  loginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      if (password !== user.password) {
        return res.status(401).json({ error: "Incorrect password" });
      }

      return res.status(200).json({ message: "User login successful", user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error });
    }
  },

  getUserById: async (req, res) => {
    const { userId } = req.params;

    try {
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await User.find();

      return res.status(200).json({ users });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error });
    }
  },
};

export default userController;
