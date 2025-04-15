import { User } from "../models/index.js";

const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await user.isValidPassword(password);
    if (!isMatch) {
      throw new Error("Invalid password");
    }

    console.log("Login successful!");
    // Proceed with login logic (e.g., create a session)
  } catch (error) {
    console.error("Login failed:", error.message);
  }
};
