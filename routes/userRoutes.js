const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const courseRoute = require('./courseRoutes');

const router = express.Router();

//NOTE: auth => signUp
router.post(
  '/signup',
  // authController.checkRoleIfIsAdmin,
  authController.checkPasswordConfirm,
  authController.signup
);

//NOTE: auth => signUp
router.post(
  '/login',
  authController.login
);

//GET : /:userID/courses
router.use('/:id/courses', courseRoute);

//POST : /:userID/courses
router.use('/:id/courses', courseRoute);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(
    authController.checkRoleIfIsAdmin,
    authController.checkPasswordConfirm,
    userController.createUser
  );

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
