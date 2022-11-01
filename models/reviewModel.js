const db = require(".././database/dbConfig");

exports.findAll= () => {
    return db("reviews")
}