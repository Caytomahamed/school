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
      videoTitle: "JavaScript video",
      courseId: 1,
      chapterId:1,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      videoTitle: "javascript video",
      courseId: 1,
      chapterId: 2,
    },
    {
      video: "https://youtu.be/PkZNo7MFNFg",
      videoTitle: "react native video ",
      courseId: 2,
      chapterId: 3,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      videoTitle: "react native video 1",
      courseId: 2,
      chapterId: 4,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      videoTitle: " java video 2",
      courseId: 3,
      chapterId: 5,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      videoTitle: "introduction to java ",
      courseId: 3,
      chapterId: 6,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      videoTitle: "C++ intro",
      courseId: 4,
      chapterId: 7,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      videoTitle: "c++ histroy",
      courseId: 4,
      chapterId: 8,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      videoTitle: "c dataType ",
      courseId: 5,
      chapterId: 9,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      videoTitle: "functions in c",
      courseId: 5,
      chapterId: 10,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      videoTitle: "introduction to php",
      courseId: 6,
      chapterId: 11,
    },
    {
      video: "https://youtu.be/ymwujvIB9R0",
      videoTitle: "php array and object",
      courseId: 6,
      chapterId: 12,
    },
  ]);
};
