import { app } from "../app.js";
import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("MONGODB_URI not found in env");
    const connectionInstance = await connect(uri);

    console.log(
      `✅ Connected to MongoDB at host: ${connectionInstance.connection.host}`
    );

    app.on("error", (err) => {
      console.error("Application error occurred:", err);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.stack);
    process.exit(1);
  }
};
