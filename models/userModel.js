const db = require("../database/dbConfig");

exports.findAll = async() => {
  return db("users as u")
    .join("roles as r", "u.role_id", "r.role_id")
    .select(
      "u.user_id",
      "u.username",
      "u.image",
      "u.location",
      "u.create_at",
      "u.update_at",
      "r.role_name"
    )
}

exports.findBy = (filter) => {
  return db("users")
    .join("roles", "users.role_id", "roles.role_id")
    .select(
      "user_id",
      "username",
      "image",
      "location",
      "create_at",
      "update_at",
      "roles.role_name"
    )
    .where(filter);
}

exports.findById =(user_id) => {
  return db("users")
    .join("roles", "users.role_id", "roles.role_id")
    .select(
      "user_id",
      "username",
      "image",
      "location",
      "create_at",
      "update_at",
      "roles.role_name"
    )
    .where("users.user_id", user_id);
}

exports.insert = async(user)  => {
  let create_user_id;
  await db.transaction(async (trx) => {
    let role_id_to_use;
    const [role] = await trx("roles").where("roles.role_name", role_name);
    if (role) {
      role_id_to_use = role.role_id;
    }

    const [user_id] = await trx("users").insert({
      username:user.username,
      email:user.email,
      password:user.password,
      image:user.image,
      location:user.location,
      create_at:user.create_at,
      update_at:user.update,
      role_id: role_id_to_use, 
    });

    create_user_id = user_id;
  });

  return findById(create_user_id);
}

exports.update = (id, change)  =>{
  return db("users").update("*", change).where("users.user_id", id);
}

exports.remove = (id) => {
  return db("users").where("users.user_id", id);
}

