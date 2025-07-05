import express, { urlencoded } from "express";
export const app = express();
import cookieParser from "cookie-parser";
import userRouter from "./routes/auth.js";
import experienceRouter from "./routes/experience.js";
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// Authentications
app.use("/api/admin", userRouter);
app.use("/api/user", userRouter);

// Experience Section
app.use("/api/experience", experienceRouter);
