import { Schema, model } from "mongoose";

const skillSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Frontend", "Backend", "Database", "DevOps", "Tools", "Others"],
    },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
      default: "Intermediate",
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    progressPercent: {
      type: Number,
      min: 0,
      max: 100,
      default: 70,
    },
    type: {
      type: String,
      enum: ["language", "framework", "library", "tool", "other"],
      default: "tool",
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Skill = model("Skill", skillSchema);
