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
      tbl.increments("course_id"),
        tbl.string("course_title", 128).notNullable(),
        tbl.string("description").notNullable(),
        tbl.string("create_at").notNullable(),
        tbl.string("update_at"),
        tbl
          .integer("user_id")
          .notNullable()
          .references("user_id")
          .inTable("users")
          .onUpdate("RESTRICT")
          .onDelete("RESTRICT");
    })
    .createTable("chapters", (tbl) => {
        tbl.increments("chapter_id"),
        tbl.string("chapter_title", 128).notNullable(),
        tbl
          .integer("course_id")
          .notNullable()
          .references("course_id")
          .inTable("courses")
          .onUpdate("RESTRICT")
          .onDelete("RESTRICT");
    })
    .createTable("videos", (tbl) => {
      tbl.increments("video_id"),
        tbl.binary("video").notNullable(),
        tbl.string("video_title").notNullable(),
        tbl
          .integer("course_id")
          .notNullable()
          .references("course_id")
          .inTable("courses")
          .onUpdate("RESTRICT")
          .onDelete("RESTRICT");
      tbl
        .integer("chapter_id")
        .notNullable()
        .references("chapter_id")
        .inTable("chapters")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
    })
    .createTable("reviews", (tbl) => {
      tbl.increments("review_id"),
        tbl.string("review_star").notNullable(),
        tbl.string("commnet"),
        tbl.integer("user_id")
           .notNullable()
           .references("user_id")
           ,inTable("users")
           .onUpdate("RESTRICT")
           .onDelete("RESTRICT")
           
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("courses")
    .dropTableIfExists("chapters")
    .dropTableIfExists("videos")
    .dropTableIfExists("roles");
};
