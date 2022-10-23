const db = require("../database/dbConfig");

exports.findAll = async function(){
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

exports.findBy = function(filter){
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

exports.findById = function(userId) {
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
    .where("users.user_id", userId);
}

exports.insert = async(user)  => {
  let createUserId;
  await db.transaction(async (trx) => {
    let roleIdToUse;
    const [role] = await trx("roles").where("roles.role_name", role_name);
    if (role) {
      roleIdToUse = role.role_id;
    }

    const [userId] = await trx('users').insert({
      username: user.username,
      email: user.email,
      password: user.password,
      image: user.image,
      location: user.location,
      create_at: user.create_at,
      update_at: user.update,
      role_id: roleIdToUse,
    });

    createUserId = userId;
  });

  return this.findById(createUserId);
}

exports.update = function(id, change){
  return db("users").update("*", change).where("users.user_id", id);
}

exports.remove = function(id){
  return db("users").where("users.user_id", id);
}

