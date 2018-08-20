import chalk from "chalk";

const log = console.log;

const error = chalk.bgRgb(230, 67, 64).bold(" ERROR: ");
const warn = chalk.bgRgb(255, 140, 0).bold(" WARN: ");
const success = chalk.bgRgb(23, 155, 22).bold(" SUCCESS: ");

exports.logError = msg => {
  log(error, msg);
};

exports.logWarn = msg => {
  log(warn, msg);
};

exports.logSuccess = msg => {
  log(success, msg);
};
