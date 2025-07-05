import express, { urlencoded } from "express";
export const app = express();
import cookieParser from "cookie-parser";
import userRouter from "./routes/auth.js";
import experienceRouter from "./routes/experience.js";
import skillsRouter from "./routes/skillls.js";
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// Authentications
app.use("/api/admin", userRouter);
app.use("/api/user", userRouter);
app.use("/api/skills", skillsRouter);

// Experience Section
app.use("/api/experience", experienceRouter);
