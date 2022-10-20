const express = require("express");
const userController = require("../controllers/userController");
console.log(userController);
const router = express.Router();

router
      .route("/")
      .get(userController.getAllUsers)
      .post(userController.insertUser)

router
      .route("/:id")
      .get(userController.getUserById)
      .patch(userController.updateUser)
      .delete(userController.deleteUser);

module.exports = router;
