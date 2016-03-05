var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client: 'pg',
  connection: process.env.DB_HOST
});


//TODO: create routes here


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Stat' });
});

module.exports = router;
