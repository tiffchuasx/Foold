import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
// For validating user account
import expressValidator from 'express-validator';
import passport from 'passport';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt-node';
import crypto from 'crypto';
import session from 'express-session';
// import favicon from 'serve-favicon';
import path from 'path';
import lessMiddleware from 'less-middleware';
import flash from 'express-flash';
import index from './routes/index';

// specify .env file
dotenv.load({ path: '.env' });

// Storing user sessions
const MongoStore = require('connect-mongo')(session);
const app = express();
//const debug = Debug('foold:app');
const restaurant = require('./routes/restaurants');


mongoose.connect(process.env.MONGODB_URI);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Store session
app.use(expressValidator());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'WDI Singapore',
  store: new MongoStore({
    url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
    autoReconnect: true,
    clear_interval: 3600
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// Creating a new route for the application
app.use('/', index);
app.use('/restaurants', restaurant);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  console.log(err);
  //debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
