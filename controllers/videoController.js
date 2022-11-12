const videos = require("../models/videoModel");
const factory = require("./handlerFactory");

exports.getAllVideos = factory.getAll(videos);
exports.getVideo = factory.getOne(videos);
exports.createVideo = factory.createOne(videos);
exports.updateVideo = factory.updateOne(videos);
exports.deleteVideo = factory.deleteOne(videos)



