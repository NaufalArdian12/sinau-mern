import TransactionModel from "../models/transactionModel.js";

export const handlePayment = async (req, res) => {
  try {
    const body = req.body;

    const order_id = body.order_id;

    switch (body.transaction_status) {
      case "capture":
      case "settlement":
        await TransactionModel.findByIdAndUpdate(order_id, {
          status: "completed",
        });
        break;
      case "deny":
      case "cancel":
      case "failure":
      case "expire":
        await TransactionModel.findByIdAndUpdate(order_id, {
          status: "failed",
        });
        break;
      default:
        break;
    }

    return res.status(200).json({ message: "success", data: {} });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
