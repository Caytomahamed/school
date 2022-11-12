const db = require('../database/dbConfig');

const selector = () => {
  return db('videos').select('video_title as title', 'video');
};

exports.find = id => {
  return id ? selector().where('chapter_id', id) : selector();
};

exports.findById = id => {
  return db('videos as v')
    .select('video_title', 'video')
    .where('v.video_id', id);
};

exports.create = async body => {
  const [id] = await db('videos').insert(body);
  return this.findById(id);
};

exports.findByIdandUpdate = async (id, change) => {
  await db('videos as v').where('v.video_id', id).update(change);
  return this.findById(id);
};

exports.findByIdandDelete = id => {
  return db('videos as v').where('v.video_id', id).del();
};
