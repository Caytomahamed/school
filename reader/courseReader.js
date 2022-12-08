const db = require('../database/dbConfig');

const select = () => {
  return db('courses as c')
    .leftJoin('users as u', 'c.userId', 'u.id')
    .leftJoin('reviews as r', 'c.id', 'r.courseId')
    .select(
      'c.id',
      'fristName',
      'secondName',
      'courseTitle',
      'description',
      'thumnail',
      'duration',
      'price'
    )
    .avg('r.stars as averageReviews')
    .count('r.id as numberOfreviewers')
    .groupBy('c.id');
};

const courseByUser = id => {
  return select().where('c.userId', id);
};

exports.read = id => {
  return id ? courseByUser(id) : select();
};

exports.readById = async id => {
  return await select().where('c.id', id);
};
