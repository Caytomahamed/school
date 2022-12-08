const jwt = require('jsonwebtoken');

const usersModel = require('../models/userModel');
const AppErro = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// middelware
// check confirm password
exports.checkPasswordConfirm = async (req, res, next) => {
  const { password, confirmPassword } = req.body;

  const checker =
    password.length === confirmPassword.length && password === confirmPassword;

  if (!checker) {
    return next(new AppErro('please confirm password 😢', 404));
  }

  checker && delete req.body.confirmPassword;
  next();
};

// middleware Admin role not allowed
exports.checkRoleIfIsAdmin = (req, res, next) => {
  const checker = `${req.body.roleName}`.toLowerCase().trim() === 'admin';
  if (checker) {
    return next(
      new AppErro('not allowed to be admin. Bluid your own one', 500)
    );
  }
  next();
};

const singToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIREIN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const [ifEmailExisting] = await usersModel.findOne({
    condition: 'u.email',
    field: req.body.email,
  });

  if (ifEmailExisting) {
    console.log(ifEmailExisting);
    return next(
      new AppErro('email Already exists. Pleasu use another one'),
      403
    );
  }
  const [newUser] = await usersModel.create(req.body);

  const token = singToken(newUser.id); // token

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) if email and paaword exist
  if (!email || !password) {
    return next(new AppErro('Please provide email and password', 401));
  }

  // 2) check if user exist and password correct
  const [user] = await usersModel.findOne({
    condition: 'u.email',
    field: req.body.email,
    auth: true,
  });

  if (!user || !(await usersModel.correctPassword(password, user.password))) {
    return next(new AppErro('Incorrect email or password', 401));
  }

  // 3). everthing is ok, send token to client
  const token = singToken(user.id);
  res.status(200).json({
    status: 'success',
    token,
  });
});
