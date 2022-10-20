const db = require("../database/dbConfig");

function find() {
  return db("courses as c")
    .leftJoin("users as u", "c.user_id", "u.user_id")
    .leftJoin("reviews as r", "c.course_id", "r.course_id")
    .select(
      "course_title",
      "description",
      "price",
      "duration",
      "thumnail",
      "username"
    )
    .groupBy("c.course_id");
}

function findBy(filter) {
  return db("courses as c")
    .leftJoin("users as u", "c.user_id", "u.user_id")
    .leftJoin("reviews as r", "c.course_id", "r.course_id")
    .groupBy("c.course_id")
    .select(
      "c.course_id",
      "course_title",
      "description",
      "price",
      "duration",
      "thumnail",
      "username"
    )
    .where("*", filter);
}
function findById(id) {
  return db("courses as c")
    .leftJoin("users as u", "c.user_id", "u.user_id")
    .leftJoin("reviews as r", "c.course_id", "r.course_id")
    .select(
      "c.course_id",
      "course_title",
      "description",
      "price",
      "duration",
      "thumnail",
      "username"
    )
    .groupBy("c.course_id")
    .where("c.course_id", id);
}

async function insert(newCourse) {
  const [id] = await db("courses").insert(newCourse);
  return findById(id);
}

async function update(id, changes) {
  await db("courses as c").where("c.course_id", id).update(changes);
  return findById(id);
}

async function remove(id) {
  return db("courses as c").where("c.course_id", id).del();
}

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
};
