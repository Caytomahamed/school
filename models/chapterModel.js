const db = require('../database/dbConfig');

const findAll = () => {
  return db('chapters as ch')
    .join('courses as c', 'c.course_id', 'ch.course_id')
    .select('chapter_id', 'chapter_title');
};

exports.find = (id) => {
 return id ? findAll().where('c.course_id', id): findAll(); 
};

exports.insert = async (chapter) => {
  const [id] =  await db('chapters').insert(chapter);
  return this.find(id)
};

exports.updateChapter = async (changes, id) => {
  await db('chapters').where('chapters.chapter_id', id).update('*', changes);
  return this.find(id)
};

exports.deleteChapter = (id) => {
  return db('chapters').where('chapters.chapter_id', id).del();
};
