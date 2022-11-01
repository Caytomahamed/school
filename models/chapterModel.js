const db = require('../database/dbConfig');

const findAll = (id) => {
  return db('chapters as ch')
    .join('courses as c', 'c.course_id', 'ch.course_id')
    .select('chapter_id', 'chapter_title', 'course_title');
};

exports.find = (id) => {
 return id ? findAll().where('c.course_id', id): findAll(); 
};

exports.insert = (chapter, courseId) => {
  return db('chapters ').insert({
    chaoter_title: chapter.chapter,
    course_id: courseId,
  });
};

exports.updateChapter = (changes, id) => {
  return db('chapters').where('chapters.chapter_id', id).update('*', changes);
};

exports.deleteChapter = (id) => {
  return db('chapters').where('chapters.chapter_id', id).del();
};
