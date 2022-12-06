const factory = require("./handlerFactory");
const reply = require("../models/replyModel");

exports.getAllReply = factory.getAll(reply);
exports.getReply = factory.getOne(reply);
exports.createReply = factory.createOne(reply);
exports.updateReply = factory.updateOne(reply);
exports.deleteReply = factory.deleteOne(reply);