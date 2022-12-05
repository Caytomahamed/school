const express = require('express');
const videoController = require('../controllers/videoController');
const qandARouter = require("./qandARoutes");

const router = express.Router({ mergeParams: true });

// GET : :/:id/QandA => video/QandA
router.use("/:id/QandA", qandARouter);

// POST : :/:id/QandA => video/QandA
router.use("/:id/QandA", qandARouter);

router
  .route('/')
  .get(videoController.getAllVideos)
  .post(videoController.createVideoByChapterId, videoController.createVideo);

router
  .route('/:id')
  .get(videoController.getVideo)
  .patch(videoController.updateVideo)
  .delete(videoController.deleteVideo);

module.exports = router;
