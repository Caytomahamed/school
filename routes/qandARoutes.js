const express = require("express");
const qandAController = require("../controllers/qandAController")

const router = express.Router({mergeParams : true});

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