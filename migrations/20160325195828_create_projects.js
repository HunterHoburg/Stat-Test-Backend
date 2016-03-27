
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table) {
    table.increments();
    table.integer('user_id');
    table.integer('player_id');
    table.integer('global_stat_id');
    table.string('title');
    table.integer('project_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
