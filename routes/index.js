var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


//TODO: create routes here


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Stat' });
});

router.get('/login', function(req, res, next) {
  knex('users').where({
    username: req.headers.name
  }).select('*').join('projects', 'users.user_id', 'projects.user_id').then(function(data) {
    var projectArr = [];
    for (var i = 0; i < data.length; i ++) {
      var project = {};
      project.player_id = data[i].player_id;
      project.global = data[i].global_stat_id;
      project.title = data[i].title;
      project.project_id = data[i].project_id;
      projectArr.push(project);
    }
    res.send({
      data: data[0],
      projects: projectArr
    });
  });
})

router.get('/projects', function(req, res, next) {
  knex('projects').where({
    project_id: req.headers.project_id
  }).select('*').join('players', 'projects.player_id', '=', 'players.player_id').select('projects.player_id', 'players.player_id').then(function(data) {
    res.send({
      players: data
    });
  });
});

router.get('/playerstats', function(req, res, next) {
  // console.log('headers: ' + req.headers);
  // console.log('req: ' + req);
  knex('players_stats').where({
    player_id: req.headers.player_id
  }).select('*').then(function(data) {
    // console.log(data);
    res.send({
      data: data
    });
  });
});

router.get('/stats', function(req, res, next) {
  console.log(req.headers.stat_id);
  knex('stats').where({
    stat_id: req.headers.stat_id
  }).select('*').then(function(data) {
    // console.log(data);
    res.send({
      data: data
    })
  });
});

router.get('/measurements', function(req, res, next) {
  knex('measurements').where({
    stat_id: req.headers.stat_id
  }).select('*').then(function(data) {
    console.log(data);
    res.send({
      data: data
    });
  });
});

module.exports = router;
