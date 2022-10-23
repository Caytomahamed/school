const db = require('../database/dbConfig');

exports.findAll = () =>
     db('chapters as ch')
    .join('courses as c', 'c.course_id', 'ch.course_id')
    .select('chapter_id', 'chapter_title', 'course_title');

exports.findById = (id) => 
    db('chapters as ch')
    .join('courses as c', 'c.course_id', 'ch.course_id')
    .select('chapter_id', 'chapter_title', 'course_title')
    .where("chapter_id",id);

