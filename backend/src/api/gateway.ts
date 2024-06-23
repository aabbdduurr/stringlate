/// <reference path="../types/express.d.ts" />

import express from "express";
import connectDB from "../utils/dbUtils";
import {
  DISPLAY_PORT,
  DOMAIN,
  PORT,
  PROTOCOL,
  ROUTES,
  SESSION_SECRET,
} from "../constants/appConstants";
import errorHandler from "../middlewares/errorHandler";
import {
  publicRouter as authPublicRouter,
  protectedRouter as authProtectedRouter,
} from "./routes/authRoutes";
import {
  publicRouter as configPublicRouter,
  protectedRouter as configProtectedRouter,
} from "./routes/configRoutes";
import authHandler from "../middlewares/authHandler";
import session from "express-session";
import passport from "../config/passportConfig";

const app = express();

app.use(express.json());
app.use(
  session({ secret: SESSION_SECRET, resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(ROUTES.AUTH._, authPublicRouter);
app.use(ROUTES.CONFIG._, configPublicRouter);

app.use(ROUTES.AUTH._, authHandler, authProtectedRouter);
app.use(ROUTES.CONFIG._, authHandler, configProtectedRouter);

app.use(errorHandler);

app.get(ROUTES._, (req, res) => {
  res.send("Welcome to SringLate API");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on ${PROTOCOL}://${DOMAIN}:${DISPLAY_PORT}`);
});
