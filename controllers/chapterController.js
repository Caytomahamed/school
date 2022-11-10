const chapters = require('../models/chapterModel');
const factory = require('./handlerFactory');

exports.getAllChapters = factory.getAll(chapters);
exports.getChapter = factory.getOne(chapters);
exports.createChapter = factory.createOne(chapters);
exports.updateChapter = factory.updateOne(chapters);
exports.deleteChapter = factory.deleteOne(chapters);
