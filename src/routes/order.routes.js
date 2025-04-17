import { Router } from "express";
import { orderController } from "../controllers/index.js";
import { authMiddleware } from "../middlewares/exapleAuthMiddleware.js";

export const orderRouter = Router();

orderRouter
  .post("/", authMiddleware, orderController.create)
  .get("/", orderController.findAll)
  .get("/:id", orderController.findOne)
  .put("/:id", authMiddleware, orderController.update)
  .delete("/:id", authMiddleware, orderController.delete);
