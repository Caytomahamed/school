const db = require('../database/dbConfig');
const bcrypt = require('bcrypt');

exports.createOne = async ({ table, newOne, getById }) => {
  const [id] = await db(`${table}`).insert(newOne);
  return getById(id);
};

exports.updateOne = async ({ table, condition, getById, changes, id }) => {
  if (changes.password) {
    changes.password = await bcrypt.hashSync(changes.password, 12);
  }
  await db(`${table}`).where(`${condition}`, id).update(changes);
  return getById(id);
};

exports.deleteOne = ({ table, condition, id }) => {
  return db(`${table}`).where(`${condition}`, id).del();
};
