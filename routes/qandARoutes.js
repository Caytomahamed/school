const express = require("express");
const qandAController = require("../controllers/qandAController")
const replyRoute = require("./replyRouter")

const router = express.Router({mergeParams : true});

// GET : /:QandA/reply  => QandA 
router.use("/:id/reply", replyRoute);

// POST : /:QandA/reply  => QandA 
router.use("/:video_id/:QandA_id/reply", replyRoute);

router
     .route("/")
     .get(qandAController.getAllQandA)
     .post(qandAController.createQandAByVideoId,qandAController.createQandA);
     
router
     .route("/:id")
     .get(qandAController.getQandA)
     .patch(qandAController.updateQandA)
     .delete(qandAController.deleteQandA);
     
module.exports = router;