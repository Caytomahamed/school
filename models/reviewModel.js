const db = require('.././database/dbConfig');

const selecter = () => {
  return db('reviews as r')
    .join('users as u', 'u.user_id', 'r.user_id')
    .select('username', 'image', 'commnet', 'review_stars', 'r.create_at');
};

exports.find = (id) => {
    return id ? selecter().where("course_id",id) : selecter();
};

exports.findById = id => {
  return db('reviews as r')
    .join('users as u', 'u.user_id', 'r.user_id')
    .select('username', 'image', 'commnet', 'review_stars', 'r.create_at')
    .where('review_id', id);
};

exports.create = async body => {
  const [id] = await db('reviews').insert(body);
  return this.findById(id);
};

exports.findByIdandUpdate = async (id, change) => {
  await db('reviews as r').where('r.review_id', id).update(change);
  return this.findById(id);
};

exports.findByIdandDelete = id => {
  return db('reviews as r').where('r.review_id', id).del();
};
