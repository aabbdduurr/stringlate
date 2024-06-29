import { Request, Response } from "express";
import * as appConfigService from "../services/appConfigService";

export const getAppConfig = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const config = await appConfigService.getAppConfig();
    if (!config) {
      res.status(404).send("App config not found");
      return;
    }
    res.status(200).json(config);
  } catch (error) {
    res.status(500).send(`Error getting app config: ${error}`);
  }
};

export const updateAppConfig = async (req: Request, res: Response) => {
  try {
    const isAdministrator = req.user?.isAdministrator === true;
    if (!isAdministrator) {
      return res.status(403).send("Unauthorized to update app config");
    }

    const newConfig = req.body;
    const updatedConfig = await appConfigService.updateAppConfig(newConfig);
    res.status(200).json(updatedConfig);
  } catch (error) {
    res.status(500).send(`Error updating app config: ${error}`);
  }
};
