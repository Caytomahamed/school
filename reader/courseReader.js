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
      'level',
      'price',
      'ratingsAverage'
    )
    .count('r.id as ratingsPeople')
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

exports.filter = filter => {
  return select().where(filter);
};

exports.rating = () => {
  return db('courses as c')
    .leftJoin('users as u', 'c.userId', 'u.id')
    .leftJoin('reviews as r', 'c.id', 'r.courseId')
    .select('c.id')
    .avg('r.stars as ratingsAverage')
    .groupBy('c.id');
};

exports.addRatingIntoDB = (id, changes) => {
  return db('courses').where('id', id).update(changes);
};
