import { Router } from "express";

const userRouter = Router();
import { login, logout, registerUser } from "../controllers/auth.js";
import { upload } from "../middlewares/multer.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { asyncHandler } from "../utils/asyncHandler.js";

userRouter.route("/register").post(upload.single("avatar"), registerUser);

userRouter.route("/login").post(login);
userRouter.route("/logout").get(verifyToken, logout);
userRouter.get(
  "/verify-token",
  verifyToken,
  asyncHandler(async (req, res) => {
    res.status(200).json({ valid: true, role: req.user.role });
  })
);

export default userRouter;
