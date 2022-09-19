import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoutes from "./routes/users.js";

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to Datbase");
    })
    .catch((err) => {
      throw err;
    });
};

app.use("/api/users", UserRoutes);

app.listen(8800, () => {
  connect();
  console.log("connected to server");
});
