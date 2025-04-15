import { Router } from "express";
import { validateBody } from "../middlewares/validation.middleware.js";
import { authSchema } from "../validations/auth.validation.js";
import { authController } from "../controllers/auth.controller.js";

export const authRouter = Router();

authRouter
  .post("/signup", validateBody(authSchema.signUp), authController.signUp)
  .post("/signin", validateBody(authSchema.signIn), authController.signIn);
