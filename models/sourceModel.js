const pg = require("pg");
const config = require("../config/db");

const uploadSourceByUserId = async (source, userId) => {
  const sourceId = uuidv4();
  const { name, type, url, currentTimestamp } = source;
  const addSourceSql =
    "INSERT INTO voice.sources (id, user_id,name,  type, created_at, url) VALUES ($1, $2, $3, $4, $5, $6) returning *";
  const values = [sourceId, userId, name, type, currentTimestamp, url];
  const client = new pg.Client(config);
  await client.connect();
  const result = await client.query(addSourceSql, values);
  await client.end();
  return result.rows;
};

const getSourceByUserId = async (userId) => {
  const getSourceSql = "SELECT * FROM voice.sources where user_id = $1";
  const client = new pg.Client(config);
  await client.connect();
  const result = await client.query(getSourceSql, [userId]);
  await client.end();
  return result.rows;
};

const getDefaultSource = async () => {
  const getSourceSql = "SELECT * FROM voice.sources where is_default = true";
  const client = new pg.Client(config);
  await client.connect();
  const result = await client.query(getSourceSql, [userId]);
  await client.end();
  return result.rows;
};

const deleteSourceById = async (sourceId) => {
  const deleteSourceSql = "DELETE FROM voice.sources where id = $1 returning *";
  const client = new pg.Client(config);
  await client.connect();
  const result = await client.query(deleteSourceSql, [sourceId]);
  await client.end();
  return result.rows;
};

module.exports = {
  uploadSourceByUserId,
  deleteSourceById,
  getSourceByUserId,
  getDefaultSource,
};
