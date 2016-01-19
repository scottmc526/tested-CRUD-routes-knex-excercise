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

// router.get('/', function (req, res, next) {
//   res.render('movies/index');
// })
//
// router.get('/:movie_id/reviews', function(req, res, next){
//   res.render('movies/show')
// })
//
// router.get('/:movie_id/reviews/new', function(req, res, next){
//   res.render('movies/new')
// })
//
// router.post('/:movie_id/reviews/', function(req, res, next){
//     res.render('movies/show')
//   })
// router.get('/:movie_id/reviews/:id', function(req, res, next){
//   res.render('movies/reviews/show')
// })
//
// router.get('/:movie_id/reviews/:id/edit', function(req, res, next){
//   res.render('movies/reviews/edit')
// })
//
// router.post('/:movie_id/reviews/:id', function(req, res, next){
//   res.render('movies/index')
// })
//
// router.post('/:movie_id/reviews/:id/delete', function(req, res, next) {
//   res.render('movies/index')
// })


router.get('/', function (req, res, next) {
  res.render('movies/index');
})

router.get('/:movie_id/reviews', function(req, res, next){
  res.render('movies/show')
})

router.get('/:movie_id/reviews/new', function(req, res, next){
  res.render('movies/new')
})

router.post('/:movie_id/reviews/', function(req, res, next){
    res.render('movies/show')
  })
router.get('/:movie_id/reviews/:id', function(req, res, next){
  res.render('movies/reviews/show')
})

router.get('/:movie_id/reviews/:id/edit', function(req, res, next){
  res.render('movies/reviews/edit')
})

router.post('/:movie_id/reviews/:id', function(req, res, next){
  res.render('movies/index')
})

router.post('/:movie_id/reviews/:id/delete', function(req, res, next) {
  res.render('movies/index')
})



module.exports = router;
