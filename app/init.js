import mongoose from "mongoose";
import config from "./config";

mongoose.Promise = global.Promise;

exports.connect = () => {
  mongoose.connect(config.database, {
    useNewUrlParser: true
  });

  const db = mongoose.connection;

  db.on('disconnect', () => {
    connect();
  });

  db.on('error', err => {
    console.log(err);
  });

  db.once('open', () => {
    console.log("connection success");
  });
}