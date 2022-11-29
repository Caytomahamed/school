const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router({ mergeParams: true });

//create new review need (login);
router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(reviewController.createReviewByIdCourse, 
        reviewController.createReview);

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(reviewController.updateReview)
  .delete(reviewController.deleteReview);

module.exports = router;
