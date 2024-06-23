import mongoose from "mongoose";
import { UserType } from "../types/userTypes";
import { ROLES } from "../constants/userConstants";

interface UserModel extends UserType, mongoose.Document {}

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  isRoot: { type: Boolean, required: true },
  isAdministrator: { type: Boolean, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  googleId: { type: String, required: false },
  microsoftId: { type: String, required: false },
  facebookId: { type: String, required: false },
  password: { type: String, required: false },
  projects: [
    {
      projectId: { type: String, required: true },
      role: { type: String, required: true, enum: ROLES },
    },
  ],
});

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  return {
    name: obj.name,
    projects: obj.projects,
  };
};

const User = mongoose.model<UserModel>("User", userSchema);

export default User;
