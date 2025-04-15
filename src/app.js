import express from "express";
import morgan from "morgan";

import { User } from "./models/index.js";
import {
  customMiddelware,
  newMiddeleware,
} from "./middlewares/custom.middleware.js";
import { roleGuard } from "./middlewares/guard.middleware.js";
import { appRouter } from "./routes/index.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.use("/api/v1", appRouter);
//role = user, moderator, guest, admin, superadmin

// app.use(
//   "/",
//   // roleGuard("user", "admin", "superadmin"),
//   newMiddeleware,
//   customMiddelware,
//   // customController.findAll,
// );

// app.use(ErrorMiddleware);

export default app;
