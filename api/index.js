import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]); // Fix for querySrv ECONNREFUSED

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import userRouter from "./routes/User.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listingroute.js";

// .env file ka absolute path set karein (taaki hamesha api folder mein hi dhoondhe)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, ".env") });

// Debugging ke liye check karein ki MONGO load hua ya nahi
console.log("DEBUG - MONGO URI:", process.env.MONGO);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
