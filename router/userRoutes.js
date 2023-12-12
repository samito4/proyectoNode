const {
  getUsers,
  getUserById,
  UpdateById,
  deleteByID,
  addUser,
} = require("../Controllers/usersControllers");
const router = require("express").Router();
router.get("/", getUsers);
router.get("/:id", getUserById);
router.patch("/:id", UpdateById);
router.delete("/:id", deleteByID);
router.post("/:id", addUser);
module.exports = router;
