import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./utils/database.js";
import globalRoutes from "./routes/globalRoutes.js";
import authroutes from "./routes/authRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import mongoose from "mongoose";

dotenv.config();
await connectDB();

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const allowed = [
  process.env.FRONTEND_URL, // https://nopallms.vercel.app
  "http://localhost:5173",
].filter(Boolean);

const corsOptions = {
  origin(origin, cb) {
    if (!origin || allowed.includes(origin)) return cb(null, true);
    return cb(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
// kalau mau handle preflight manual, pakai opsi yang sama:
app.options("*", cors(corsOptions));

app.get("/", (_, res) => res.send("Hello Worldss"));
app.get(
  "/api/db-status",
  (_req, res) => res.json({ readyState: mongoose.connection.readyState }) // 1 = connected
);

app.use("/api", globalRoutes);
app.use("/api", paymentRoutes);
app.use("/api", authroutes);
app.use("/api", courseRoutes);

export default app;
