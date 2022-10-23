const courses = require('../models/courseModel');
const catchAsyn = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllCourses = catchAsyn(async (req, res, next) => {
  const allCourses = await courses.findAll();
  res.status(200).json({
    status: 'success',
    reusult: allCourses.length,
    data: { 
      courses: allCourses,
    },
  });
});

exports.getCourse = catchAsyn(async (req, res,next) => {
  const { id } = req.params;
  const [course] = await courses.findById(+id);
  if(!course) {
   return next(new AppError('No course found with that ID',404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      course: course,
    },
  });
});

exports.insertCourse = catchAsyn(async (req, res,next) => {
  const newCourse = req.body;
  const [course] = await courses.insert(newCourse);
  res.status(201).json(course);
});

exports.updateCourse =  catchAsyn(async (req, res,next) => {
  const {params: { id },body} = req;
  const [course] = await courses.update(+id, body);
  if (!course) {
    return next(new AppError('No course found with that ID', 404));
  }
  res.status(200).json(course);
});

exports.deleteCourse = catchAsyn(async (req, res,next) => {
  const { id } = req.params;
  const courseId = await courses.remove(+id);
    if (!courseId) {
      return next(new AppError('No course found with that ID', 404));
    }
  res.status(200).json({ message: `successfull delted ${courseId}` });
});
