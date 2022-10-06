/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("roles", (tbl) => {
      tbl.increments("role_id"), tbl.string("role_name");
    })
    .createTable("users", (tbl) => {
      tbl.increments("user_id"),
        tbl.string("username", 128).notNullable(),
        tbl.string("email", 128).notNullable(),
        tbl.integer("password", 128).notNullable(),
        tbl.binary("profileImage"),
        tbl.string("location", 128),
        tbl.string("create_at").notNullable(),
        tbl.string("update_at"),
        tbl
          .integer("role_id")
          .notNullable()
          .unsigned()
          .references("role_id")
          .inTable("roles")
          .onUpdate("RESTRICT")
          .onDelete("RESTRICT");
    })
    .createTable("courses", (tbl) => {
      tbl.increments("user_id"),
        tbl.string("username", 128).notNullable(),
        tbl.string("email", 128).notNullable(),
        tbl.integer("password", 128).notNullable(),
        tbl.binary("profileImage"),
        tbl.string("location", 128),
        tbl.string("create_at").notNullable(),
        tbl.string("update_at");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("courses")
    .dropTableIfExists("users")
    .dropTableIfExists("roles");
};
