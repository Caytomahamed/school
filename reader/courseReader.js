const db = require('../database/dbConfig');

const select =  () => {
  return db('courses as c')
    .leftJoin('users as u', 'c.user_id', 'u.user_id')
    .leftJoin('reviews as r', 'c.course_id', 'r.course_id')
    .select(
      'course_title',
      'description',
      'price',
      'duration',
      'thumnail',
      'username'
    )
    .avg('r.review_stars as averageReviews')
    .count("r.review_id as numberOfreviewers")
    .groupBy('c.course_id');
};

const courseByUser = id => {
  return select().where('c.user_id', id);
};

exports.read = id => {
  return id ? courseByUser(id) : select();
};

exports.readById =  async id => {
  return await select().where('c.course_id', id);
};
