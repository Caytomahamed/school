exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("roles").del();
  await knex("roles").insert([
    { role_name: "admin" },
    { role_name: "student" },
    { role_name: "instructor" },
  ]);
 
  await knex("users").insert([
    {
      username: "cayto",
      email: "cayto@gmail.com",
      password: 33333,
      image:
        "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
      location: "hargeisa",
      create_at: "2022-10-01",
      update_at: "2022-10-03",
      role_id: 1,
    },
    {
      username: "mahamed",
      email: "mahamed@gmail.com",
      password: 33333,
      image:
        "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
      location: "hargeisa",
      create_at: "2022-10-01",
      update_at: "2022-10-03",
      role_id: 3,
    },
    {
      username: "hamse",
      email: "hamse@gmail.com",
      password: 33333,
      image:
        "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
      location: "hargeisa",
      create_at: "2022-10-01",
      update_at: "2022-10-03",
      role_id: 2,
    },
    {
      username: "farax",
      email: "hamse@gmail.com",
      password: 33333,
      image:
        "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
      location: "hargeisa",
      create_at: "2022-10-01",
      update_at: "2022-10-03",
      role_id: 2,
    },
    {
      username: "cumar",
      email: "hamse@gmail.com",
      password: 33333,
      image:
        "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
      location: "hargeisa",
      create_at: "2022-10-01",
      update_at: "2022-10-03",
      role_id: 2,
    },
  ]);
};
