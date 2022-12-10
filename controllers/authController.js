const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const usersModel = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// middelware
// check confirm password
exports.checkPasswordConfirm = async (req, res, next) => {
  const { password, confirmPassword } = req.body;

  const checker =
    password.length === confirmPassword.length && password === confirmPassword;

  if (!checker) {
    return next(new AppError('please confirm password 😢', 404));
  }

  checker && delete req.body.confirmPassword;
  next();
};

// middleware Admin role not allowed
exports.checkRoleIfIsAdmin = (req, res, next) => {
  const checker = `${req.body.roleName}`.toLowerCase().trim() === 'admin';
  if (checker) {
    return next(
      new AppError('Not allowed to be admin. Bluid your own one', 401)
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
      new AppError('email Already exists. Pleasu use another one'),
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
    return next(new AppError('Please provide email and password', 401));
  }

  // 2) check if user exist and password correct
  const [user] = await usersModel.findOne({
    condition: 'u.email',
    field: req.body.email,
    auth: true,
  });

  if (!user || !(await usersModel.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // 3). everthing is ok, send token to client
  const token = singToken(user.id);
  res.status(200).json({
    status: 'success',
    token,
  });
});

exports.proctect = catchAsync(async (req, res, next) => {
  // 1) check if token access
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppError('You are not logged in!.Please login to get access', 401)
    );
  }

  // 2). verification token or expired
  const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3). check if still user exist
  const [freshUser] = await usersModel.findById(decode.id);
  if (!freshUser) {
    return next(
      new AppError('The user belonging this token does no longer exist!', 401)
    );
  }

  // 4). check if user change after the token was issued
  if (usersModel.changePasswordAfter(freshUser.updateAt, decode.iat)) {
    return next(
      new AppError('User recently changed password!. Please log in again!', 401)
    );
  }

  // GRANT access TO PROCTECT ROUTE
  req.user = freshUser;
  next();
});

exports.restrict = (...roles) => {
  return (req, res, next) => {
    // roles ["admin", "instructor"]. role = user
    if (!roles.includes(req.user.roleName)) {
      return next(new AppError("You do not have permission to perform this action!",403));
    }
    
    next()
  };
};
