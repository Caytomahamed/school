const db = require('../database/dbConfig');

const select = async () => {
  return await db('videos')
  .select('video_id', 'video_title', 'video');
};

const videoByChapter = id => {
  return select().where('chapter_id', id);
};

exports.read = id => {
  return id ? videoByChapter(id) : select();
};

exports.readById = () => {
    return selectVideo().where('v.video_id', id);
}