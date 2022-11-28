/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('roles', tbl => {
      tbl.increments('role_id'), tbl.string('role_name');
    })
    .createTable('users', tbl => {
      tbl.increments('user_id'),
        tbl.string('username', 128).notNullable(),
        tbl.string('email', 128).notNullable(),
        tbl.integer('password', 128).notNullable(),
        tbl.string('image'),
        tbl.string('location', 128),
        tbl.string('create_at').notNullable(),
        tbl.string('update_at'),
        tbl
          .integer('role_id')
          .notNullable()
          .unsigned()
          .references('role_id')
          .inTable('roles')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    })
    .createTable('courses', tbl => {
      tbl.increments('course_id'),
        tbl.string('course_title', 128).notNullable(),
        tbl.string('description').notNullable(),
        tbl.string('thumnail').notNullable(),
        tbl.integer('price').notNullable(),
        tbl.integer('duration').notNullable(),
        tbl.string('create_at').notNullable(),
        tbl.string('update_at'),
        tbl
          .integer('user_id')
          .notNullable()
          .unsigned()
          .references('user_id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    })
    .createTable('chapters', tbl => {
      tbl.increments('chapter_id'),
        tbl.string('chapter_title', 128).notNullable(),
        tbl
          .integer('course_id')
          .notNullable()
          .unsigned()
          .references('course_id')
          .inTable('courses')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    })
    .createTable('videos', tbl => {
      tbl.increments('video_id'),
        tbl.string('video').notNullable(),
        tbl.string('video_title').notNullable(),
        tbl
          .integer('course_id')
          .notNullable()
          .unsigned()
          .references('course_id')
          .inTable('courses')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      tbl
        .integer('chapter_id')
        .notNullable()
        .unsigned()
        .references('chapter_id')
        .inTable('chapters')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('QandA', tbl => {
      tbl.increments('QandA_id');
      tbl.string('question');
      tbl.string('create_at');
      tbl
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .integer('video_id')
        .notNullable()
        .unsigned()
        .references('video_id')
        .inTable('Videos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('reviews', tbl => {
      tbl.increments('review_id'),
        tbl.string('review_stars').notNullable(),
        tbl.string('commnet'),
        tbl.string('create_at'),
        tbl.string('update_at'),
        tbl
          .integer('user_id')
          .notNullable()
          .unsigned()
          .references('user_id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE'),
        tbl
          .integer('course_id')
          .notNullable()
          .unsigned()
          .references('course_id')
          .inTable('courses')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    })
    .createTable('replys', tbl => {
      tbl.increments('reply_id'),
        tbl.string('reply'),
        tbl.string('create_at'),
        tbl.string('update_at'),
        tbl
          .integer('user_id')
          .notNullable()
          .unsigned()
          .references('user_id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE'),
        tbl
          .integer('course_id')
          .notNullable()
          .unsigned()
          .references('course_id')
          .inTable('courses')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('replys')
    .dropTableIfExists('QandA')
    .dropTableIfExists('videos')
    .dropTableIfExists('chapters')
    .dropTableIfExists('reviews')
    .dropTableIfExists('courses')
    .dropTableIfExists('users')
    .dropTableIfExists('roles');
};
