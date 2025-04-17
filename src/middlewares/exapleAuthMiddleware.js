import { User } from "../models/index.js";
import bcrypt from "bcrypt";

export const authMiddleware = async (req, res, next) => {
  try {
    const str = (req.headers.authorization || "").split(" ")[1] || "";

    console.log(str);

    const [userEmail, userPassword] = Buffer.from(str, "base64")
      .toString()
      .split(":");

    const hashedPassword = await bcrypt.hash(userPassword, 10);

    const user = await User.findOne({ email: userEmail }).exec();

    console.log(user.email, userEmail);
    console.log(user.password, hashedPassword);

    if (!user) {
      return res.status(401).send("User not found");
    }

    if (
      userEmail &&
      userPassword &&
      userEmail === user.email &&
      hashedPassword === user.password
    ) {
      req.user = user;
      return next();
    }
    res.status(401).send("Authentication required");
  } catch (error) {
    console.log(error);
    next(error);
  }
};
