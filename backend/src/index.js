import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./utils/database.js";
import globalRoutes from "./routes/globalRoutes.js";
import authroutes from "./routes/authRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";

dotenv.config();

// ⬇️ TUNGGU koneksi siap sebelum pakai model
await connectDB();

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (_, res) => res.send("Hello Worldss"));

// endpoint cek koneksi
import mongoose from "mongoose";
app.get("/api/db-status", (_req, res) =>
  res.json({ readyState: mongoose.connection.readyState }) // 1 = connected
);

app.use("/api", globalRoutes);
app.use("/api", paymentRoutes);
app.use("/api", authroutes);
app.use("/api", courseRoutes);

export default app;
