import { ROLES } from "../constants/userConstants";

type Roles = (typeof ROLES)[number];

type Project = {
  projectId: string;
  role: Roles;
};

export interface UserType {
  userId: string;
  isRoot: boolean;
  isAdministrator: boolean;
  name: string;
  email: string;
  googleId?: string;
  microsoftId?: string;
  facebookId?: string;
  password?: string;
  projects?: Project[];
}
