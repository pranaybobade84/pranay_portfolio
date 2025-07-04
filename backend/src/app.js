import express, { urlencoded } from "express";
export const app = express();
import cookieParser from "cookie-parser";
import userRouter from "./routes/auth.js";

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/admin", userRouter);
