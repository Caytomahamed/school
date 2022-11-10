const express = require('express');
const courseController = require('../controllers/courseController');
const chapterRoutes = require('../routes/chapterRoutes');

const router = express.Router({ mergeParams: true });

// GET: /:courseId/Chapters
router.use('/:id/chapters', chapterRoutes);

// POST /:courseId/chpater
router.use('/:id/chapter', chapterRoutes);

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
