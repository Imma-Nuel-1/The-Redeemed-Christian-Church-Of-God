import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Church API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
