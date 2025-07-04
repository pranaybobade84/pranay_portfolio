import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export const uploadOnCloudinary = async (localPath) => {
  try {
    if (!localPath) {
      throw new Error("File path not found");
    }

    const response = await cloudinary.uploader.upload(localPath, {
      resource_type: "auto",
    });

    console.log("✅ Uploaded to Cloudinary:", response.url);

    if (fs.existsSync(localPath)) {
      fs.unlinkSync(localPath);
    }

    return response;
  } catch (err) {
    console.error("❌ Cloudinary Upload Error:", err.message || err);
    if (fs.existsSync(localPath)) {
      fs.unlinkSync(localPath);
    }

    return null;
  }
};
