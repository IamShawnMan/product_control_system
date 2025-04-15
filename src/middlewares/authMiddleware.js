import jwt from "jsonwebtoken";
import { config } from "../config/index.js";
import { AppError } from "../utils/AppError.js";

const jwtSecret = config.secret;

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log(authHeader, "AAAAAAAAAAAAa");

  if (!authHeader) {
    return next(new AppError("Login first to continue", 401));
  }

  const token = authHeader.slice(7);
  try {
    const user = jwt.verify(token, jwtSecret, {
      algorithms: "HS512",
    });
    req.user = user;
    next();
  } catch (error) {
    return next(error);
  }
};
