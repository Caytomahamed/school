const db = require('../database/dbConfig');

const select = () => {
  return db('QandA as QA')
    .join('users as u', 'QA.user_id', 'u.user_id')
    .select('QandA_id', 'question', 'username', 'image', 'QA.create_at');
};
const QandAByVideo = id => {
  return select().where('video_id', id);
};

exports.read = id => {
  return id ? QandAByVideo(id) : select();
};

exports.readById = id => {
  return select().where('QandA_id', id);
};
