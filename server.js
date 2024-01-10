const express = require("express");
const cors = require("cors");
const path = require("path");

const routes = require("./routes");
const db = require("./config/connection");
const { PORT, HOST } = require("./config/config");

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

// Serve up static assets
app.use(express.static(path.join(__dirname, "./client/build")));

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is healthy" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
  });
});
