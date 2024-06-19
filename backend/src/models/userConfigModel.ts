import mongoose from "mongoose";
import { UserConfigType } from "../types/configTypes";

interface UserConfigModel extends UserConfigType, mongoose.Document {}

const userConfigSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  config: {
    theme: { type: String, required: true, default: "light" },
    language: { type: String, required: true, default: "en" },
  },
});

const UserConfig = mongoose.model<UserConfigModel>(
  "UserConfig",
  userConfigSchema
);

export default UserConfig;
