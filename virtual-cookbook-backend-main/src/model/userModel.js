const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  names: { type: String, required: true },
  email: { type: String, required: true },
  avatarUrl: { type: String },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
