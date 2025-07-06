import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    techStack: {
      type: [String],
      default: [],
    },
    githubLink: {
      type: String,
      trim: true,
    },
    liveLink: {
      type: String,
      trim: true,
    },
    images: {
      type: [String],
      default: [],
    },
    videoDemo: {
      type: String,
    },
    category: {
      type: String,
      enum: ["Personal", "Freelance", "Internship", "Client", "Other"],
      default: "Personal",
    },

    isFeatured: {
      type: Boolean,
      default: false,
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

export const Project = mongoose.model("Project", projectSchema);
