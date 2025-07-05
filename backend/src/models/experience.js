import { model, Schema } from "mongoose";

const experienceSchema = new Schema(
  {
    companyName: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    employmentType: {
      type: String,
      enum: ["Internship", "Full-time", "Part-time", "Contract"],
      default: "Full-time",
    },
    location: { type: String, trim: true },
    industry: { type: String, trim: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, default: null },
    currentlyWorking: { type: Boolean, default: false },
    description: { type: String, trim: true },
    techStack: { type: [String], default: [] },
    achievements: { type: [String], default: [] },
    website: { type: String, default: "" },
    isVisible: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Experience = model("Experience", experienceSchema);
