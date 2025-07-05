import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { authorizeRoles } from "../middlewares/authorizeRole.js";
import {
  addSkill,
  deleteSkill,
  getAllSkills,
  updateSkill,
} from "../controllers/skills.js";

const skillsRouter = Router();

skillsRouter.route("/").post(verifyToken, authorizeRoles("admin"), addSkill);

skillsRouter
  .route("/:id")
  .patch(verifyToken, authorizeRoles("admin"), updateSkill);

skillsRouter
  .route("/:id")
  .delete(verifyToken, authorizeRoles("admin"), deleteSkill);

skillsRouter.route("/").get(verifyToken, authorizeRoles("admin"), getAllSkills);

export default skillsRouter;
