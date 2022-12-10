const express = require('express');
const chapterController = require('../controllers/chapterController');
const videoRouter = require('./videoRoutes');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

//GET /:chapterId/videos => chapter/video
router.use('/:id/videos', videoRouter);

//POST /:course_id/:chapter_id/video => new chapter/vidoe
router.use('/:course_id/:chapter_id/videos', videoRouter);

router
  .route('/')
  .get(chapterController.getAllChapters)
  .post(
    authController.proctect,
    authController.restrict('admin', 'instructor'),
    chapterController.createChapterByIdCourse,
    chapterController.createChapter
  );

router
  .route('/:id')
  .get(chapterController.getChapter)
  .patch(
    authController.proctect,
    authController.restrict('admin', 'instructor'),
    chapterController.updateChapter
  )
  .delete(
    authController.proctect,
    authController.restrict('admin', 'instructor'),
    chapterController.deleteChapter
  );

module.exports = router;
