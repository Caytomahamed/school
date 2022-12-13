const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const courseRoute = require('./courseRoutes');

const router = express.Router();

router.post(
  '/signup',
  authController.checkRoleIfIsAdmin,
  authController.checkPasswordConfirm,
  authController.signup
);
router.post('/login', authController.login);

router.post('/forgotpassword', authController.forgetPassword);
router.patch(
  '/resetPassword/:token',
  authController.checkPasswordConfirm,
  authController.resetPassword
);

router.patch(
  '/updateMyPassword',
  authController.checkPasswordConfirm,
  authController.proctect,
  authController.updatepassword
);

router.patch(
  '/updateMe',
  authController.proctect,
  userController.updateMe
);
router.delete(
  '/deleteMe',
  authController.proctect,
  userController.deleteMe
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
