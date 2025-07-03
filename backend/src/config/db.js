import { app } from "../app.js";
import { connect } from "mongoose";

export const connectDB = async () => {
  try {
     const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("MONGODB_URI not found in env");

    console.log("MONGODB_URI",MONGODB_URI)
    const connectionInstance = await connect(process.env.MONGODB_URI);

    console.log(
      `✅ Connected to MongoDB at host: ${connectionInstance.connection.host}`
    );

    app.on("error", (err) => {
      console.error("Application error occurred:", err);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
};
