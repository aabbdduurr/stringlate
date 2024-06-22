import mongoose from "mongoose";
import { AppConfigType } from "../types/configTypes";
import { DBS, ENVS, LANGUAGES, THEMES } from "../constants/configConstants";

interface AppConfigModel extends AppConfigType, mongoose.Document {}

const appConfigSchema = new mongoose.Schema({
  theme: { type: String, required: true, enum: THEMES },
  language: { type: String, required: true, enum: LANGUAGES },
  environments: [
    {
      env: { type: String, required: true, enum: ENVS },
      dbName: { type: String, required: true, enum: DBS },
    },
  ],
});

const AppConfig = mongoose.model<AppConfigModel>("AppConfig", appConfigSchema);

export default AppConfig;
