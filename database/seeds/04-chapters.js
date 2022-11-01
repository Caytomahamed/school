/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('chapters').del()
  await knex("chapters").insert([
    {
      chapter_title:"Datastructure",
      course_id:1,
    },
    {
      chapter_title:"Async and await",
      course_id:1,
    },
    {
      chapter_title:"expo ",
      course_id:2,
    },
    {
      chapter_title:"React native cli",
      course_id:2,
    },
  ]);
};
