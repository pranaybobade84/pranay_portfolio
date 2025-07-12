import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
const options = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "None",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};
const generateTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (err) {
    console.error("Token generation error:", err);
    throw new Error("Failed to generate tokens");
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  const isAdmin = req.originalUrl.includes("/admin");
  const role = isAdmin ? "admin" : "user";
  if (
    [userName, email, password].some(
      (data) => !data || data.trim().length === 0
    )
  ) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const userExists = await User.findOne({
    $or: [{ userName }, { email }],
  });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  let avatarUrl = "";
  if (req.file && req.file.path) {
    const cloudinaryResponse = await uploadOnCloudinary(req.file.path);
    avatarUrl = cloudinaryResponse?.secure_url || "";
  }

  const newUser = new User({
    userName,
    email,
    password,
    role,
    avatar: avatarUrl,
  });

  await newUser.save();

  return res.status(201).json({
    message: `${role} registered successfully`,
    user: {
      userName: newUser.userName,
      email: newUser.email,
      role: newUser.role,
      avatar: newUser.avatar,
    },
  });
});

const login = asyncHandler(async (req, res) => {
  const { userNameOrEmail, password } = req.body;
  if (!userNameOrEmail || !password) {
    return res.status(400).json({ message: "Invalid Credientials" });
  }

  const user = await User.findOne({
    $or: [{ userName: userNameOrEmail }, { email: userNameOrEmail }],
  });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const isUserValid = await user.comparePassword(password);
  if (!isUserValid) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const { accessToken, refreshToken } = await generateTokens(user._id);

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json({
      user: loggedInUser,
      accessToken,
      refreshToken,
      message: "User Logeed in successfully",
    });
});

const logout = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const user = await User.findById(_id);

  user.refreshToken = undefined;
  await user.save();
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json({ message: "Logged Out Successfully" });
});
export { registerUser, login, logout };
