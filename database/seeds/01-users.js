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
      fristname: 'admin',
      secondname: 'admin',
      email: 'admin@gmail.com',
      password: "$2b$12$8qxZIr86Rg9O.cG3K2Yyx.aKJb1CQqA8rI3grhDvdhyFMi51uufqa",//admin123
      imageProfile:
        'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
      roleId: 1,
      createAt: '2022-10-01',
      updateAt: '2022-10-03',
      active: true,
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
      active: true,
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
      active: true,
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
      active: true,
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
      active: true,
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
      active: true,
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
      active: true,
    },
  ]);
};
