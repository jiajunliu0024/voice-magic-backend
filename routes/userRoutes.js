const express = require("express");
const router = express.Router();
const {
  getUser,
  insertUser,
  listUsers,
  deleteUser,
  updateUser,
} = require("../controller/userController");

router.get("/list", listUsers);
router.get("/:id", getUser);
router.post("/", insertUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
