import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { authorizeRoles } from "../middlewares/authorizeRole.js";
import {
  createExperience,
  deleteExperience,
  getAllExperiences,
  updateExperience,
} from "../controllers/experience.js";

const experienceRouter = Router();

experienceRouter
  .route("/")
  .post(verifyToken, authorizeRoles("admin"), createExperience);

experienceRouter
  .route("/:id")
  .patch(verifyToken, authorizeRoles("admin"), updateExperience);

experienceRouter
  .route("/:id")
  .delete(verifyToken, authorizeRoles("admin"), deleteExperience);

experienceRouter
  .route("/")
  .get(  getAllExperiences);

export default experienceRouter;
