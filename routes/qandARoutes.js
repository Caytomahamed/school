const express = require("express");
const qandAController = require("../controllers/qandAController")

const router = express.Router();

router
     .route("/")
     .get(qandAController.getAllQandA)
     .post(qandAController.createQandA);
     
router
     .route("/:id")
     .get(qandAController.getQandA)
     .patch(qandAController.updateQandA)
     .delete(qandAController.deleteQandA);
     
module.exports = router