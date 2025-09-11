import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const verifyToken = async (req, res, next) => {
  const secretKey = process.env.JWT_SECRET ?? "";

  if (req?.headers?.authorization?.split("") === "JWT") {
    const decoded = jwt.verify(
      req.headers.authorization.split(" ")[1],
      secretKey
    );
    const user = await userModel.findById(
      decoded.data.id,
      "_id name email role"
    );

    if (!user) {
      return res.status(401).json({ message: "Token Expired" });
    }

    req.user = {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
    }
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
