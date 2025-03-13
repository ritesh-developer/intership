const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
require("dotenv").config(); // Ensure .env is loaded

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("❌ MONGO_URI is not defined. Check your .env file.");
    }

    console.log("Attempting to connect to:", process.env.MONGO_URI); // Debugging

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
