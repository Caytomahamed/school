const QandA = require("../models/qandAModel");
const factory = require("./handlerFactory");

exports.getAllQandA = factory.getAll(QandA);
exports.getQandA = factory.getOne(QandA);
exports.createQandA = factory.createOne(QandA);
exports.updateQandA = factory.updateOne(QandA);
exports.deleteQandA = factory.deleteOne(QandA);