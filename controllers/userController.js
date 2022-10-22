const users = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError"); 
const appError = require("../utils/appError");

exports.getAllUsers = catchAsync(async (req, res,next) => {
  const allUsers = await users.findAll();
  res.status(200).json({
    status: "success",
    users: allUsers,
  });
});

exports.getUserById = catchAsync(async (req, res,next) => {
  let { id } = req.params;
  const [user] = await users.findById(id);
  if (!user) {
    return next(new appError("No user found with that ID",404));
  }
  res.status(200).json({
    status:"success",
    user: user
  });
});

exports.insertUser = catchAsync(async (req, res,nexy) => {
  let { body } = req;
  const [user] = await users.insert(body);
  if (!user) {
    res.status(404).json({ message: "you missing same thing" });
  }
  res.status(201).json(user);
});

exports.updateUser = catchAsync(async (req, res,next) => {
  const {params: { id },body} = req;
  const [user] = await users.update(id, body);
  if (!user) {
    res.status(404).json({ message: "could not update that user" });
  }
  res.status(200).json(user);
});

exports.deleteUser = catchAsync(async (req, res,next) => {
  const { id } = req.params;
  const [user] = await users.remove(id);
  res.status(200).json({ message: `user deleted ${user}` });
});
