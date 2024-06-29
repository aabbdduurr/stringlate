import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as MicrosoftStrategy } from "passport-microsoft";
import { Strategy as FacebookStrategy } from "passport-facebook";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import User from "../models/userModel";
import { issueJwtTokens } from "../services/authService";
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  MICROSOFT_CLIENT_ID,
  MICROSOFT_CLIENT_SECRET,
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  CALLBACK_URL,
  ROUTES,
} from "../constants/appConstants";
import { OAuthProfile } from "../types/authTypes";

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err: any, user: any) => {
    done(err, user);
  });
});

const createOrFindUser = async (profile: OAuthProfile, provider: string) => {
  let user = await User.findOne({ [`${provider}Id`]: profile.id });
  if (!user) {
    user = new User({
      userId: new mongoose.Types.ObjectId().toString(),
      isAdministrator: false,
      name: profile.displayName,
      email:
        (profile.emails && profile.emails[0] && profile.emails[0].value) || "",
      [`${provider}Id`]: profile.id,
    });
    await user.save();
  }
  return user;
};

const handleOAuthCallback = async (
  accessToken: string,
  refreshToken: string,
  profile: OAuthProfile,
  done: Function,
  provider: string
) => {
  try {
    const user = await createOrFindUser(profile, provider);
    const { token, refreshToken: newRefreshToken } = issueJwtTokens(user);
    return done(null, { user, token, refreshToken: newRefreshToken });
  } catch (err) {
    return done(err, null);
  }
};

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email: string, password: string, done: Function) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: "Incorrect email." });
        }
        const isMatch = await bcrypt.compare(password, user.password || "");
        if (!isMatch) {
          return done(null, false, { message: "Incorrect password." });
        }
        const { token, refreshToken } = issueJwtTokens(user);
        return done(null, { user, token, refreshToken });
      } catch (err) {
        return done(err);
      }
    }
  )
);

if (GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET)
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL:
          CALLBACK_URL +
          ROUTES.AUTH._ +
          ROUTES.AUTH.GOOGLE._ +
          ROUTES.AUTH.GOOGLE.CALLBACK,
      },
      (
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: Function
      ) =>
        handleOAuthCallback(accessToken, refreshToken, profile, done, "google")
    )
  );

if (MICROSOFT_CLIENT_ID && MICROSOFT_CLIENT_SECRET)
  passport.use(
    new MicrosoftStrategy(
      {
        clientID: MICROSOFT_CLIENT_ID,
        clientSecret: MICROSOFT_CLIENT_SECRET,
        callbackURL:
          CALLBACK_URL +
          ROUTES.AUTH._ +
          ROUTES.AUTH.MICROSOFT._ +
          ROUTES.AUTH.MICROSOFT.CALLBACK,
      },
      (
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: Function
      ) =>
        handleOAuthCallback(
          accessToken,
          refreshToken,
          profile,
          done,
          "microsoft"
        )
    )
  );

if (FACEBOOK_CLIENT_ID && FACEBOOK_CLIENT_SECRET)
  passport.use(
    new FacebookStrategy(
      {
        clientID: FACEBOOK_CLIENT_ID,
        clientSecret: FACEBOOK_CLIENT_SECRET,
        callbackURL:
          CALLBACK_URL +
          ROUTES.AUTH._ +
          ROUTES.AUTH.FACEBOOK._ +
          ROUTES.AUTH.FACEBOOK.CALLBACK,
        profileFields: ["id", "displayName", "emails"],
      },
      (
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: Function
      ) =>
        handleOAuthCallback(
          accessToken,
          refreshToken,
          profile,
          done,
          "facebook"
        )
    )
  );

export default passport;
