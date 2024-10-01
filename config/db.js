const dotenv = require("dotenv");
const fs = require("fs");
dotenv.config();

const certFile = fs.readFileSync("./ca.pem").toString();
const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
    ca: certFile,
  },
};

module.exports = config;
