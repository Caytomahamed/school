const db =require("../database/dbConfig");

const select = () => {
    return db("replys")
}

exports.read = () => {
    return select()
}

exports.readById = (id) => {
    return select().where("reply_id",id)
}