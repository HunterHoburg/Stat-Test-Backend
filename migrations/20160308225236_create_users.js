
exports.up = function(knex, Promise) {
  return knex.schema.createTable('test', function(table) {
    table.increments('user_id');
    table.string('username');
    table.string('email');
    table.string('password');
    table.string('color_1');
    table.string('color_2');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('test');
};
