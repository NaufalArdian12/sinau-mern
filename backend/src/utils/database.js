import mongoose from "mongoose";

export default function connectDB() {
  const DATABASE_URL = process.env.DATABASE_URL ?? "";

  try {
    mongoose.connect(DATABASE_URL);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  const dbConn = mongoose.connection

  dbConn.once("open", () => {
    console.log(`Connected to MongoDB at ${DATABASE_URL}`);
  });

  dbConn.on("error", (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(1);
  });
}