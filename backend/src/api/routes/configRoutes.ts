import express from "express";
import * as appConfigController from "../../controllers/appConfigController";
import * as userConfigController from "../../controllers/userConfigController";

const router = express.Router();

router.get("/app", appConfigController.getAppConfig);
router.put("/app", appConfigController.updateAppConfig);

router.get("/user/:userId", userConfigController.getUserConfig);
router.put("/user/:userId", userConfigController.updateUserConfig);

export default router;
