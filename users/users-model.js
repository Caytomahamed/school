const db = require("../database/dbConfig");
const knexnest = require("knexnest");

async function find() {
  let result = [];
  await db
    .select(
      "u.user_id",
      "u.username",
      "u.profileImage",
      "u.location",
      "u.create_at",
      "u.update_at",
      "r.role_name"
    )
    .from("users as u")
    .join("roles as r", "u.role_id", "r.role_id")
    .then((users) => {
      users.map((u) => {
        result.push({
          id: u.user_id,
          name: u.username,
          props: [
            {
              image: u.profileImage,
              location: u.location,
            },
            {
              create: u.create_at,
              update: u.update_at,
            },
          ],
          role: u.role_name,
        });
      });
    });

  return result;
}

function findBy(filter) {
  // select user_id,username,profileImage,location,r.role_name from users
  //   join roles r
  //   using(role_id)
  //   where(col-name)
  return db("users")
    .join("roles", "users.role_id", "roles.role_id")
    .select(
      "user_id",
      "username",
      "profileImage",
      "location",
      "create_at",
      "update_at",
      "roles.role_name"
    )
    .where(filter);
}

function findById(user_id) {
  // select user_id,username,profileImage,location,r.role_name from users
  //   join roles r
  //   using(role_id)
  return db("users")
    .join("roles", "users.role_id", "roles.role_id")
    .select(
      "user_id",
      "username",
      "profileImage",
      "location",
      "create_at",
      "update_at",
      "roles.role_name"
    )
    .where("users.user_id", user_id);
}

async function insert({
  username,
  email,
  password,
  profileImage,
  location,
  create_at,
  update_at,
  role_name,
}) {
  let create_user_id;
  await db.transaction(async (trx) => {
    let role_id_to_use;
    const [role] = await trx("roles").where("roles.role_name", role_name);
    if (role) {
      role_id_to_use = role.role_id;
    }

    const [user_id] = await trx("users").insert({
      username,
      email,
      password,
      profileImage,
      location,
      create_at,
      update_at,
      role_id: role_id_to_use,
    });

    create_user_id = user_id;
  });

  return findById(create_user_id);
}

function update(id, change) {
  return db("users").update("*", change).where("users.user_id", id);
}

function remove(id) {
  return db("users").del().where("users.user_id", id);
}

module.exports = {
  find,
  findBy,
  findById,
  insert,
  update,
  remove,
};
