const express = require("express");

const app = express();

app.get("/ping", (_, res) => res.send("pong"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
