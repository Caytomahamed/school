const db = require('../database/dbConfig');

exports.findAll = () => {
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
    .groupBy('c.course_id');
}

exports.findBy = (filter)  => {
  return db('courses as c')
    .leftJoin('users as u', 'c.user_id', 'u.user_id')
    .leftJoin('reviews as r', 'c.course_id', 'r.course_id')
    .groupBy('c.course_id')
    .select(
      'c.course_id',
      'course_title',
      'description',
      'price',
      'duration',
      'thumnail',
      'username'
    )
    .where('*', filter);
}

exports.findById = (id) => {
  return db('courses as c')
    .leftJoin('users as u', 'c.user_id', 'u.user_id')
    .leftJoin('reviews as r', 'c.course_id', 'r.course_id') 
    .select(
      'c.course_id',
      'course_title',
      'description',
      'price',
      'duration',
      'thumnail',
      'username'
    )
    .groupBy('c.course_id')
    .where('c.course_id', id);
}

exports.insert = async (newCourse) => {
  const [id] = await db('courses').insert(newCourse);
  console.log(id);
  return this.findById(id);
}

exports.update = async(id, changes) => {
  await db('courses as c').where('c.course_id', id).update(changes);
  return this.findById(id);
}

exports.remove = (id) => {
  return db('courses as c').where('c.course_id', id).del();
}

