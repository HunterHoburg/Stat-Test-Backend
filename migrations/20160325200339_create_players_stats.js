
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players_stats', function(table) {
    table.increments('id');
    // table.integer('id');
    table.integer('player_id');
    table.integer('stat_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players_stats');
};
