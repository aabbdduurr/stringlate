import mongoose from "mongoose";
import { AppConfigType } from "../types/configTypes";

interface AppConfigModel extends AppConfigType, mongoose.Document {}

const appConfigSchema = new mongoose.Schema({
  theme: { type: String, required: true, default: "light" },
  language: { type: String, required: true, default: "en" },
  environments: [
    {
      env: { type: String, required: true },
      dbName: { type: String, required: true },
    },
  ],
});

const AppConfig = mongoose.model<AppConfigModel>("AppConfig", appConfigSchema);

export default AppConfig;
