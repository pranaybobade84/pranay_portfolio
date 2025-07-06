import { About } from "../models/about.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const createAbout = asyncHandler(async (req, res) => {
  const {
    name,
    title,
    bio,
    profileImage,
    location,
    email,
    phone,
    resumeLink,
    socialLinks,
    isVisible,
  } = req.body;

  if (!name?.trim() || !title?.trim() || !bio?.trim()) {
    return res
      .status(400)
      .json({ message: "Name, title, and bio are required" });
  }
  const profileFile = req.file.path;

  const profile = await uploadOnCloudinary(profileFile);

  const about = await About.create({
    name: name.trim(),
    title: title.trim(),
    bio,
    profileImage: profile?.secure_url,
    location,
    email,
    phone,
    resumeLink,
    socialLinks,
    isVisible: isVisible !== false,
  });

  res
    .status(201)
    .json({ message: "About section created successfully", about });
});

const getAbout = asyncHandler(async (req, res) => {
  const about = await About.findOne();
  if (!about) {
    return res.status(404).json({ message: "About info not found" });
  }
  res.status(200).json(about);
});

const deleteAbout = asyncHandler(async (req, res) => {
  const about = await About.findById(req.params.id);
  if (!about) {
    return res.status(404).json({ message: "About entry not found" });
  }

  await about.deleteOne();
  res.status(200).json({ message: "About entry deleted successfully" });
});

export { deleteAbout, createAbout, getAbout };
