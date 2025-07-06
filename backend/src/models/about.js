import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default: "",
    },
    location: {
      type: String,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
    },
    resumeLink: {
      type: String,
    },
    socialLinks: {
      github: { type: String },
      linkedin: { type: String },
      twitter: { type: String },
      portfolio: { type: String },
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const About = mongoose.model("About", aboutSchema);
