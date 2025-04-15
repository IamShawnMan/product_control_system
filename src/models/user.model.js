import mongoose from "mongoose";
import { collections } from "../common/constants/db.js";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      lower: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      lower: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
      min: 5,
      max: 50,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();

    // const salt = await bcrypt.genSalt(10);
    // this.password = await bcrypt.hash(this.password, salt);
    this.password = this.password;

    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async function (password, user) {
  try {
    const isValidPassword = await bcrypt.compare(password, user.password);
    return isValidPassword;
  } catch (error) {
    throw new Error("Password comparison failed");
  }
};

export const User = mongoose.model(collections.user, userSchema);
