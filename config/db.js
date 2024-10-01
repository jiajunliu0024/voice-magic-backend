const dotenv = require("dotenv");
const pg = require("pg");
const fs = require("fs");
dotenv.config();

const certFile = fs.readFileSync("./ca.pem").toString();
const client = new pg.Client({
  user: "avnadmin", // Replace 'your_username' with the username for your PostgreSQL user
  host: "pg-magic-voice-jiajunliu0024-3a27.j.aivencloud.com", // Replace 'your_host' with the host for your PostgreSQL server
  password: process.env.DB_PASSWORD, // Replace 'your_password' with the password for your PostgreSQL user
  port: 25720, // The default port for PostgreSQL is 5432
  database: "dev_voice_magic", // Replace 'your_database' with the name of your PostgreSQL database
  ssl: {
    rejectUnauthorized: true,
    ca: certFile,
  },
});

module.exports = client;
