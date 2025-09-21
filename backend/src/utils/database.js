import mongoose from "mongoose";

let cached = global.__mongoose;
if (!cached) cached = global.__mongoose = { conn: null, promise: null };

export default async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const uri = process.env.DATABASE_URL;
    if (!uri) throw new Error("DATABASE_URL not set");
    cached.promise = mongoose.connect(uri, {
      serverSelectionTimeoutMS: 20000,
      connectTimeoutMS: 20000,
      socketTimeoutMS: 60000,
    }).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
