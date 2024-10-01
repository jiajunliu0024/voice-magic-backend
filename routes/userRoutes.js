const express = require("express");
const router = express.Router();
const {
  getUser,
  insterUser,
  viewUser,
} = require("../controller/userController");

router.route("/:id").get(getUser);
router.route("/").post(insterUser);
router.route("/all/").get(viewUser);

module.exports = router;
