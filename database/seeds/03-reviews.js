/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('reviews').del();
  await knex('reviews').insert([
    {
      stars: 2,
      comment:
        "It's insane to think that I spent 5000 bucks in a private school over the course of half a year to learn what this guy has taught me in 3 h 26 m and 42 s. Youtube has truly revolutionized learning.",
      createAt: '19/10/2020',
      userId: 1,
      courseId: 1,
    },
    {
      stars: 3,
      comment:
        "It's insane to think that I spent 5000 bucks in a private school over the course of half a year to learn what this guy has taught me in 3 h 26 m and 42 s. Youtube has truly revolutionized learning.",
      createAt: '19/10/2020',
      userId: 2,
      courseId: 2,
    },
    {
      stars: 4,
      comment:
        "It's insane to think that I spent 5000 bucks in a private school over the course of half a year to learn what this guy has taught me in 3 h 26 m and 42 s. Youtube has truly revolutionized learning.",
      createAt: '19/10/2020',
      userId: 3,
      courseId: 3,
    },
    {
      stars: 4,
      comment:
        'As a beginner, I found this course very useful Thanks for sharing this high-quality content.',
      createAt: '30/1/2020',
      userId: 4,
      courseId: 4,
    },
    {
      stars: 2,
      comment:
        'What a wonderful course. So informative and simple! Thank you for putting so much time into creating this.',
      createAt: '19/12/2020',
      userId: 5,
      courseId: 5,
    },
    {
      stars: 5,
      comment:
        'I like how an entire class of this will make you put blocks of code together and learn nothing for an entire semester and this 3 hour video teaches more than an actual school course and is easy to understand and fix mistakes.',
      createAt: '19/11/2020',
      userId: 6,
      courseId: 6,
    },
    {
      stars: 5,
      comment:
        'I like how an entire class of this will make you put blocks of code together and learn nothing for an entire semester and this 3 hour video teaches more than an actual school course and is easy to understand and fix mistakes.',
      createAt: '19/10/2022',
      userId: 7,
      courseId: 2,
    },
    // {
    //   stars: 5,
    //   comment:
    //     'I like how an entire class of this will make you put blocks of code together and learn nothing for an entire semester and this 3 hour video teaches more than an actual school course and is easy to understand and fix mistakes.',
    //   createAt: '19/10/2021',
    //   userId: 2,
    //   courseId: 3,
    // },
    // {
    //   stars: 5,
    //   comment:
    //     'I like how an entire class of this will make you put blocks of code together and learn nothing for an entire semester and this 3 hour video teaches more than an actual school course and is easy to understand and fix mistakes.',
    //   createAt: '19/10/2021',
    //   userId: 2,
    //   courseId: 4,
    // },
    // {
    //   stars: 5,
    //   comment:
    //     'I like how an entire class of this will make you put blocks of code together and learn nothing for an entire semester and this 3 hour video teaches more than an actual school course and is easy to understand and fix mistakes.',
    //   createAt: '1/10/2022',
    //   userId: 1,
    //   courseId: 4,
    // },
    // {
    //   stars: 5,
    //   comment:
    //     'I like how an entire class of this will make you put blocks of code together and learn nothing for an entire semester and this 3 hour video teaches more than an actual school course and is easy to understand and fix mistakes.',
    //   createAt: '5/10/2020',
    //   userId: 3,
    //   courseId: 5,
    // },
    // {
    //   stars: 5,
    //   comment:
    //     'I like how an entire class of this will make you put blocks of code together and learn nothing for an entire semester and this 3 hour video teaches more than an actual school course and is easy to understand and fix mistakes.',
    //   createAt: '19/8/2020',
    //   userId: 3,
    //   courseId: 5,
    // },
    // {
    //   stars: 5,
    //   comment:
    //     'I like how an entire class of this will make you put blocks of code together and learn nothing for an entire semester and this 3 hour video teaches more than an actual school course and is easy to understand and fix mistakes.',
    //   createAt: '19/11/2021',
    //   userId: 3,
    //   courseId: 6,
    // },
    // {
    //   stars: 5,
    //   comment:
    //     'I like how an entire class of this will make you put blocks of code together and learn nothing for an entire semester and this 3 hour video teaches more than an actual school course and is easy to understand and fix mistakes.',
    //   createAt: '19/8/2022',
    //   userId: 3,
    //   courseId: 6,
    // },
  ]);
};
