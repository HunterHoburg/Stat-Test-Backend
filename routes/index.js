var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

//TODO: create routes here


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Stat' });
});

// TODO: signup route

router.post('/signup', function(req, res, next) {
console.log(req.body);
  knex('users').where({
    username: req.body.username
  }).first().then(function(user) {
    if (!user) {
      console.log('inserting');
      var hashPass = bcrypt.hashSync(req.body.password, 8);
      knex('users').insert({
        email: req.body.email,
        password: hashPass,
        color_1: req.body.color_1,
        color_2: req.body.color_2,
        username: req.body.username
      }, 'user_id').then(function(user_id) {
        res.cookie('userID', user_id[0], {signed: true});
        res.send(user_id);
      });
    }
  });
});

router.get('/login', function(req, res, next) {
  console.log(req.headers);
  knex('users').where({
    username: req.headers.name
    //TODO: authentication stuff
  }).select().then(function(data) {
    if(data) {
      console.log(data);
      if (bcrypt.compareSync(req.headers.pass, data[0].password)) {
        res.send(data);
      } else {
        res.send('invalid');
      }
    } else {
      res.send('invalid');
    }
    // res.send(data);
  });
  user = {};
});

router.get('/userdata', function(req, res, next) {
  knex('projects').where({
    user_id: req.headers.user_id
  }).select('*').then(function(projectData) {
    res.send(projectData);
  });
});

router.get('/projects', function(req, res, next) {
  // console.log(req.headers);
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
  }).select('*').join('stats', 'players_stats.stat_id', '=', 'stats.stat_id').select('stats.stat_id').then(function(data) {
    // console.log(data);
    res.send({
      data: data
    });
  });
});

router.get('/stats', function(req, res, next) {
  // console.log(req.headers.stat_id);
  knex('stats').where({
    stat_id: req.headers.stat_id
  }).select('*').then(function(data) {
    // console.log(data);
    res.send({
      data: data
    })
  });
});

router.put('/add', function(req, res, next) {
  // console.log(req.body);
  var item = req.body;
  // console.log(item);
  if (item.type === 'stat') {
    knex('stats').insert([{measurement: item.name, position: item.position, color: item.color, numerator: item.numerator, denominator: item.denominator}]).returning('stat_id').then(function(data) {
      var stat_id = data;
      console.log('stat_id is:');
      console.log(stat_id);
      knex('players_stats').insert([{player_id: item.player_id, stat_id: data[0]}]).then(function() {
        console.log('stat added. stat_id: ' + data[0] + ' player_id: ' + item.player_id);
        res.send(stat_id);
      });
    });
  } else if (item.type === 'player') {
    knex('players').insert([{player_name: item.player_name, color: item.color, user_id: item.user_id}]).returning('player_id').then(function(data){
      console.log(data);
      knex('projects').insert([{user_id: item.user_id, player_id: data[0], title: item.title, project_id: item.project_id}]).returning('player_id').then(function(data2) {
        console.log('player created:');
        console.log(data2);
        console.log('player added. player_id: ' + data[0] + 'project_id: ' + item.project_id);
        res.send(data2);
      });
    });
  } else if (item.type === 'project') {
    knex('players').max('player_id').then(function(data) {
      // console.log(data[0].max);
      var playerId = (data[0].max + 1);
      // console.log(playerId);
      knex('projects').max('project_id').then(function(data) {
        // console.log(data[0].max);
        var projectId = (data[0].max + 1);
        // console.log(id);
        knex('projects').insert([{title: item.title, user_id: item.user_id, project_id: projectId, player_id: playerId}]).then(function() {
          knex('players').insert([{player_name: item.player_name, user_id: item.user_id, color: item.color}]).then(function() {
            res.send({
              project_id: projectId,
              player_id: playerId
            });
          });
        });
      });
    });

  }
});

router.put('/save', function(req, res, next) {
  var players = req.body.players;
  function playerStatSetter(stat) {
    knex('stats').where({stat_id: stat.stat_id}).update({measurement: stat.measurement, position: stat.position, color: stat.color, parent_id: stat.parent_id, project_id: stat.project_id, numerator: stat.numerator, denominator: stat.denominator}).returning('numerator').then(function(data) {
      console.log(data);
    });
  }
  for (var k = 0; k < players.length; k++) {
    var player = players[k];
    for (var i = 0; i < player.stats.length; i++) {
      var stat = player.stats[i];
      playerStatSetter(stat);
    }
  }
});


module.exports = router;
