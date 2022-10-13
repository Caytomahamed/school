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
      video_title: "JavaScript video ",
      course_id: 1,
      chapter_id:1,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      video_title: "javascript video",
      course_id: 1,
      chapter_id: 2,
    },
    {
      video: "https://youtu.be/PkZNo7MFNFg",
      video_title: "react native video ",
      course_id: 2,
      chapter_id: 3,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      video_title: "react native video 1",
      course_id: 2,
      chapter_id: 4,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      video_title: "react native video 2",
      course_id: 2,
      chapter_id: 4,
    },
  ]);
};
