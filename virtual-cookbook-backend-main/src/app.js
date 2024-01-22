import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoute from "./routes/userRoute";
import bookRoute from "./routes/bookRoute";
import recipeRoute from "./routes/recipeRoute";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Todo app API",
  });
});

app.use("/user", userRoute);
app.use("/recipe", recipeRoute);
app.use("/book", bookRoute);

export default app;
