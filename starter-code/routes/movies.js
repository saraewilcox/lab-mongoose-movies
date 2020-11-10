const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

/* GET movies page */
router.get('/', (req, res, next) => {
    Movie.find()
    .then((allTheMoviesFromDB) => {
      console.log(allTheMoviesFromDB);
      res.render('movies/index', { movies: allTheMoviesFromDB});
    });
  });

  /* GET new movies page */  
router.get('/new', (req, res, next) => {
    res.render('movies/new');
  });
  
  /* POST new movies page */
  router.post('/', (req, res, next) => {
      console.log(req.body);
      Movie.create(req.body)
        .then((data) => {
          console.log(data);
          res.redirect("/movies");
        })
        .catch((err) => {
            // res.render('movies/new');
            console.log(err);
          });
    });
  
  /* GET movies by ID page */
  router.get('/:id', (req, res, next) => {
      let id = req.params.id;
      Movie.findById(id)
        .then((theMovieFound) => {
          res.render("movies/show", { movie: theMovieFound });
        })
        .catch((err) => {
          console.log(err);
        });  
  })  
  
  /* POST deleted movies page */
  router.post('/:id/delete', (req, res, next) => {
      let id = req.params.id;
      Movie.findByIdAndDelete(id)
        .then(() => {
          console.log("deleted a movie");
          res.redirect("/movies");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  
  /* GET movies to EDIT by ID page */
  router.get('/:id/edit', (req, res, next) => {
      let id = req.params.id;
      Movie.findById(id)
        .then((theMovieFound) => {
          res.render("movies/edit", { movie: theMovieFound });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  
  /* POST movies by ID page */
  router.post('/:id', (req, res, next) => {
      let id = req.params.id;
      let { title, genre, plot } = req.body;
      Movie.findByIdAndUpdate(id,  {
        title,
        genre,
        plot
      }).then((updatedMovie) => {
          console.log("edited your movie");
          res.redirect("/movies");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  
  module.exports = router;
  