
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stats', function(table) {
    table.increments('stat_id');
    // table.integer('stat_id');
    table.string('measurement');
    table.integer('position');
    table.string('color');
    table.integer('parent_id');
    table.integer('project_id');
    table.integer('numerator');
    table.integer('denominator');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stats');
};
