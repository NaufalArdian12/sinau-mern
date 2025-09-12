import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const verifyToken = async (req, res, next) => {
  const secretKey = process.env.JWT_SECRET ?? "";
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("JWT ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, secretKey);
    const user = await userModel.findById(
      decoded.data._id,
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
    };

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};
