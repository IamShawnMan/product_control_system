import { Router } from "express";
import { authRouter } from "./auth.routes.js";
import { categoryRouter } from "./category.routes.js";
import { productRouter } from "./product.routes.js";
export const appRouter = Router();

appRouter.use("/auth", authRouter);
appRouter.use("/category", categoryRouter);
appRouter.use("/product", productRouter);
// appRouter.use(userRouter);
