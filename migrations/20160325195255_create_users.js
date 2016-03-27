
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('user_id');
    // table.integer('user_id');
    table.string('email');
    table.string('password');
    table.string('username');
    table.string('color_1');
    table.string('color_2');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
