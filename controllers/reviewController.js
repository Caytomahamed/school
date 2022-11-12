const reviews = require("../models/reviewModel");
const factory = require("./handlerFactory");

exports.getAllReviews = factory.getAll(reviews);
exports.getReview = factory.getOne(reviews);
exports.createReview = factory.createOne(reviews);
exports.updateReview = factory.updateOne(reviews);
exports.deleteReview = factory.deleteOne(reviews);