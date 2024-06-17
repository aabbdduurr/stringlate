import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("StringLate backend!");
});

export default app;
