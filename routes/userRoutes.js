const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const courseRoute = require('./courseRoutes');

const router = express.Router();

router.post(
  '/signup',
  authController.checkRoleIfIsAdmin,
  authController.checkPasswordConfirm,
  authController.checkIsEmailValid,
  authController.signup
);
router.post('/login', authController.login);
router.post('/forgotpassword', authController.forgetPassword);
router.patch(
  '/resetPassword/:token',
  authController.checkPasswordConfirm,
  authController.checkIsEmailValid,
  authController.resetPassword
);


// Protect all routes after this middleware
router.use(authController.proctect);

router.patch('/updateMe', userController.updateMe);
router.patch(
  '/updateMyPassword',
  authController.checkPasswordConfirm,
  authController.checkIsEmailValid,
  authController.updatepassword
  );
  
router.delete('/deleteMe', userController.deleteMe);

//GET : /:userID/courses
router.use(
  '/:id/courses',
  authController.restrictTo('admin', 'instructor'),
  courseRoute
);

//POST : /:userID/courses
router.use(
  '/:id/courses',
  authController.restrictTo('admin', 'instructor'),
  courseRoute
);

// Only access with Admin after this middleware
router.use(authController.restrictTo('admin'));

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
