const db = require('../database/dbConfig');

const select =  () => {
  return db('videos')
  .select('video_id', 'video_title', 'video');
};

const videoByChapter = id => {
  return select().where('chapter_id', id);
};

exports.read = id => {
  return id ? videoByChapter(id) : select();
};

exports.readById = async (id) => {
    return await select().where('video_id', id);
}