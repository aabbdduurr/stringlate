import { AppConfigType } from "../types/configTypes";

export const initialAppConfig: AppConfigType = {
  theme: "light",
  language: "en-us",
  environments: [
    {
      env: "development",
      dbName: "dev_db",
    },
    {
      env: "test",
      dbName: "test_db",
    },
    {
      env: "staging",
      dbName: "stag_db",
    },
    {
      env: "production",
      dbName: "prod_db",
    },
  ],
};
