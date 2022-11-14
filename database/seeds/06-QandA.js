/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('QandA').del();
  await knex('QandA').insert([
    {
      question: 'what is javascript',
      create_at: '11/12/2022',
      user_id: 3,
      video_id: 1,
    },
    {
      question: 'what is the Advanced Array Methods',
      create_at: '11/12/2022',
      user_id: 3,
      video_id: 2,
    },
    {
      question: 'what is the hooks',
      create_at: '11/12/2022',
      user_id: 3,
      video_id: 3,
    },
    {
      question: 'what is the side effect',
      create_at: '11/12/2022',
      user_id: 3,
      video_id: 5,
    },
    {
      question: 'what is the OOP',
      create_at: '11/12/2022',
      user_id: 3,
      video_id: 6,
    },
    {
      question: 'what is the Methods',
      create_at: '11/12/2022',
      user_id: 3,
      video_id: 7,
    },
    {
      question: 'what is the c++',
      create_at: '11/12/2022',
      user_id: 3,
      video_id: 8,
    },
    {
      question: 'what is the c++ Methods',
      create_at: '11/12/2022',
      user_id: 3,
      video_id: 9,
    },
    {
      question: 'what is the different between c and c++',
      create_at: '11/12/2022',
      user_id: 3,
      video_id: 10,
    },
    {
      question: 'what is the object in c',
      create_at: '11/12/2022',
      user_id: 3,
      video_id: 11,
    },
    {
      question: 'what is javascript',
      create_at: '11/12/2022',
      user_id: 3,
      video_id: 12,
    },
    {
      question: 'what is Advanced Array Methods',
      create_at: '11/12/2022',
      user_id: 3,
      video_id: 2,
    },
    {
      question: 'what is javascript',
      create_at: '11/12/2022',
      user_id: 3,
      video_id: 1,
    },
    {
      question: 'what is Advanced Array Methods',
      create_at: '11/12/2022',
      user_id: 3,
      video_id: 2,
    },
  ]);
};
