const db = require('../database/dbConfig');

const select = () => {
  return db('videos').select('id', 'videotitle', 'video');
};

const videoByChapter = id => {
  return select().where('chapterId', id);
};

exports.read = id => {
  return id ? videoByChapter(id) : select();
};

exports.readById = async id => {
  return await select().where('id', id);
};
