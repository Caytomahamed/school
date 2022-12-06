const db = require('../database/dbConfig');

const select = () => {
  return db('QandA as QA')
    .join('users as u', 'QA.userId', 'u.id')
    .select(
      'QA.id',
      'fristName',
      'secondName',
      'imageProfile',
      'question',
      'QA.createAt'
    );
};

const QandAByVideo = id => {
  return select().where('videoId', id);
};

exports.read = id => {
  return id ? QandAByVideo(id) : select();
};

exports.readById = id => {
  return select().where('QA.id', id);
};
