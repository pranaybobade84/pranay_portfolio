import { Router } from "express";

const userRouter = Router();
import { registerUser } from "../controllers/auth.js";
import { upload } from "../middlewares/multer.js";

userRouter
  .route("/register")
  .post(upload.single('avatar'), registerUser);

export default userRouter;
