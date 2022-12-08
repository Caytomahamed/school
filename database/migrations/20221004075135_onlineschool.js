/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('roles', tbl => {
      tbl.increments('id'), tbl.string('roleName');   
    })
    .createTable('users', tbl => {
      tbl.increments('id'),
        tbl.string('fristName', 128).notNullable(),
        tbl.string('secondName', 128).notNullable(),
        tbl.string('email', 128).notNullable(),
        tbl.integer('password').notNullable().checkLength('>=', 8),
        tbl.string('imageProfile'),
        tbl
          .integer('roleId')
          .notNullable()
          .unsigned()
          .references('id')
          .inTable('roles')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT'),
        tbl.string('createAt').notNullable(),
        tbl.string('updateAt');
    })
    .createTable('courses', tbl => {
      tbl.increments('id'),
        tbl.string('courseTitle', 128).notNullable(),
        tbl.string('description').notNullable(),
        tbl.string('thumnail').notNullable(),
        tbl.integer('price').notNullable(),
        tbl.integer('duration').notNullable(),
        tbl
          .integer('userId')
          .notNullable()
          .unsigned()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT'),
        tbl.string('createAt').notNullable(),
        tbl.string('updateAt');
    })
    .createTable('chapters', tbl => {
      tbl.increments('id'),
        tbl.string('chapterTitle', 128).notNullable(),
        tbl
          .integer('courseId')
          .notNullable()
          .unsigned()
          .references('id')
          .inTable('courses')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT');
    })
    .createTable('videos', tbl => {
      tbl.increments('id'),
        tbl.string('video').notNullable(),
        tbl.string('videoTitle').notNullable(),
        tbl
          .integer('courseId')
          .notNullable()
          .unsigned()
          .references('Id')
          .inTable('courses')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT');
      tbl
        .integer('chapterId')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('chapters')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    })
    .createTable('QandA', tbl => {
      tbl.increments('id');
      tbl.string('question');
      tbl
        .integer('userId')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
      tbl
        .integer('videoId')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('Videos')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      tbl.string('createAt').notNullable();
    })
    .createTable('reviews', tbl => {
      tbl.increments('id'),
        tbl.string('stars').notNullable(),
        tbl.string('comment'),
        tbl
          .integer('userId')
          .notNullable()
          .unsigned()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT'),
        tbl
          .integer('courseId')
          .notNullable()
          .unsigned()
          .references('id')
          .inTable('courses')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT'),
        tbl.string('createAt').notNullable(),
        tbl.string('updateAt');
    })
    .createTable('reply', tbl => {
      tbl.increments('id'),
        tbl.string('reply'),
        tbl
          .integer('QandAId')
          .notNullable()
          .unsigned()
          .references('id')
          .inTable('QandA')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT'),
        tbl
          .integer('videoId')
          .notNullable()
          .unsigned()
          .references('id')
          .inTable('videos')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT'),
        tbl
          .integer('userId')
          .notNullable()
          .unsigned()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT');

      tbl.string('createAt').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('reply')
    .dropTableIfExists('QandA')
    .dropTableIfExists('videos')
    .dropTableIfExists('chapters')
    .dropTableIfExists('reviews')
    .dropTableIfExists('courses')
    .dropTableIfExists('users')
    .dropTableIfExists('roles');
};
