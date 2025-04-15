import { Router } from "express";
import { userController } from "../controllers/index.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const userRouter = Router();

userRouter.get("/profile", authMiddleware, userController.profile);
