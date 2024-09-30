import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER, // Replace 'your_username' with the username for your PostgreSQL user
  host: process.env.DB_HOST, // Replace 'your_host' with the host for your PostgreSQL server
  password: process.env.DB_PASSWORD, // Replace 'your_password' with the password for your PostgreSQL user
  port: process.env.DB_PORT, // The default port for PostgreSQL is 5432
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
