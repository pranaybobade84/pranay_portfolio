import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running at: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to start the server:", err);
    process.exit(1);
  });
