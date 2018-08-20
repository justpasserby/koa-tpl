import mongoose from "mongoose";
import config from "./config";
import { logSuccess, logWarn, logError } from "./utils";

mongoose.Promise = global.Promise;

exports.connect = () => {
  mongoose.connect(
    config.database,
    {
      useNewUrlParser: true
    }
  );

  const db = mongoose.connection;

  db.on("disconnect", () => {
    connect();
  });

  db.on("error", err => {
    logError(err);
  });

  db.once("open", () => {
    logSuccess("db connected");
  });
};
