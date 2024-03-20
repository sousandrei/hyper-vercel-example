const express = require("express");

const app = express();

app.get("/ping", (_, res) => res.send("pong"));

module.exports = app;
