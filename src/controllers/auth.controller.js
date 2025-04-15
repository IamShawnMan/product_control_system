import { status } from "http-status";
import bcrypt from "bcrypt";

import { User } from "../models/index.js";
import { generateToken } from "../utils/generateToken.js";
import { config } from "../config/index.js";

export const authController = {
  signUp: async (req, res, next) => {
    try {
      const body = req.body;
      const user = await User.findOne(
        { email: body.email },
        "email _id"
      ).exec();

      console.log(user);
      if (!user) {
        const { password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          ...req.body,
          password: hashedPassword,
        });

        await newUser.save();
        res.send(newUser);
      }

      res.send("User already exists!;");
      return;
    } catch (err) {
      next(err);
    }
  },
  signIn: async (req, res, next) => {
    try {
      const body = req.body;

      const user = await User.findOne({ email: body.email });

      if (!user) {
        res.send("User not found!");
        return;
      }
      const { email, password } = req.body;
      const validaPass = await user.isValidPassword(password, user);

      console.log({ validaPass });
      if (!validaPass) {
        res.status(401).send("User detail wrong!");
        return;
      }

      const payload = {
        id: user._id,
        email: user.email,
      };
      const jwtSecret = config.secret;
      const token = await generateToken(payload, jwtSecret, {
        algorithm: "HS512",
        expiresIn: "1d",
      });

      res.send({
        message: "ok",
        data: {
          user: {
            ...payload,
          },
          jwt: token,
        },
      });
    } catch (err) {
      next(err);
    }
  },
};
