/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('chapters').del()
  await knex("chapters").insert([
    {
      chapterTitle:"Datastructure",
      courseId:1,
    },
    {
      chapterTitle:"Async and await",
      courseId:1,
    },
    {
      chapterTitle:"expo ",
      courseId:2,
    },
    {
      chapterTitle:"React native cli",
      courseId:2,
    },
    {
      chapterTitle:"Array",
      courseId:3,
    },
    {
      chapterTitle:"Functions",
      courseId:3,
    },
    {
      chapterTitle:"classes ",
      courseId:4,
    },
    {
      chapterTitle:"Interfaces",
      courseId:4
    },
    {
      chapterTitle:"Objects",
      courseId:5,
    },
    {
      chapterTitle:"Connect Database",
      courseId:5,
    },
    {
      chapterTitle:"Date and time",
      courseId:6,
    },
    {
      chapterTitle:"Geolocation",
      courseId:6,
    },
  ]);
};
