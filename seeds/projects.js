
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('projects').del(),

    // Inserts seed entries
    knex('projects').insert({
      user_id: 1,
      player_id: 1,
      global_stat_id: '1',
      title: 'Punishers',
      project_id: 1
    }),
    knex('projects').insert({
      user_id: 1,
      player_id: 2,
      global_stat_id: '1',
      title: 'Punishers',
      project_id: 1
    }),
    knex('projects').insert({
      user_id: 2,
      player_id: 3,
      global_stat_id: '2',
      title: 'Little League Team',
      project_id: 2
    })
  );
};
