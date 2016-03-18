module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://Hunter@localhost/stattest'
  },

  production: {
    client: 'pg',
    connection: process.env.DB_HOST
  }
};
