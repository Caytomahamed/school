const db = require('../database/dbConfig');

exports.find = (id) => {
  if (id) {
    return db('chapters as ch')
      .join('courses as c', 'c.course_id', 'ch.course_id')
      .select('chapter_id', 'chapter_title')
      .where('c.course_id', id);
  }
  return db('chapters as ch')
    .join('courses as c', 'c.course_id', 'ch.course_id')
    .select('chapter_id', 'chapter_title');
};

exports.findById = (id) => {
  return db('chapters as ch')
    .join('courses as c', 'c.course_id', 'ch.course_id')
    .select('chapter_id', 'chapter_title')
    .where('ch.chapter_id', id);
};

exports.create = async (chapter) => {
  const [id] = await db('chapters').insert(chapter);
  return this.findById(id);
};

exports.findByIdandUpdate = async (id,changes) => {
  await db('chapters as ch').where('ch.chapter_id', id).update(changes);
  return this.findById(id);
};

exports.findByIdandDelete = (id) => {
  return db('chapters').where('chapters.chapter_id', id).del();
};
