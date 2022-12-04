const chapters = require('../models/chapterModel');
const factory = require('./handlerFactory');

// middleware
exports.createChapterByIdCourse = (req, res, next) => {
  req.body = { ...req.body, course_id: +req.params.id };
  next()
};

//controllers 
exports.getAllChapters = factory.getAll(chapters);
exports.getChapter = factory.getOne(chapters);
exports.createChapter = factory.createOne(chapters);
exports.updateChapter = factory.updateOne(chapters);
exports.deleteChapter = factory.deleteOne(chapters);
