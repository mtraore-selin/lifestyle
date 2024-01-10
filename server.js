const express = require("express");
const path = require("path");

const routes = require("./routes");
const db = require("./config/connection");
const { PORT, HOST } = require("./config/config");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
app.use(express.static(path.join(__dirname, "./client/build")));

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is healthy" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
  });
});
