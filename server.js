require('dotenv').config();
console.log("MONGO_URI from env:", process.env.MONGO_URI); // Debugging

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const couponRoutes = require("./routes/couponRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use("/api/coupons", couponRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
