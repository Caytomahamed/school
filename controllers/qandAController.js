const QandA = require('../models/qandAModel');
const factory = require('./handlerFactory');

//middleware
exports.createQandAByVideoId = (req, res, next) => {
  req.params.id && (req.body = { ...req.body, video_id: +req.params.id });
  next();
};

exports.getAllQandA = factory.getAll(QandA);
exports.getQandA = factory.getOne(QandA);
exports.createQandA = factory.createOne(QandA);
exports.updateQandA = factory.updateOne(QandA);
exports.deleteQandA = factory.deleteOne(QandA);
