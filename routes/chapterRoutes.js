const express = require("express");
const chapterController = require("../controllers/chapterController");

const router = express.Router({mergeParams : true});

router
  .route('/')
  .post(chapterController.insertChapter)
  .get(chapterController.getAll)
  
router
     .route('/:id')
     .get(chapterController.getById)
     .patch(chapterController.updateChapter)
     .delete(chapterController.deleteChapter)
     
     
module.exports = router; 