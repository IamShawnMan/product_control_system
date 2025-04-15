import { Router } from "express";
import { categoryController } from "../controllers/index.js";
import { validateBody } from "../middlewares/validation.middleware.js";
import { categorySchema } from "../validations/index.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const categoryRouter = Router();

categoryRouter
  .post("/", validateBody(categorySchema), categoryController.create)
  .get("/", authMiddleware, categoryController.findAll)
  .get("/:id", categoryController.findOne)
  .put("/:id", categoryController.update)
  .delete("/:id", categoryController.delete);
