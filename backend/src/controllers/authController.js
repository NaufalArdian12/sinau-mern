import bcrypt from "bcryptjs";

export const signUpAction = async (req, res) => {
  try {
    const body = req.body;

    const hashpassword = await bcrypt.hash(body.password, 12);

    const user = new User({
      name: body.name,
      email: body.email,
      password: hashpassword,
      role: "manager",
    });
    //action payment gateway midtrans

    await user.save();

    return res.json({
      message: "User created successfully",
      data: { midtrans_payment_url: "https://www.midtrans.com" },
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
