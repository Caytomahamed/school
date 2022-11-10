const users = require('../models/userModel');
const factory = require('./handlerFactory');

exports.getAllUsers = factory.getAll(users);
exports.getUser = factory.getOne(users);
exports.createUser = factory.createOne(users);
exports.updateUser = factory.updateOne(users);
exports.deleteUser = factory.deleteOne(users);
