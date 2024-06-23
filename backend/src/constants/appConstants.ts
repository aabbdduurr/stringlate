export const PROTOCOL = process.env.PROTOCOL || "http";
export const DOMAIN = process.env.DOMAIN || "localhost";
export const PORT = process.env.PORT || 3000;
export const DISPLAY_PORT = process.env.DISPLAY_PORT || 3001;

export const ROUTES = {
  _: "/",
  CONFIG: {
    _: "/config",
    APP: "/app",
    USER: "/user",
  },
  AUTH: {
    _: "/auth",
    REGISTER: "/register",
    LOGIN: "/login",
    LOGOUT: "/logout",
    GOOGLE: {
      _: "/google",
      CALLBACK: "/callback",
    },
    MICROSOFT: {
      _: "/microsoft",
      CALLBACK: "/callback",
    },
    FACEBOOK: {
      _: "/facebook",
      CALLBACK: "/callback",
    },
  },
};

const CONGIN_DB_HOST = process.env.CONFIG_DB_HOST || DOMAIN;
const CONFIG_DB_PORT = process.env.CONFIG_DB_PORT || "27017";
const CONFIG_DB_NAME = process.env.CONFIG_DB_NAME || "db";

export const CONFIG_DB_URI = `mongodb://${CONGIN_DB_HOST}:${CONFIG_DB_PORT}/${CONFIG_DB_NAME}`;

export const JWT_SECRET = process.env.JWT_SECRET || "jwt_secret";
export const JWT_EXPIRY = process.env.JWT_EXPIRY || "1d";
export const SESSION_SECRET = process.env.SESSION_SECRET || "session_secret";

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
export const MICROSOFT_CLIENT_ID = process.env.MICROSOFT_CLIENT_ID || "";
export const MICROSOFT_CLIENT_SECRET =
  process.env.MICROSOFT_CLIENT_SECRET || "";
export const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID || "";
export const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET || "";
export const CALLBACK_URL =
  process.env.CALLBACK_URL || `${PROTOCOL}://${DOMAIN}:${PORT}`;
