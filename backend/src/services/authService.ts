import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../models/userModel";
import { JWT_EXPIRY, JWT_SECRET } from "../constants/appConstants";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = new mongoose.Types.ObjectId().toString();
  const user = new User({
    userId,
    isRoot: false,
    isAdministrator: false,
    name,
    email,
    password: hashedPassword,
  });
  await user.save();
  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isPasswordValid = await bcrypt.compare(password, user.password || "");
  if (!isPasswordValid) throw new Error("Invalid password");

  const token = issueJwtToken(user);
  const safeUser = user.toJSON(); // This will return only specific fields
  return { user: safeUser, token };
};

export const issueJwtToken = (user: any) => {
  const token = jwt.sign(
    {
      id: user._id,
      userId: user.userId,
      email: user.email,
      isAdministrator: user.isAdministrator,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRY }
  );
  return token;
};
