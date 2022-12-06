const db = require('../database/dbConfig');

const select = () => {
  return db('reply as r')
    .join('users as u', 'r.userId', 'u.id')
    .select(
      'r.id',
      'fristName',
      'secondName',
      'imageProfile',
      'reply',
      'r.createAt',
    );
};

const QandAByReply = id => {
  return select().where('QA.id', id);
};

exports.read = id => {
  return id ? QandAByReply(id) : select();
};

exports.readById = id => {
  return select().where('r.id', id);
};
