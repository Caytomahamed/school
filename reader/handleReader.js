const db = require('../database/dbConfig');

exports.createOne = async ({ table, newOne, getById }) => {
  const [id] = await db(`${table}`).insert(newOne);
  return getById(id);
};

exports.updateOne = async ({ table, condition, getById, changes, id }) => {
  await db(`${table}`).where(`${condition}`, id).update(changes);
  return getById(id);
};

exports.deleteOne = ({ table, condition, id }) => {
  return db(`${table}`).where(`${condition}`, id).del();
};
