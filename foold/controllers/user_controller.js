import passport from 'passport';
const User = require('../models/users');
const LocalStrategy = require('passport-local').Strategy;

// SerializeUser
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// DeserializeUser
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Local strategy
passport.use(new LocalStrategy(
  (username, password, done) => {
    User.getUserByUsername(username, (err, user) => {
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: 'Unknown User' });
      }
      User.comparePassword(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Invalid password' });
        }
      });
    });
  }));


// GET Login page
exports.getLogin = (req, res) => {
  // If user is already logged in, send to index
  if (req.user) {
    res.redirect('/');
  }
  // If user not logged in, send to login page
  res.render('login', {
    title: 'Login'
  });
};

// POST Local Login
exports.postLogin = (req, res, next) => {
  // req.assert checks the forms
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password cannot be blank').notEmpty();
  // Check if email is valid
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/login');
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) {
      req.flash('errors', info);
      return res.redirect('/login');
    }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      req.flash('success', { msg: 'Success!' });
      // Return user to session, if do not know, return to index
      res.redirect(req.session.returnTo || '/');
    });
  })(req, res, next);
};

// GET logout
exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};

// GET signup
exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect('/');
  }
  res.render('account/signup', {
    title: 'Create Account'
  });
};

// POST signup
exports.postSignup = (req, res, next) => {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password must be at least 8 characters long').len(8);
  req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/signup');
  }

  const user = new User({
    email: req.body.email,
    password: req.body.password
  });

  User.findOne({ email: req.body.email }, (err, existingUser) => {
    if (err) { return next(err); }
    if (existingUser) {
      req.flash('errors', { msg: 'Account with that email address already exists.' });
      return res.redirect('/signup');
    }
    user.save((err) => {
      if (err) { return next(err); }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        res.redirect('/');
      });
    });
  });
};
