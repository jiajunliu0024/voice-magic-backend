const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get("/api/default/audio", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
