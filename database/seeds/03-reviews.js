/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()
  await knex("reviews").insert([
    {
      review_star: 2,
      commnet:
        "It's insane to think that I spent 5000 bucks in a private school over the course of half a year to learn what this guy has taught me in 3 h 26 m and 42 s. Youtube has truly revolutionized learning.",
      user_id: 2,
      course_id: 1,
    },
    {
      review_star: 4,
      commnet:
        "As a beginner, I found this course very useful Thanks for sharing this high-quality content.",
      user_id: 2,
      course_id: 1,
    },
    {
      review_star: 2,
      commnet:
        "What a wonderful course. So informative and simple! Thank you for putting so much time into creating this.",
      user_id: 2,
      course_id: 2,
    },
    {
      review_star: 5,
      commnet:
        "I like how an entire class of this will make you put blocks of code together and learn nothing for an entire semester and this 3 hour video teaches more than an actual school course and is easy to understand and fix mistakes.",
      user_id: 2,
      course_id: 2,
    },
  ]);
};

