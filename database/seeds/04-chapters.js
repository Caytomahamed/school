/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('chapters').del()
  await knex("chapters").insert([
    {
      chapter_title:"Get started",
      course_id:1,
    },
    {
      chapter_title:"Fundemental 1",
      course_id:1,
    },
    {
      chapter_title:"Get started",
      course_id:2,
    },
    {
      chapter_title:"React native basics",
      course_id:2,
    },
  ]);
};
