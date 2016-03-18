
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('measurements').del(),

    // Inserts seed entries
    knex('measurements').insert({
      stat_id: 1,
      numerator: 5,
      denominator: 4,
      measurement: 'K/D'
    }),
    knex('measurements').insert({
      stat_id: 2,
      numerator: 10,
      denominator: 1,
      measurement: 'Assists'
    }),
    knex('measurements').insert({
      stat_id: 3,
      numerator: 5,
      denominator: 1,
      measurement: 'Wins'
    }),
    knex('measurements').insert({
      stat_id: 4,
      numerator: 3,
      denominator: 2,
      measurement: 'K/D'
    }),
    knex('measurements').insert({
      stat_id: 5,
      numerator: 12,
      denominator: 1,
      measurement: 'Assists'
    }),
    knex('measurements').insert({
      stat_id: 6,
      numerator: 5,
      denominator: 1,
      measurement: 'Wins'
    }),
    knex('measurements').insert({
      stat_id: 7,
      numerator: 5,
      denominator: 5,
      measurement: 'K/D'
    }),
    knex('measurements').insert({
      stat_id: 8,
      numerator: 15,
      denominator: 1,
      measurement: 'Assists'
    }),
    knex('measurements').insert({
      stat_id: 9,
      numerator: 5,
      denominator: 1,
      measurement: 'Wins'
    }),
    knex('measurements').insert({
      stat_id: 10,
      numerator: 100,
      denominator: 1000,
      measurement: 'Pokemon'
    })
  );
};
