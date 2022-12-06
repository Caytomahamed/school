const db = require('../database/dbConfig');

const select = () => {
  return  db('chapters as ch')
    .join('courses as c', 'c.id', 'ch.courseId')
    .select('ch.id', 'chapterTitle');
};

const chapterByCourse = id => {
  return select().where('c.id', id);
};

exports.read = id => {
  return id ? chapterByCourse(id) : select();
};

exports.readById = async id => {
  return await db('chapters as ch')
    .select('id', 'chapterTitle')
    .where('ch.id', id);
};
