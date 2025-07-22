import { Skill } from "../models/skills.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addSkill = asyncHandler(async (req, res) => {
  const {
    name,
    category,
    level,
    isVisible,
    isFeatured,
    progressPercent,
    type,
    experienceInYears,
  } = req.body;

  if (!name || !category) {
    return res.status(400).json({ message: "Name and category are required" });
  }

  const skill = await Skill.create({
    name,
    category,
    level,
    isVisible,
    isFeatured,
    progressPercent,
    type,
    experienceInYears,
  });

  res.status(201).json({ message: "Skill added successfully", skill });
});

const updateSkill = asyncHandler(async (req, res) => {
  const skill = await Skill.findById(req.params.id);
  if (!skill) return res.status(404).json({ message: "Skill not found" });

  const fields = [
    "name",
    "category",
    "level",
    "isVisible",
    "isFeatured",
    "progressPercent",
    "type",
    "experienceInYears",
  ];

  fields.forEach((field) => {
    if (req.body[field] !== undefined) {
      skill[field] = req.body[field];
    }
  });

  await skill.save();
  res.status(200).json({ message: "Skill updated", skill });
});

const deleteSkill = asyncHandler(async (req, res) => {
  const skill = await Skill.findById(req.params.id);
  if (!skill) return res.status(404).json({ message: "Skill not found" });

  await skill.deleteOne();
  res.status(200).json({ message: "Skill deleted" });
});

const getAllSkills = asyncHandler(async (req, res) => {
  const { visibleOnly } = req.query;

  const filter = visibleOnly === "true" ? { isVisible: true } : {};
  const skills = await Skill.find(filter)
  if (!skills) return res.status(404).json({ message: "Skills not found" });

  res
    .status(200)
    .json({ message: "Skills fetched", count: skills.length, skills });
});

export { addSkill, updateSkill, deleteSkill, getAllSkills };
