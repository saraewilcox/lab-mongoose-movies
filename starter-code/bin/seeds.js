// bin/seeds.js
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.js');
const Movie = require('../models/Movie.js');
const DB_NAME = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const celebrities = [
    { 
        name: 'Lady Gaga', 
        occupation: 'singer', 
        catchPhrase: 'Promises, Promises' 
    },
    { 
        name: 'Jim Carrey', 
        occupation: 'actor', 
        catchPhrase: 'Allllllllrighty then' 
    },
    { 
        name: 'Michael Scott', 
        occupation: 'regional manager', 
        catchPhrase: 'Thats what she said!' 
    }
  ];
Celebrity.create(celebrities)
  .then(celebritiesFromDB => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));

  const movies = [
    {
      title: "An American Tale",
      genre: "kids",
      plot: "A mouse family moves to America to escape persecution for being Jews" 
    },
    {
      title: "The Aviator",
      genre: "drama",
      plot: "Crazy genius dates Katherine Hepburn, but his rapidly evolving Obsessive Compulsive Disorder gets in their way of everlasting love"
    },
    {
      title: "Beauty and the Beast",
      genre: "musical",
      plot: "Ugliness - who cares?"
    },
  ];
  
  // Movie.create(movies)
  // .then(moviesFromDB => {
  //   Celebrity.create(celebrities)
  //     .then(celebritiesFromDB => {
  //       console.log(`Created ${celebritiesFromDB.length} celebrities`);
  //       })
  //         .then(
  //           console.log(`Created ${moviesFromDB.length} movies`);
  //             }).catch((err) => {
  //             console.error('Error occurred on movies ', err);
  //               }).finally(() => {
  //               mongoose.connection.close()
  //               });
  //             }
// Movie.create(movies)
// .then(moviesFromDB => {
// console.log(`Created ${moviesFromDB.length} drones`);
// // Once created, close the DB connection
// mongoose.connection.close();
// })
// .catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));
   