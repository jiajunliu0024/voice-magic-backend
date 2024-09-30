const express = require("express");
const router = express.Router();
const {
  getDefaultAudio,
  createDefaultAudio,
  updateDefaultAudio,
  deleteDefaultAudio,
} = require("../controllers/audioController");

router.get("/api/default/audio", getDefaultAudio);
router.post("/api/default/audio", createDefaultAudio);
router.put("/api/default/audio", updateDefaultAudio);
router.delete("/api/default/audio", deleteDefaultAudio);

module.exports = router;
