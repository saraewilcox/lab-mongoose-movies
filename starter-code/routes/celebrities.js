const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

/* GET celebrities page */
router.get('/', (req, res, next) => {
    Celebrity.find()
    .then((allTheCelebritiesFromDB) => {
      console.log(allTheCelebritiesFromDB);
      res.render('celebrities/index', { celebrities: allTheCelebritiesFromDB});
  });
  
  });

/* GET new celebrities page */  
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

/* POST new celebrities page */
router.post('/', (req, res, next) => {
    console.log(req.body);
    Celebrity.create(req.body)
      .then((data) => {
        console.log(data);
        res.redirect("/celebrities");
      })
      .catch((err) => {
        console.log(err);
      });
  });

/* GET celebrities by ID page */
router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    Celebrity.findById(id)
      .then((theCelebrityFound) => {
        res.render("celebrities/show", { celebrity: theCelebrityFound });
      })
      .catch((err) => {
        console.log(err);
      });  
})  

/* POST deleted celebrities page */
router.post('/:id/delete', (req, res, next) => {
    // Iteration #5: Delete the drone
    // ... your code here
    let id = req.params.id;
    Celebrity.findByIdAndDelete(id)
      .then(() => {
        console.log("deleted a celebrity");
        res.redirect("/celebrities");
      })
      .catch((err) => {
        console.log(err);
      });
  });

/* GET celebrities to EDIT by ID page */
router.get('/:id/edit', (req, res, next) => {
    let id = req.params.id;
    Celebrity.findById(id)
      .then((theCelebrityFound) => {
        res.render("celebrities/edit", { celebrity: theCelebrityFound });
      })
      .catch((err) => {
        console.log(err);
      });
  });

/* POST celebrities by ID page */
router.post('/:id', (req, res, next) => {
    let id = req.params.id;
    let { name, occupation, catchPhrase } = req.body;
    Celebrity.findByIdAndUpdate(id,  {
      name,
      occupation,
      catchPhrase
    }).then((updatedCelebrity) => {
        console.log("edited your celebrity");
        res.redirect("/celebrities");
      })
      .catch((err) => {
        console.log(err);
      });
  });

module.exports = router;
