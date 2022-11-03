const chapters = require('../models/chapterModel');
const catchAsyn = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAll = catchAsyn(async (req, res, next) => {
  const { courseId } = req.params;
  let allChapters;
  if (courseId) {
    allChapters = await chapters.find(+courseId);
  } else {
    allChapters = await chapters.find();
  }

  res.status(200).json({
    status: 'success',
    result: allChapters.length,
    data: {
      allChapters,
    },
  });
});

exports.getById = catchAsyn(async (req, res, next) => {
  const { id } = req.params;
  const [chapter] = await chapters.find(+id);
  if (!chapter) {
    return next(new AppError('No chapter found width this ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      chapter,
    },
  });
});

exports.getByCourseId = catchAsyn(async (req, res, next) => {
  const { id } = req.params;
  const chaptersByCourse = await chapters.getByCourseId(+id);

  if (!chaptersByCourse) {
    return next(new AppError('No chapter found width this course ID', 404));
  }

  res.status(200).json({
    status: 'success',
    result: chaptersByCourse.length,
    chapters: chaptersByCourse,
  });
});

exports.insertChapter = catchAsyn(async (req, res, next) => {
    console.log(req.body);
  const [chapter] = await chapters.insert(req.body);
  console.log(chapter);
  res.status(201).json(chapter);
});

exports.updateChapter = catchAsyn(async (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;

  const [chapter] = await chapters.updateChapter(+id, body);

  if (!chapter) {
    return next(new AppError('No chapter found width this course ID', 404));
  }

  res.status(200).json(chapter);
});

exports.deleteChapter = catchAsyn(async (req, res, next) => {
  const { id } = req.params;
  const [chapterId] = await chapters.deleteChapter(+id);
  
  if (!chapterId) {
    return next(new AppError('No chapter found width this course ID', 404));
  }

  res.status(200).json({ message: `successfull delted ${chapterId}` });
});
