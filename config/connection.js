const mongoose = require("mongoose");
const { MONGO_CONNECTION_STRING } = require("./config");

mongoose.set("strictQuery", false);

mongoose.connect(
  MONGO_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!");
  }
);

module.exports = mongoose.connection;
