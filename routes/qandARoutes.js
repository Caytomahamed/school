const express = require("express");
const qandAController = require("../controllers/qandAController")

const router = express.Router();

router
     .route("/")
     .get(qandAController.getAllQandA);
     
module.exports = router