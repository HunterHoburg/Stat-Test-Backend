module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://Hunter@localhost/stattest',
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DB_HOST,
    useNullAsDefault: true
  }
};
