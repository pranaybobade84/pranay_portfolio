import { Project } from "../models/projects.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const createProject = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    techStack,
    githubLink,
    liveLink,
    images,
    videoDemo,
    category,
    isFeatured,
    isVisible,
  } = req.body;

  if (!title?.trim() || !description?.trim()) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }

  const existing = await Project.findOne({ title: title.trim() });
  if (existing) {
    return res
      .status(409)
      .json({ message: "Project with this title already exists" });
  }
  const files = req.files;
  if (!files || files.length === 0) {
    return res.status(400).json({ message: "At least one image is required" });
  }

  const uploadedImages = await Promise.all(
    files.map(async (file) => {
      const uploaded = await uploadOnCloudinary(file);
      return uploaded.secure_url;
    })
  );

  const project = await Project.create({
    title: title.trim(),
    description,
    techStack: Array.isArray(techStack) ? techStack : [],
    githubLink,
    liveLink,
    images: uploadedImages,
    videoDemo,
    category: category || "Personal",
    order: order || 0,
    isFeatured: Boolean(isFeatured),
    isVisible: isVisible !== false,
  });

  res.status(201).json({
    message: "Project created successfully",
    project,
  });
});

const getAllProjects = asyncHandler(async (req, res) => {
  const { visibleOnly } = req.query;
  const filter = visibleOnly === "true" ? { isVisible: true } : {};
  const projects = await Project.find(filter).sort({ order: 1, createdAt: -1 });
  res.status(200).json({ count: projects.length, projects });
});

const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  await project.deleteOne();
  res.status(200).json({ message: "Project deleted successfully" });
});

const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  const allowedFields = [
    "title",
    "description",
    "techStack",
    "githubLink",
    "liveLink",
    "images",
    "videoDemo",
    "category",
    "order",
    "isFeatured",
    "isVisible",
  ];

  for (let key of allowedFields) {
    if (req.body.hasOwnProperty(key)) {
      if (
        (key === "title" || key === "description") &&
        !req.body[key]?.trim()
      ) {
        return res.status(400).json({ message: `${key} cannot be empty` });
      }

      if (key === "title") {
        project[key] = req.body[key].trim();
      } else if (Array.isArray(project[key])) {
        project[key] = Array.isArray(req.body[key])
          ? req.body[key]
          : project[key];
      } else {
        project[key] = req.body[key];
      }
    }
  }

  await project.save();
  res.status(200).json({ message: "Project updated successfully", project });
});

export { updateProject, getAllProjects, createProject, deleteProject };
