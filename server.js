import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./server/routes/todoRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Routes
app.use("/api/todos", todoRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
