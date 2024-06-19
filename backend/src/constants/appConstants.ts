export const PORT = process.env.PORT || 3000;

const CONGIN_DB_HOST = process.env.CONFIG_DB_HOST || "localhost";
const CONFIG_DB_PORT = process.env.CONFIG_DB_PORT || "27017";
const CONFIG_DB_NAME = process.env.CONFIG_DB_NAME || "db";

export const CONFIG_DB_URI = `mongodb://${CONGIN_DB_HOST}:${CONFIG_DB_PORT}/${CONFIG_DB_NAME}`;
