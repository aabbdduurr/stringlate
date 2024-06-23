import { AppConfigType } from "../types/configTypes";
import { UserType } from "../types/userTypes";

export const initialUser: UserType = {
  userId: "fb3e3475-0ff6-49da-86f5-d6e6567744e6",
  isRoot: true,
  isAdministrator: true,
  name: "Example One",
  email: "example1@domain.com",
  password: "password1",
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
