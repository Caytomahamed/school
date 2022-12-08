const factory = require('./handlerFactory');
const reply = require('../models/replyModel');

// middleware

exports.createReplyByVideoId = (req, res, next) => {
  const isEmpty = Object.keys(req.params).length === 0;
  !isEmpty && (req.body = { ...req.body, ...req.params });
  next();
};

exports.getAllReply = factory.getAll(reply);
exports.getReply = factory.getOne(reply);
exports.createReply = factory.createOne(reply);
exports.updateReply = factory.updateOne(reply);
exports.deleteReply = factory.deleteOne(reply);
