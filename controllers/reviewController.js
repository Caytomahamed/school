const reviews = require('../models/reviewModel');
const factory = require('./handlerFactory');

// middleware
exports.createReviewByIdCourse = (req, res, next) => {
  req.params?.id && (req.body = { ...req.body, course_id: +req.params.id });
  next();
};

exports.getAllReviews = factory.getAll(reviews);
exports.getReview = factory.getOne(reviews);
exports.createReview = factory.createOne(reviews);
exports.updateReview = factory.updateOne(reviews);
exports.deleteReview = factory.deleteOne(reviews);
