const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api/user", userRoutes);
app.use("/api/contact", (req, res) => {
  res.send("Contact page");
});

module.exports = app;
