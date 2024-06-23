import express from "express";
import { ROUTES } from "../../constants/appConstants";
import * as authController from "../../controllers/authController";

const router = express.Router();

router.post(ROUTES.AUTH.LOGIN, authController.login);
router.post(ROUTES.AUTH.REGISTER, authController.register);
router.post(ROUTES.AUTH.LOGOUT, authController.logout);

router.get(ROUTES.AUTH.GOOGLE._, authController.googleAuth);
router.get(ROUTES.AUTH.GOOGLE.CALLBACK, authController.googleCallback);

router.get(ROUTES.AUTH.MICROSOFT._, authController.microsoftAuth);
router.get(ROUTES.AUTH.MICROSOFT.CALLBACK, authController.microsoftCallback);

router.get(ROUTES.AUTH.FACEBOOK._, authController.facebookAuth);
router.get(ROUTES.AUTH.FACEBOOK.CALLBACK, authController.facebookCallback);

export default router;
