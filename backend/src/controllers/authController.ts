import { Request, Response, NextFunction } from "express";
import * as authService from "../services/authService";
import passport from "passport";

export const register = async (req: Request, res: Response) => {
  try {
    const isAdministrator = req.user?.isAdministrator === true;
    if (!isAdministrator) {
      return res.status(403).send("Unauthorized to register new users");
    }

    const { name, email, password } = req.body;
    const { user, token, refreshToken } = await authService.registerUser(
      name,
      email,
      password
    );
    res.status(201).json({ user, token, refreshToken });
  } catch (error: any) {
    res.status(400).send(`Error registering user: ${error.message}`);
  }
};

export const login = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", (err: any, authData: any, info: any) => {
    if (err) {
      return res.status(500).send(`Error logging in: ${err.message}`);
    }
    if (!authData) {
      return res.status(400).send(info.message);
    }
    res.status(200).json(authData);
  })(req, res, next);
};

export const refreshToken = async (req: Request, res: Response) => {
  const { token, refreshToken } = req.body;
  if (!token || !refreshToken) {
    return res.status(401).send("Tokens required");
  }

  try {
    const { accessToken, refreshToken: newRefreshToken } =
      await authService.refreshToken(token, refreshToken);
    res.status(200).json({ token: accessToken, refreshToken: newRefreshToken });
  } catch (error: any) {
    res.status(400).send("Invalid refresh token");
  }
};

export const logout = (req: Request, res: Response, next: NextFunction) => {
  req.logout((err: any) => {
    if (err) {
      return res.status(500).send(`Error logging out: ${err.message}`);
    }
    res.status(200).send("Logged out successfully");
  });
};

const oauthCallbackHandler =
  (provider: string) => (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(provider, (err: any, authData: any) => {
      if (err) {
        return res.status(500).send(`Error logging in: ${err.message}`);
      }
      if (!authData) {
        return res.status(400).send("Authentication failed");
      }
      res.status(200).json(authData);
    })(req, res, next);
  };

export const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});
export const googleCallback = oauthCallbackHandler("google");
export const microsoftAuth = passport.authenticate("microsoft");
export const microsoftCallback = oauthCallbackHandler("microsoft");
export const facebookAuth = passport.authenticate("facebook", {
  scope: ["email"],
});
export const facebookCallback = oauthCallbackHandler("facebook");
