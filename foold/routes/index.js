import express from 'express';

const Restaurant = require('../models/restaurants');
const router = express.Router();

// login, signup, all the main things are here

/* GET index page. */
router.get('/', (req, res, next) => {
  // render the index.pug page
  Restaurant.find((err, restaurants) => {
    if (err) return res.json({ message: `Could not find restaurant b/c: ${err}` });
    res.render('index', {
      list: restaurants,
      title: 'Foold'
    });
  });
});

router.get('/login', (req, res, next) => {
  // return data (json)
  res.json('Login');
});

router.get('/signup', (req, res, next) => {
  // return signup page
  res.json('Signup');
});

export default router;
