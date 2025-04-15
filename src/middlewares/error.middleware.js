import { StatusCodes } from "http-status-codes";
import { config } from "../config/index.js";

export const errorMiddleware = (err, req, res, next) => {
  console.error("Error: ", err.message, err.statusCode);

  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || "Internal server error";

  res.status(statusCode).json({
    status: "error",
    message,
    error: err.stack,
    data: null,
  });
  // if (config.nodeEnv == "development") {
  //   console.error("Error: ", err);
  //   const statusCode = err.statusCode || 500;
  //   const message = err.message || "Internal server error";
  //   res.status(statusCode).json({
  //     status: "error",
  //     message,
  //     error: err.stack,
  //     data: null,
  //   });
  //   // ...
  // } else if (config.nodeEnv === "production") {
  //   res.status(500).send("internal server error");
  //   // ...
  // } else {
  //   res.send(err.message);
  // }
};
