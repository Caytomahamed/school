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
      userId: 3,
      videoId: 1,
      createAt: '11/12/2022',
    },
    {
      question: 'what is the Advanced Array Methods',
      userId: 2,
      videoId: 2,
      createAt: '11/12/2022',
    },
    {
      question: 'what is the hooks',
      userId: 2,
      videoId: 3,
      createAt: '11/12/2022',
    },
    {
      question: 'what is the side effect',
      userId: 3,
      videoId: 5,
      createAt: '11/12/2022',
    },
    {
      question: 'what is the OOP',
      userId: 3,
      videoId: 6,
      createAt: '11/12/2022',
    },
    {
      question: 'what is the Methods',
      userId: 3,
      videoId: 7,
      createAt: '11/12/2022',
    },
    {
      question: 'what is the c++',
      userId: 3,
      videoId: 8,
      createAt: '11/12/2022',
    },
    {
      question: 'what is the c++ Methods',
      userId: 2,
      videoId: 9,
      createAt: '11/12/2022',
    },
    {
      question: 'what is the different between c and c++',
      userId: 2,
      videoId: 10,
      createAt: '11/12/2022',
    },
    {
      question: 'what is the object in c',
      userId: 1,
      videoId: 11,
      createAt: '11/12/2022',
    },
    {
      question: 'what is javascript',
      userId: 3,
      videoId: 12,
      createAt: '11/12/2022',
    },
    {
      question: 'what is Advanced Array Methods',
      userId: 1,
      videoId: 2,
      createAt: '11/12/2022',
    },
    {
      question: 'what is javascript',
      userId: 3,
      videoId: 1,
      createAt: '11/12/2022',
    },
    {
      question: 'what is Advanced Array Methods',
      userId: 1,
      videoId: 2,
      createAt: '11/12/2022',
    },
  ]);
};
