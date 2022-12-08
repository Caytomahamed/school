exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('roles').del();
  await knex('roles').insert([
    { roleName: 'admin' },
    { roleName: 'student' },
    { roleName: 'instructor' },
  ]);

  await knex('users').insert([
    {
      fristname: 'cayto',
      secondname: 'mahamed',
      email: 'cayto@gmail.com',
      password: 33333333,
      imageProfile:
        'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
      roleId: 1,
      createAt: '2022-10-01',
      updateAt: '2022-10-03',
    },
    {
      fristname: 'Omer',
      secondname: 'Ali',
      email: 'Omer@gmail.com',
      password: 44444444,
      imageProfile:
        'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
      roleId: 2,
      createAt: '2022-10-01',
      updateAt: '2022-10-03',
    },
    {
      fristname: 'Jamac',
      secondname: 'cabdi',
      email: 'jamac@gmail.com',
      password: 10101010,
      imageProfile:
        'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
      roleId: 3,
      createAt: '2022-10-01',
      updateAt: '2022-10-03',
    },
  ]);
};
