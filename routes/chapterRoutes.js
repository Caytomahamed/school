const express = require("express");
const chapterController = require("../controllers/chapterController");


const router = express.Router();

router
     .route('/')
     .get(chapterController.getAll);
router
     .route('/:id')
     .get(chapterController.getById);
module.exports = router; 