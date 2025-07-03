import express, { urlencoded } from "express";
export const app = express();
import cookieParser from "cookie-parser";

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
