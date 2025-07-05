import { Router } from "express";

const userRouter = Router();
import { login, logout, registerUser } from "../controllers/auth.js";
import { upload } from "../middlewares/multer.js";
import { verifyToken } from "../middlewares/verifyToken.js";

userRouter.route("/register").post(upload.single("avatar"), registerUser);

userRouter.route("/login").post(login);
userRouter.route("/logout").get(verifyToken,logout);

export default userRouter;
