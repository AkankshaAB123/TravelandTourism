import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load .env file

const connectDB = async () => {
  try {
    console.log("🔥 MongoDB connected successfully!");
  } catch (err) {
    console.error("🔥 MongoDB connection error:", err);
  }
};

connectDB();
