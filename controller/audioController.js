const getDefaultAudio = async((req, res) => {
  res.send({ messgae: 200, data: "Hello World" });
});

const createDefaultAudio = async((req, res) => {});

const updateDefaultAudio = async((req, res) => {});

const deleteDefaultAudio = async((req, res) => {});

module.exports = {
  getDefaultAudio,
  createDefaultAudio,
  updateDefaultAudio,
  deleteDefaultAudio,
};
