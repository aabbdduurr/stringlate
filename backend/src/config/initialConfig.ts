import { AppConfigType } from "../types/configTypes";
import { UserType } from "../types/userTypes";

export const initialUser: UserType = {
  userId: "f0333d5e-ffd4-4eb5-8319-3cf0527a7fea",
  isRoot: true,
  isAdministrator: true,
  name: "Abdur Rahman",
  email: "email@abdur.co",
  password: "password",
};

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
