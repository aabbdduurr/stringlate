import express from "express";
import configRoutes from "./routes/configRoutes";
import connectDB from "../utils/databaseUtils";
import { PORT } from "../constants/appConstants";
import errorHandler from "../middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use("/config", configRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Welcome to SringLate API");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
