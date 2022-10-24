const users = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError'); 

exports.getAllUsers = catchAsync(async (req, res,next) => {
  const allUsers = await users.findAll();
  res.status(200).json({
    status: 'success',
    users: allUsers,
  });
});

exports.getUserById = catchAsync(async (req, res,next) => {
  const { id } = req.params;
  const [user] = await users.findById(id);
  console.log(user);
  if (!user) {
    return next(new AppError('No user found with that ID',404));
  }
  res.status(200).json({
    status:'success',
    user: user
  });
});

exports.insertUser = catchAsync(async (req, res,next) => {
  const { body } = req;
  const [user] = await users.insert(body);  
  res.status(201).json(user);
});

exports.updateUser = catchAsync(async (req, res,next) => {
  const {params: { id },body} = req;
  const [user] = await users.update(id, body);
  if (!user) {
    return next(new AppError('No user found with that ID', 404));
  }
  res.status(200).json(user);
});

exports.deleteUser = catchAsync(async (req, res,next) => {
  const { id } = req.params;
  const [user] = await users.remove(id);
  if (!user) {
    return next(new AppError('No user found with that ID',404));
  }
  res.status(200).json({ message: `user deleted ${user}` });
});