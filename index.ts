// index.ts
import express, { Request } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
// CORS Configuration
app.use(cors());

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

// Extend the Request interface to include the user property
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

// Define routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});

// Import and use the user router
import userRouter from "./server/router/user";
import { VerificationMail } from "./server/emails/Register";
app.use("/api/user", userRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Call VerificationMail inside an async function or handle it using .then()
// (async () => {
//   try {
//     const red = await VerificationMail({ email: "srivastavp891@gmail.com", token: "your_verification_token", name: "prashant srivastav" });
//     console.log({ red });
//   } catch (error) {
//     console.error("Error sending verification email:", error);
//   }
// })();
