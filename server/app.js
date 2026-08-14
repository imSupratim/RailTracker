import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import healthRoutes from "./routes/healthRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import trainRoutes from "./routes/trainRoutes.js";

import errorHandler from "./middleware/errorMiddleware.js";

const app = express();

app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: "https://railtracker-eight.vercel.app",
    credentials: true,
  })
);




app.use(express.json());
app.use(cookieParser());

app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/train", trainRoutes);

app.use(errorHandler);

export default app;