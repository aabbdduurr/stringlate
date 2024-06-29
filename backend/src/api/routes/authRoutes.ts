import express from "express";
import { ROUTES } from "../../constants/appConstants";
import * as authController from "../../controllers/authController";

const publicRouter = express.Router();
const protectedRouter = express.Router();

publicRouter.post(ROUTES.AUTH.LOGIN, authController.login);
publicRouter.post(ROUTES.AUTH.REFRESH_TOKEN, authController.refreshToken);

publicRouter.get(ROUTES.AUTH.GOOGLE._, authController.googleAuth);
publicRouter.get(ROUTES.AUTH.GOOGLE.CALLBACK, authController.googleCallback);

publicRouter.get(ROUTES.AUTH.MICROSOFT._, authController.microsoftAuth);
publicRouter.get(
  ROUTES.AUTH.MICROSOFT.CALLBACK,
  authController.microsoftCallback
);

publicRouter.get(ROUTES.AUTH.FACEBOOK._, authController.facebookAuth);
publicRouter.get(
  ROUTES.AUTH.FACEBOOK.CALLBACK,
  authController.facebookCallback
);

protectedRouter.post(ROUTES.AUTH.REGISTER, authController.register);
protectedRouter.post(ROUTES.AUTH.LOGOUT, authController.logout);

export { publicRouter, protectedRouter };
