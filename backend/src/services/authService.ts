import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../models/userModel";
import {
  JWT_EXPIRY,
  JWT_SECRET,
  REFRESH_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET,
} from "../constants/appConstants";

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

  const { token, refreshToken } = issueJwtTokens(user);
  return { user, token, refreshToken };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isPasswordValid = await bcrypt.compare(password, user.password || "");
  if (!isPasswordValid) throw new Error("Invalid password");

  const { token, refreshToken } = issueJwtTokens(user);
  const safeUser = user.toJSON();
  return { user: safeUser, token, refreshToken };
};

export const issueJwtTokens = (user: any) => {
  const refreshTokenId = crypto.randomBytes(40).toString("hex");

  const token = jwt.sign(
    {
      id: user._id,
      userId: user.userId,
      email: user.email,
      isAdministrator: user.isAdministrator,
      refreshTokenId: refreshTokenId,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRY }
  );

  const refreshToken = jwt.sign(
    { refreshTokenId: refreshTokenId },
    REFRESH_TOKEN_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );

  return { token, refreshToken };
};

export const refreshToken = async (token: string, refreshToken: string) => {
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET) as any;
    const decodedRefreshToken = jwt.verify(
      refreshToken,
      REFRESH_TOKEN_SECRET
    ) as any;

    if (decodedToken.refreshTokenId !== decodedRefreshToken.refreshTokenId) {
      throw new Error("Invalid refresh token");
    }

    const user = await User.findById(decodedToken.id);
    if (!user) throw new Error("User not found");

    const { token: newAccessToken, refreshToken: newRefreshToken } =
      issueJwtTokens(user);

    return { accessToken: newAccessToken, refreshToken: newRefreshToken };
  } catch (error) {
    throw new Error("Invalid refresh token");
  }
};
