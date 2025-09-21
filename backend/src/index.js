import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./utils/database.js";
import globalRoutes from "./routes/globalRoutes.js";
import authroutes from "./routes/authRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import cors from "cors";

dotenv.config();

// ⬇️ TUNGGU koneksi siap sebelum pakai model
await connectDB();

const allowed = [process.env.FRONTEND_URL, "http://localhost:5173"].filter(
  Boolean
);
const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(
  cors({
    origin(origin, cb) {
      // allow no-origin (e.g. curl, Postman) & allowed list
      if (!origin || allowed.includes(origin)) return cb(null, true);
      return cb(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// pastikan preflight OPTIONS di-handle
app.options("*", cors());

app.get("/", (_, res) => res.send("Hello Worldss"));

// endpoint cek koneksi
import mongoose from "mongoose";
app.get(
  "/api/db-status",
  (_req, res) => res.json({ readyState: mongoose.connection.readyState }) // 1 = connected
);

app.use("/api", globalRoutes);
app.use("/api", paymentRoutes);
app.use("/api", authroutes);
app.use("/api", courseRoutes);

export default app;
