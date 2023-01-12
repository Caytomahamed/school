const courses = require('../models/courseModel');
const factory = require('./handlerFactory');

// limit=5&sort=ratingsAverage,-price
exports.aliasTopCourses = (req, res, next) => {
    req.query.limit = "5";
    req.query.sort = "ratingsAverage,-price";
    next();
};

exports.getAllCourses = factory.getAll(courses);
exports.getCourse = factory.getOne(courses);
exports.createCourse = factory.createOne(courses);
exports.updateCourse = factory.updateOne(courses);
exports.deleteCourse = factory.deleteOne(courses);
