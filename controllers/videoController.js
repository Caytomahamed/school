const videos = require('../models/videoModel');
const factory = require('./handlerFactory');

// middleware
exports.createVideoByChapterId = (req, res, next) => {
  const isEmpty = Object.keys(req.params).length === 0;
  !isEmpty && (req.body = { ...req.body, ...req.params });

  next();
};

exports.getAllVideos = factory.getAll(videos);
exports.getVideo = factory.getOne(videos);
exports.createVideo = factory.createOne(videos);
exports.updateVideo = factory.updateOne(videos);
exports.deleteVideo = factory.deleteOne(videos);
