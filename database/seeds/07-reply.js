/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('reply').del();
  await knex('reply').insert([
    {
      reply: 'do this ',
      userId: 1,
      QandAId: 1,
      videoId: 2,
      createAt: '01/02/2022',
    },
    {
      reply: 'do this ',
      userId: 3,
      QandAId: 1,
      videoId: 2,
      createAt: '01/02/2022',
    },
    {
      reply: 'do this ',
      userId: 2,
      QandAId: 1,
      videoId: 2,
      createAt: '01/02/2022',
    },
    {
      reply: 'do this ',
      userId: 3,
      QandAId: 2,
      videoId: 2,
      createAt: '01/02/2022',
    },
  ]);
};
