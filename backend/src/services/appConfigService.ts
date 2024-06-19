import AppConfig from "../models/appConfigModel";
import { AppConfigType } from "../types/configTypes";

export const getAppConfig = async (): Promise<AppConfigType | null> => {
  return await AppConfig.findOne();
};

export const updateAppConfig = async (config: AppConfigType) => {
  return await AppConfig.findOneAndUpdate(
    {},
    { config },
    { new: true, upsert: true }
  );
};
