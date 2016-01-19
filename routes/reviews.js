var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
/* Movies Routes Go Here. */

function Movie(){
  return knex('movies');
}

function Review(){
  return knex('reviews')
}

router.get('/new', function(req, res, next){
  res.render('movies/new')
})

router.post('/', function(req, res, next){
  res.render('movies/index')
})

router.get('/:id', function(req, res, next){
  res.render('movies/show')
})

router.get('/:id/edit', function(req, res, next){
  res.render('movies/edit')
})

router.post('/:id', function(req, res, next){
  res.render('movies/index')
})

router.post('/:id/delete', function(req, res, next){
  res.render('movies/index')
})


module.exports = router;
