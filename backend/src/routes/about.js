import { Router } from "express";

const aboutRouter = Router();
import { createAbout, deleteAbout, getAbout } from "../controllers/about.js";
import { upload } from "../middlewares/multer.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { authorizeRoles } from "../middlewares/authorizeRole.js";

aboutRouter
  .route("/")
  .post(
    verifyToken,
    authorizeRoles("admin"),
    upload.single("profile"),
    createAbout
  );

aboutRouter.route("/").get(verifyToken, authorizeRoles("admin"), getAbout);
aboutRouter
  .route("/:id")
  .get(verifyToken, authorizeRoles("admin"), deleteAbout);

export default aboutRouter;
