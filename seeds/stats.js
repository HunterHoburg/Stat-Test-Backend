
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('stats').del(),

    // Inserts seed entries
    knex('stats').insert({
      // stat_id: 1,
      measurement: 'K/D',
      position: 1,
      color: '#b2b351',
      numerator: 5,
      denominator: 4
    }),
    knex('stats').insert({
      // stat_id: 2,
      measurement: 'Assists',
      position: 2,
      color: '#517bb3',
      numerator: 10,
      denominator: 1
    }),
    knex('stats').insert({
      // stat_id: 3,
      measurement: 'Wins',
      position: 3,
      color: '#8551b3',
      numerator: 5,
      denominator: 1
    }),
    knex('stats').insert({
      // stat_id: 4,
      measurement: 'K/D',
      position: 1,
      color: '#b2b351',
      numerator: 3,
      denominator: 2
    }),
    knex('stats').insert({
      // stat_id: 5,
      measurement: 'Assists',
      position: 2,
      color: '#517bb3',
      numerator: 12,
      denominator: 1
    }),
    knex('stats').insert({
      // stat_id: 6,
      measurement: 'Wins',
      position: 3,
      color: '#8551b3',
      numerator: 5,
      denominator: 1
    }),
    knex('stats').insert({
      // stat_id: 7,
      measurement: 'K/D',
      position: 1,
      color: '#b2b351',
      numerator: 5,
      denominator: 5
    }),
    knex('stats').insert({
      // stat_id: 8,
      measurement: 'Assists',
      position: 2,
      color: '#517bb3',
      numerator: 15,
      denominator: 1
    }),
    knex('stats').insert({
      // stat_id: 9,
      measurement: 'Wins',
      position: 3,
      color: '#8551b3',
      numerator: 5,
      denominator: 1
    })
  );
};
