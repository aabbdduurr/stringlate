import { Request, Response } from "express";
import * as userConfigService from "../services/userConfigService";

export const getUserConfig = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.userId;
    const config = await userConfigService.getUserConfig(userId);
    if (!config) {
      res.status(404).send("User config not found");
      return;
    }
    res.status(200).json(config);
  } catch (error) {
    res.status(500).send(`Error getting user config: ${error}`);
  }
};

export const updateUserConfig = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.userId;
    const newConfig = req.body;
    const updatedConfig = await userConfigService.updateUserConfig(
      userId,
      newConfig
    );
    res.status(200).json(updatedConfig);
  } catch (error) {
    res.status(500).send(`Error updating user config: ${error}`);
  }
};
