import express from 'express';

const router = express.Router();

// login, signup, all the main things are here

/* GET index page. */
router.get('/', (req, res, next) => {
  // render the index.pug page
  res.render('index', {
    title: 'Express'
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
