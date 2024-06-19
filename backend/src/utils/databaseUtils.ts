import mongoose from "mongoose";
import { CONFIG_DB_URI } from "../constants/appConstants";

const connectDB = async () => {
  try {
    await mongoose.connect(CONFIG_DB_URI, {
      socketTimeoutMS: 1000,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
