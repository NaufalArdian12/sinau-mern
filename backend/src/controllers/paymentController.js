import TransactionModel from "../models/transactionModel.js";

export const handlePayment = async (req, res) => {
  try {
    const body = req.body;

    const order_id = body.order_id;

    switch (body.transaction_status) {
      case "capture":
        // For credit card, we need to check whether transaction is challenge by FDS or not
        if (body.fraud_status === "accept") {
          // TODO set transaction as success
          await TransactionModel.findOneAndUpdate(
            { _id: order_id },
            { status: "success" }
          );
        } else {
          // TODO set transaction as failed
          await TransactionModel.findOneAndUpdate(
            { _id: order_id },
            { status: "failed" }
          );
        }
        break;
      case "settlement":
        // TODO set transaction as success
        await TransactionModel.findOneAndUpdate(
          { _id: order_id },
          { status: "success" }
        );
        break;
      case "deny":
        // TODO set transaction as failed
        await TransactionModel.findOneAndUpdate(
          { _id: order_id },
          { status: "failed" }
        );
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
