
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB()

// Health check
app.get("/", (req, res) => {
  res.json({
    message: "Registration API is running",
    status: "success",
  });
});

// Routes
app.use("/api/auth", authRoutes);

// Export app for Vercel
module.exports = app;

