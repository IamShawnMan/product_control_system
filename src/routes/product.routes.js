import { Router } from "express";
import { productController } from "../controllers/index.js";
import { productSchema } from "../validations/index.js";
import { validateBody } from "../middlewares/validation.middleware.js";

export const productRouter = Router();

productRouter
  .post("/", validateBody(productSchema), productController.create)
  .get("/", productController.findAll)
  .get("/:id", productController.findOne)
  .put("/:id", productController.update)
  .delete("/:id", productController.delete);
