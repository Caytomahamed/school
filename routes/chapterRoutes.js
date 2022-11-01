const express = require("express");
const chapterController = require("../controllers/chapterController");

const router = express.Router({mergeParams : true});

router
  .route('/')
  .get(chapterController.getAll)
  .get(chapterController.getAll);
router
     .route('/:id')
     .get(chapterController.getById);
     
     
module.exports = router; 