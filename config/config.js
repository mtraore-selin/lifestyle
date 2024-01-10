require("dotenv").config();
const { PORT, NODE_ENV, MONGO_CONNECTION_STRING, HOST } = process.env;

module.exports = {
  PORT,
  NODE_ENV,
  MONGO_CONNECTION_STRING,
  HOST,
};
