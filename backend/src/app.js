import express, { urlencoded } from "express";
export const app = express();
import cookieParser from "cookie-parser";
import userRouter from "./routes/auth.js";
import experienceRouter from "./routes/experience.js";
import skillsRouter from "./routes/skillls.js";
import projectRouter from "./routes/projects.js";
import aboutRouter from "./routes/about.js";
import { errorHandler } from "./middlewares/errorHandler.js";

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// Authentications
app.use("/api/admin", userRouter);
app.use("/api/user", userRouter);

// Experience Section
app.use("/api/experience", experienceRouter);

// Abput Section
app.use("/api/about", aboutRouter);

// Project Section
app.use("/api/project", projectRouter);

// Skills Section
app.use("/api/skills", skillsRouter);

app.use(errorHandler);
