
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', function(table) {
    table.increments('player_id');
    // table.integer('player_id');
    table.string('color');
    table.integer('user_id');
    table.string('player_name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players');
};
