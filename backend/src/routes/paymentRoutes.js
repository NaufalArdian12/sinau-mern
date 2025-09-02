import express from "express";
import { processPayment } from "../controllers/paymentController.js";

const paymentRoutes = express.Router();

paymentRoutes.post("/handle-payment-midtrans", processPayment);

export default paymentRoutes;