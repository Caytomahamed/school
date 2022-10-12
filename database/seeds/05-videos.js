/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('videos').del()
  await knex("videos").insert([
    {
      video: "https://youtu.be/PkZNo7MFNFg",
      video_title: "Learn JavaScript ",
      course_id: 1,
      chapter_id: 1,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      video_title: "javascript fundmentals",
      course_id: 1,
      chapter_id: 2,
    },
    {
      video: "https://youtu.be/PkZNo7MFNFg",
      video_title: "Get start react native ",
      course_id: 2,
      chapter_id: 1,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      video_title: "Basic of the react native",
      course_id: 2,
      chapter_id: 2,
    },
  ]);
};
