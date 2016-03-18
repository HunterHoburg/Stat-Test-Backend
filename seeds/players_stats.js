
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('players_stats').del(),

    // Inserts seed entries
    knex('players_stats').insert({
      player_id: 1,
      stat_id: 1
    }),
    knex('players_stats').insert({
      player_id: 1,
      stat_id: 2
    }),
    knex('players_stats').insert({
      player_id: 1,
      stat_id: 3
    }),
    knex('players_stats').insert({
      player_id: 2,
      stat_id: 4
    }),
    knex('players_stats').insert({
      player_id: 2,
      stat_id: 5
    }),
    knex('players_stats').insert({
      player_id: 2,
      stat_id: 6
    }),
    knex('players_stats').insert({
      player_id: 3,
      stat_id: 7
    }),
    knex('players_stats').insert({
      player_id: 3,
      stat_id: 8
    }),
    knex('players_stats').insert({
      player_id: 3,
      stat_id: 9
    })
  );
};
