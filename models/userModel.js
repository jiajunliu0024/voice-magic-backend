const client = require("../config/db");
const { v4: uuidv4 } = require("uuid");

const createUser = async (user) => {
  const uniqueId = uuidv4();
  const currentTimestamp = new Date();
  const { first_name, last_name, email, status } = user;
  const createUserSql =
    "INSERT INTO voice.users (id, first_name, last_name, email, status, created_at) VALUES ($1, $2, $3, $4, $5, $6)";
  const values = [
    uniqueId,
    first_name,
    last_name,
    email,
    status,
    currentTimestamp,
  ];
  await client.connect();
  const result = await client.query(createUserSql, values);
  return result;
};

const getUserById = async (userId) => {
  const getUserSql =
    "SELECT id, first_name, last_name, email, status FROM users where id = $1";
  const values = [userId];
  await client.connect();
  const result = await db.query(getUserSql, values);
  return result.rows;
};

const getUsers = async () => {
  const getUserSql = "SELECT * FROM users ";
  await client.connect();
  const result = await db.query(getUserSql);
  console.log(result.rows);
  return result.rows;
};

module.exports = { createUser, getUserById, getUsers };
