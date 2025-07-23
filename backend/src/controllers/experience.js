import { Experience } from "../models/experience.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createExperience = asyncHandler(async (req, res) => {
  const {
    companyName,
    position,
    employmentType,
    location,
    industry,
    startDate,
    endDate,
    currentlyWorking,
    description,
    techStack,
    achievements,
    website,
    isVisible,
  } = req.body;

  if (!companyName || !position || !startDate) {
    return res.status(400).json({
      message: "Company name, position, and start date are required.",
    });
  }

  const alreadyExists = await Experience.findOne({
    companyName,
    position,
    startDate,
  });

  if (alreadyExists) {
    return res.status(409).json({
      message:
        "Experience with same company, position, and start date already exists.",
    });
  }

  const experience = await Experience.create({
    companyName,
    position,
    employmentType,
    location,
    industry,
    startDate,
    endDate: currentlyWorking ? null : endDate,
    currentlyWorking,
    description,
    techStack,
    achievements,
    website,
    isVisible,
  });

  return res.status(201).json({
    message: "Experience added successfully",
    experience,
  });
});

const updateExperience = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Experience ID is required" });
  }

  const experience = await Experience.findById(id);

  if (!experience) {
    return res.status(404).json({ message: "Experience not found" });
  }

  const fieldsToUpdate = [
    "companyName",
    "position",
    "employmentType",
    "location",
    "industry",
    "startDate",
    "endDate",
    "currentlyWorking",
    "description",
    "techStack",
    "achievements",
    "website",
    "isVisible",
  ];

  fieldsToUpdate.forEach((field) => {
    if (req.body[field] !== undefined) {
      experience[field] = req.body[field];
    }
  });

  if (experience.currentlyWorking) {
    experience.endDate = null;
  }

  await experience.save();

  res.status(200).json({
    message: "Experience updated successfully",
    experience,
  });
});

const getAllExperiences = asyncHandler(async (req, res) => {
  const experiences = await Experience.find().sort({ startDate: -1 });
  if (!experiences) {
    return res.status(404).json({ message: "Experience not found" });
  }
  res.status(200).json({
    message: "All experiences fetched",
    count: experiences.length,
    experiences,
  });
});
const deleteExperience = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Experience ID is required" });
  }
  const experience = await Experience.findById(id);

  if (!experience) {
    return res.status(404).json({ message: "Experience not found" });
  }

  await experience.deleteOne();

  res.status(200).json({ message: "Experience deleted successfully" });
});

const getExperienceById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Experience ID is required" });
  }

  const experience = await Experience.findById(id);
  if (!experience) {
    return res.status(400).json({ message: "Experience not found" });
  }

  res.status(200).json({ experience });
});

export {
  createExperience,
  updateExperience,
  getAllExperiences,
  deleteExperience,
  getExperienceById,
};
