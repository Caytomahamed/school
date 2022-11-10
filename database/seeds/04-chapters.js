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
    {
      chapter_title:"Array",
      course_id:3,
    },
    {
      chapter_title:"Functions",
      course_id:3,
    },
    {
      chapter_title:"classes ",
      course_id:4,
    },
    {
      chapter_title:"Interfaces",
      course_id:4
    },
    {
      chapter_title:"Objects",
      course_id:5,
    },
    {
      chapter_title:"Connect Database",
      course_id:5,
    },
    {
      chapter_title:"Date and time",
      course_id:6,
    },
    {
      chapter_title:"Geolocation",
      course_id:6,
    },
  ]);
};
