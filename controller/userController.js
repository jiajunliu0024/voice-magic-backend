const { getUserById, createUser, getUsers } = require("../models/userModel");

const getUser = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).send({ message: "id is required" });
  }
  const user = await getUserById(id);
  res.status(200).send({ message: "success", data: user });
};

const insterUser = async (req, res) => {
  const { first_name, last_name, email, status } = req.body;
  console.log(req.body);
  if (!first_name || !last_name || !email || !status) {
    return res.status(400).send({ message: "All fields are required" });
  }
  const user = await createUser({ first_name, last_name, email, status });
  res.status(200).send({ message: "success", data: user });
};

const viewUser = async (req, res) => {
  const users = await getUsers();
  res.status(200).send({ message: "success", data: users });
};

module.exports = {
  getUser,
  insterUser,
  viewUser,
};
