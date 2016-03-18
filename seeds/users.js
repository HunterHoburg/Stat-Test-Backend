
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      user_id: 1,
      email: 'someguy@gmail.com',
      password: '1234',
      username: 'Game Dad',
      color_1: '#4b74f1',
      color_2: '#86b4c7'
    }),
    knex('users').insert({
      user_id: 2,
      email: 'somegirl@gmail.com',
      password: '1234',
      username: 'Game Mom',
      color_1: '#4b74f1',
      color_2: '#86c79c'
    }),
    knex('users').insert({
      user_id: 3,
      email: 'somedog@gmail.com',
      password: '1234',
      username: 'Game Dog',
      color_1: '#7b419c',
      color_2: '#2e53dd'
    })
  );
};
