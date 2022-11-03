const express = require("express");
const userController = require("../controllers/userController");
const courseRoute = require("./courseRoutes");

const router = express.Router();

//GET : /:userID/courses
router.use("/:userId/courses",courseRoute);

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
 