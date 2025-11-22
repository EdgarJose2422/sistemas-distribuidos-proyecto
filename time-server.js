// time-server.js
const express = require("express");
const app = express();

app.get("/time", (req, res) => {
  const now = Date.now();
  res.json({ serverTime: now });
});

app.listen(5000, () => {
  console.log("⏱️ Time Server running on port 5000");
});
