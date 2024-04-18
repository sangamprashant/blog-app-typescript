import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Retrieve MongoDB connection URI from environment variables
const mongoUrl = process.env.MONGO_URL;
if (!mongoUrl) {
  throw new Error("MongoDB connection URI is not provided");
}

// Connect to MongoDB
mongoose.connect(mongoUrl);

// Access the default connection to MongoDB
const db = mongoose.connection;

// Event listener for successful connection
db.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Event listener for connection error
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Define routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
