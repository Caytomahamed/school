const db = require(".././database/dbConfig");

exports.find= () => {
    return db("reviews")
}