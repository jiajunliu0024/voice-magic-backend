const {
  uploadSourceByUserId,
  getDefaultSource,
} = require("../models/sorceModel");

const uploadSource = async (req, res) => {
  /*
    todo: store the audio or text source to s3 bucket, and store the url to the database
    */

  const currentTimestamp = new Date();
  const { name, type } = req.body;
  const { userId } = req.params;
  if (!name || !url) {
    return res.status(400).send({ message: "All fields are required" });
  }
  const source = await uploadSourceByUserId(
    { name, type, url, currentTimestamp },
    userId
  );
  res.status(200).send({ message: "success upload the source", data: source });
};

const fetchSource = async (req, res) => {
  const { userId } = req.params;
  const source = await getSourceByUserId(userId);
  const defaultSource = await getDefaultSource();
  const allSource = { source, defaultSource };
  res.status(200).send({ message: "success", data: allSource });
};

module.exports = {
  uploadSource,
  fetchSource,
};
