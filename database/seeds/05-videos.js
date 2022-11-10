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
      video_title: "JavaScript video",
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
      video_title: " java video 2",
      course_id: 3,
      chapter_id: 5,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      video_title: "introduction to java ",
      course_id: 3,
      chapter_id: 6,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      video_title: "C++ intro",
      course_id: 4,
      chapter_id: 7,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      video_title: "c++ histroy",
      course_id: 4,
      chapter_id: 8,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      video_title: "c dataType ",
      course_id: 5,
      chapter_id: 9,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      video_title: "functions in c",
      course_id: 5,
      chapter_id: 10,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      video_title: "introduction to php",
      course_id: 6,
      chapter_id: 11,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      video_title: "php array and object",
      course_id: 6,
      chapter_id: 12,
    },
  ]);
};
