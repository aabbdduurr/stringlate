interface Environment {
  env: string;
  dbName: string;
}

export interface UserConfigType {
  userId: string;
  config: {
    theme: string;
    language: string;
  };
}

export interface AppConfigType {
  theme: string;
  language: string;
  environments: Environment[];
}
