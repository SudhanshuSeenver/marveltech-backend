// src/app.js
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const emailRoutes = require("./routes/emailRoutes");

const app = express();

// Array of allowed origins
// const allowedOrigins = [
//   "http"//localhost:3000",
//   "https://your-allowed-origin2.com",
//   "https://your-allowed-origin3.com",
// ];

// CORS configuration
const corsOptions = {
  // origin: (origin, callback) => {
  //   // Allow requests with no origin (like mobile apps or curl requests)
  //   if (!origin || allowedOrigins.indexOf(origin) !== -1) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error("Not allowed by CORS"));
  //   }
  // },
  origin: "*",
  methods: ["POST"], // Specify allowed methods
};

// Middleware
app.use(helmet());
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// API Routes
app.use("/api/email", emailRoutes);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Something went wrong!" });
});

module.exports = app;
