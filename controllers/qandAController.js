const qandA = require("../models/qandAModel");
const factory = require("./handlerFactory");

exports.getAllQandA = factory.getAll(qandA);