import express from 'express';
const router = express.Router();
const userController = require('../controllers/user_controller');
const indexController = require('../controllers/index_controller');

// login, signup, all the main things are here

router.get('/', indexController.getList);

router.post('/', userController.getSignup);

// router.get('/login', (req, res, next) => {
//   // return data (json)
//   res.json('Login');
// });

// router.get('/signup', (req, res, next) => {
//   // return signup page
//   res.json('Signup');
// });

router.get('/login', userController.getLogin);

router.get('/signup', userController.getSignup);


export default router;
