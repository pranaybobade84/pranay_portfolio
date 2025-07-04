import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  console.log(req.body);
  console.log(req.file);
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

  const avatarPath =req.file.path

  const avatar = await uploadOnCloudinary(avatarPath);

  const newUser = new User({
    userName,
    email,
    password,
    role,
    avatar: avatar.secure_url || "",
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

export { registerUser };
