import express from "express";
import * as appConfigController from "../../controllers/appConfigController";
import * as userConfigController from "../../controllers/userConfigController";

const router = express.Router();

router.get("/app/config", appConfigController.getAppConfig);
router.put("/app/config", appConfigController.updateAppConfig);

router.get("/user/:userId/config", userConfigController.getUserConfig);
router.put("/user/:userId/config", userConfigController.updateUserConfig);

export default router;
