const users = require('../models/userModel');
const factory = require('./handlerFactory');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1. Create error if user PATCHs password
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password update.Please use /updateMyPassword',
        400
      )
    );
  }

  // 2) filtered out unwanterd field that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'fristName', 'secondName', 'email');

  //  3) update user document
  const [updateUser] = await users.findByIdandUpdate(
    req.user.id,
    filteredBody,
    true
  );
  console.log(updateUser);

  // 4) sent back a updateUser
  res.status(200).json({
    status: 'success',
    data: {
      user: updateUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  console.log(req.user);
  await users.findByIdandUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.getAllUsers = factory.getAll(users);
exports.getUser = factory.getOne(users);
exports.createUser = factory.createOne(users);
exports.updateUser = factory.updateOne(users);
exports.deleteUser = factory.deleteOne(users);
