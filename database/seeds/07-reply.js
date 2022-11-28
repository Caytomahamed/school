/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('replys').del()
  await knex('replys').insert([
    {
      reply:"do this ",
      create_at:"01/02/2022",
      update_at:"01/02/2022",
      user_id:4,
      course_id:2
    }
  ]);
};
