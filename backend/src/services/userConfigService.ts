import UserConfig from "../models/userConfigModel";
import { UserConfigType } from "../types/configTypes";

export const getUserConfig = async (
  userId: string | undefined
): Promise<UserConfigType | null> => {
  return await UserConfig.findOne({ userId });
};

export const updateUserConfig = async (
  userId: string | undefined,
  config: UserConfigType
): Promise<UserConfigType> => {
  return await UserConfig.findOneAndUpdate(
    { userId },
    { config },
    {
      new: true,
      upsert: true,
      runValidators: true,
    }
  );
};
