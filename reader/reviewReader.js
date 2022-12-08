const db = require('../database/dbConfig');

const select = () => {
  return db('reviews as r')
    .join('users as u', 'u.id', 'r.userId')
    .select(
      'r.id',
      'fristName',
      'secondName',
      'imageProfile',
      'comment',
      'stars',
      'r.createAT'
    );
};

const reviewByCourse = id => {
  return select().where('courseId', id);
};

exports.read = id => {
  return id ? reviewByCourse(id) : select();
};

exports.readById = async id => {
  return await select().where('r.id', id);
};
