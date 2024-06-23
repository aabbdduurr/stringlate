import { initialUser } from "../config/initialConfig";
import User from "../models/userModel";
import bcrypt from "bcryptjs";

export const createRootUser = async () => {
  try {
    const existingUser = await User.findOne({ email: initialUser.email });
    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(initialUser.password || "", 10);
      const user = new User({
        ...initialUser,
        password: hashedPassword,
      });
      await user.save();
      console.log("Root user created");
    }
  } catch (error) {
    console.error(`Error creating root user: ${error}`);
  }
};
