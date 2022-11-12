const express = require('express');
const courseController = require('../controllers/courseController');
const chapterRoutes = require('../routes/chapterRoutes');
const reviewRoutes = require("../routes/reviewRoutes")

const router = express.Router();

// GET: /:courseId/Chapters course - chapters
router.use('/:id/chapters', chapterRoutes);

// POST /:courseId/chapater => create new chapter
router.use('/:id/chapter', chapterRoutes);

// GET /:courseId/reviews => course per reviews
router.use('/:id/reviews', reviewRoutes);


router
  .route('/')
  .get(courseController.getAllCourses)
  .post(courseController.createCourse);

router
  .route('/:id') 
  .get(courseController.getCourse)
  .patch(courseController.updateCourse)
  .delete(courseController.deleteCourse);

module.exports = router;
