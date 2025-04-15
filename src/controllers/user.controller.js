import { User } from "../models/index.js";
import { AppError } from "../utils/AppError.js";
export const userController = {
  profile: async (req, res, next) => {
    try {
      const currentUser = req.user;
      const user = await User.findOne(
        { email: currentUser.email },
        "fullName email _id"
      ).exec();
      if (!user) {
        const error = new AppError("User not found", 404);
        return next(error);
      }
      res.json({
        data: {
          user,
        },
      });
    } catch (err) {
      next(err);
    }
  },
  update: (req, res, next) => {
    try {
      //
    } catch (err) {
      next(err);
    }
  },
  delete: (req, res, next) => {
    try {
      //
    } catch (err) {
      next(err);
    }
  },
};
