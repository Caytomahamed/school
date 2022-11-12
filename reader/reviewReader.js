const db = require('../database/dbConfig');

const select = async() => {
  return await db('reviews as r')
    .join('users as u', 'u.user_id', 'r.user_id')
    .select('username', 'image', 'commnet', 'review_stars', 'r.create_at');
};

const reviewByCourse = id => {
  return select().where('course_id', id);
};

exports.read = id => {
  return id ? reviewByCourse(id) : select();
};

exports.readById = id => {
  return select().where('review_id', id);
};
