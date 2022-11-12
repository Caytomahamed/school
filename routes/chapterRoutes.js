const express = require('express');
const chapterController = require('../controllers/chapterController');
const videoRouter = require("./videoRoutes");

const router = express.Router({ mergeParams: true });


//GET /:chapterId/videos => chapter/video
router.use("/:id/videos",videoRouter)


router
  .route('/')
  .get(chapterController.getAllChapters)
  .post(chapterController.createChapter);

router
  .route('/:id')
  .get(chapterController.getChapter)
  .patch(chapterController.updateChapter)
  .delete(chapterController.deleteChapter);

module.exports = router;
