const db = require('../database/dbConfig');

const select = async () => {
 return await db('QandA as QA')
   .join('users as u', 'QA.user_id', 'u.user_id')
   .select('QandA_id', 'question', 'username', 'image', 'QA.create_at');
};

exports.read = () => {
    return select()
}
 