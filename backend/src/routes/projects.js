import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { authorizeRoles } from "../middlewares/authorizeRole.js";
import {
  createProject,
  deleteProject,
  getAllProjects,
  updateProject,
} from "../controllers/projects.js";
import { upload } from "../middlewares/multer.js";

const projectRouter = Router();

projectRouter
  .route("/")
  .post(
    verifyToken,
    authorizeRoles("admin"),
    upload.array("images", 5),
    createProject
  );

projectRouter
  .route("/:id")
  .patch(verifyToken, authorizeRoles("admin"), updateProject);

projectRouter
  .route("/:id")
  .delete(verifyToken, authorizeRoles("admin"), deleteProject);

projectRouter
  .route("/")
  .get(verifyToken, authorizeRoles("admin"), getAllProjects);

export default projectRouter;
