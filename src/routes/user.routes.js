import { Router } from "express";
import { userController } from "../controllers/index.js";
// import { authMiddleware } from "../middlewares/authMiddleware.js";
import { authMiddleware } from "../middlewares/exapleAuthMiddleware.js";

export const userRouter = Router();

// userRouter.get("/profile", authMiddleware, userController.profile);
userRouter.get("/profile", authMiddleware, userController.profile);
