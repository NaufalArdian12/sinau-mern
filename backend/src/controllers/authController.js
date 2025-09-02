import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import TransactionModel from "../models/transactionModel.js";

export const signUpAction = async (req, res) => {
  const midtransUrl = process.env.MIDTRANS_URL;
  const midtransAuthString = process.env.MIDTRANS_AUTH_STRING;

  try {
    const body = req.body;

    const hashpassword = bcrypt.hashSync(body.password, 12);

    const user = new User({
      name: body.name,
      email: body.email,
      photo: "default.jpg",
      password: hashpassword,
      role: "manager",
    });

    //action payment gateway midtrans

    const transaction = new TransactionModel({
      user: user._id,
      price: 100000,
    });

    const midtrans = await fetch(midtransUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${midtransAuthString}`,
      },
      body: JSON.stringify({
        transaction_details: {
          order_id: transaction._id.toString(),
          gross_amount: transaction.price,
        },
        customer_details: {
          first_name: user.name,
          email: user.email,
        },
      }),
    });

    const resMidtrans = await midtrans.json();

    transaction.set({
      midtrans_payment_url: resMidtrans.redirect_url,
    });

    await user.save();
    await transaction.save();

    return res.json({
      message: "Sign Up Success",
      data: { midtrans_payment_url: resMidtrans.redirect_url },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
