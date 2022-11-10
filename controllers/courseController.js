const courses = require('../models/courseModel');
const factory = require('./handlerFactory');

exports.getAllCourses = factory.getAll(courses);
exports.getCourse = factory.getOne(courses);
exports.createCourse = factory.createOne(courses);
exports.updateCourse = factory.updateOne(courses);
exports.deleteCourse = factory.deleteOne(courses);
