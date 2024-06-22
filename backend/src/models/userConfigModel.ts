import mongoose from "mongoose";
import { UserConfigType } from "../types/configTypes";
import { LANGUAGES, THEMES } from "../constants/configConstants";

interface UserConfigModel extends UserConfigType, mongoose.Document {}

const userConfigSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  config: {
    theme: { type: String, required: true, enum: THEMES },
    language: { type: String, required: true, enum: LANGUAGES },
  },
});

const UserConfig = mongoose.model<UserConfigModel>(
  "UserConfig",
  userConfigSchema
);

export default UserConfig;
