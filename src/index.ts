import app from "./app";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const PORT = process.env.PORT || 3021;
const URI = process.env.DB_URI ?? "";

(async () => {
  try {
    await mongoose.connect(URI);
    console.log("\nš Connected to mongodb");

    app.listen(PORT, () => {
      console.log("\n š Server running on PORT", PORT);
    });
  } catch (error) {
    console.log(error);
  }
})();
