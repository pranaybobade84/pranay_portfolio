import express, { urlencoded } from "express";
export const app = express();
import cookieParser from "cookie-parser";
import userRouter from "./routes/auth.js";
import experienceRouter from "./routes/experience.js";
import skillsRouter from "./routes/skillls.js";
import projectRouter from "./routes/projects.js";
import aboutRouter from "./routes/about.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import cors from "cors";
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
    origin: "http://localhost:5173",
  })
);

// Authentications
app.use("/api/admin", userRouter);
app.use("/api/user", userRouter);

// Experience Section
app.use("/api/experience", experienceRouter);

// Abput Section
app.use("/api/about", aboutRouter);

// Project Section
app.use("/api/projects", projectRouter);

// Skills Section
app.use("/api/skills", skillsRouter);

app.use(errorHandler);
