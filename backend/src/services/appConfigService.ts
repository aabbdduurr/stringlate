import { initialAppConfig } from "../config/initialConfig";
import AppConfig from "../models/appConfigModel";
import { AppConfigType } from "../types/configTypes";

export const getAppConfig = async (): Promise<AppConfigType | null> => {
  return await AppConfig.findOne();
};

export const loadDefaultAppConfig = async (): Promise<AppConfigType | null> => {
  const configExists = await getAppConfig();
  if (!configExists) {
    return await AppConfig.create(initialAppConfig);
  }
  return configExists;
};

export const updateAppConfig = async (config: AppConfigType) => {
  return await AppConfig.findOneAndUpdate({}, config, {
    new: true,
    upsert: true,
    runValidators: true,
  });
};
