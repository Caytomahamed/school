const db = require('../database/dbConfig');

const select = async () => {
  return await db('chapters as ch')
    .join('courses as c', 'c.course_id', 'ch.course_id')
    .select('chapter_id', 'chapter_title');
};

const chapterByCourse = id => {
  return select().where('c.course_id', id);
};

exports.read = id => {
  return id ? chapterByCourse(id) : select();
};

exports.readById = id => {
  return db('chapters as ch')
    .select('chapter_id', 'chapter_title')
    .where('ch.chapter_id', id);
};
