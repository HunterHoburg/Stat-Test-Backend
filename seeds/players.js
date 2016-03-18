
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('players').del(),

    // Inserts seed entries
    knex('players').insert({
      player_id: 1,
      color: '#e23e12',
      user_id: 1,
      player_name: 'Hunter'
    }),
    knex('players').insert({
      player_id: 2,
      color: '#99e212',
      user_id: 1,
      player_name: 'Kevin'
    }),
    knex('players').insert({
      player_id: 3,
      color: '#12e23a',
      user_id: 2,
      player_name: 'Connor'
    })
  );
};
