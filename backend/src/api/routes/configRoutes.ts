import express from "express";
import * as appConfigController from "../../controllers/appConfigController";
import * as userConfigController from "../../controllers/userConfigController";
import { ROUTES } from "../../constants/appConstants";

const publicRouter = express.Router();
const protectedRouter = express.Router();

publicRouter.get(ROUTES.CONFIG.APP, appConfigController.getAppConfig);

protectedRouter.put(ROUTES.CONFIG.APP, appConfigController.updateAppConfig);
protectedRouter.get(ROUTES.CONFIG.USER, userConfigController.getUserConfig);
protectedRouter.put(ROUTES.CONFIG.USER, userConfigController.updateUserConfig);

export { publicRouter, protectedRouter };
