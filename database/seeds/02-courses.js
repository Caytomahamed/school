/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("courses").del();
  await knex("courses").insert([
    {
      courseTitle: "The Complete JavaScript Course 2022: From Zero to Expert!",
      description:
        "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
      thumnail:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 89.9,
      duration:20,
      createAt: "2022-01-01",
      updateAt: "2022-10-10",
      userId: 1,
    },
    {
      courseTitle: "React Native - The Practical Guide [2022]",
      description:
        "Use React Native and your React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux",
      thumnail:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 89.9,
      duration:55,
      createAt: "2022-01-01",
      updateAt: "2022-10-10",
      userId: 1,
    },
    {
      courseTitle: "Java",
      description:
        "Use React Native and your React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux",
      thumnail:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 89.9,
      duration:55,
      createAt: "2022-01-01",
      updateAt: "2022-10-10",
      userId: 2,
    },
    {
      courseTitle: "C++",
      description:
        "Use React Native and your React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux",
      thumnail:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 89.9,
      duration:55,
      createAt: "2022-01-01",
      updateAt: "2022-10-10",
      userId: 2,
    },
    {
      courseTitle: "C",
      description:
        "Use React Native and your React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux",
      thumnail:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 89.9,
      duration:55,
      createAt: "2022-01-01",
      updateAt: "2022-10-10",
      userId: 3,
    },
    {
      courseTitle: "php",
      description:
        "Use React Native and your React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux",
      thumnail:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 89.9,
      duration:55,
      createAt: "2022-01-01",
      updateAt: "2022-10-10",
      userId: 3,
    },
  ]);
};
