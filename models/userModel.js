const { v4: uuidv4 } = require("uuid");
const pg = require("pg");
const config = require("../config/db");

const createUser = async (user) => {
  const uniqueId = uuidv4();
  const currentTimestamp = new Date();
  const { first_name, last_name, email, status } = user;
  const createUserSql =
    "INSERT INTO voice.users (id, first_name, last_name, email, status, created_at) VALUES ($1, $2, $3, $4, $5, $6) returning *";
  const values = [
    uniqueId,
    first_name,
    last_name,
    email,
    status,
    currentTimestamp,
  ];
  const client = new pg.Client(config);
  await client.connect();
  const result = await client.query(createUserSql, values);
  await client.end();
  return result.rows;
};

const getUserById = async (userId) => {
  const getUserSql =
    "SELECT id, first_name, last_name, email, status FROM voice.users where id = $1";
  const client = new pg.Client(config);
  await client.connect();
  const result = await client.query(getUserSql, [userId]);
  await client.end();
  return result.rows;
};

const getAllUsers = async () => {
  const getUserSql = "SELECT * FROM voice.users ";
  const client = new pg.Client(config);
  await client.connect();
  const result = await client.query(getUserSql);
  await client.end();
  return result.rows;
};

const deleteUserById = async (userId) => {
  const deleteUserSql = "DELETE FROM voice.users where id = $1 returning *";
  const client = new pg.Client(config);
  await client.connect();
  const result = await client.query(deleteUserSql, [userId]);
  await client.end();
  return result.rows;
};

const updateUserById = async (userId, user) => {
  const { first_name, last_name, email, status } = user;
  const updateUserSql =
    "UPDATE voice.users SET first_name = $1, last_name = $2, email = $3, status = $4 WHERE id = $5 returning *";
  const values = [first_name, last_name, email, status, userId];
  const client = new pg.Client(config);
  await client.connect();
  const result = await client.query(updateUserSql, values);
  await client.end();
  return result.rows;
};

module.exports = {
  createUser,
  getUserById,
  deleteUserById,
  getAllUsers,
  updateUserById,
};
