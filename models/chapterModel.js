const db = require('../database/dbConfig');

exports.findAll = function () {
  return db('chapters as ch')
    .join('courses as c', 'c.course_id', 'ch.course_id')
    .select('chapter_id', 'chapter_title', 'course_title');
};

exports.findById = function (id) {
  return db('chapters as ch')
    .join('courses as c', 'c.course_id', 'ch.course_id')
    .select('chapter_id', 'chapter_title', 'course_title')
    .where('chapter_id', id);
};
