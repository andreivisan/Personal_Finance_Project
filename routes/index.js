var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Sign In', loginMessage: req.flash('loginMessage'), signupMessage: req.flash('signupMessage') });
});

router.get('/login', function(req, res) {
  // render the page and pass in any flash data if it exists
  res.render('index', { title: 'Sign In' });
});

// process the login form
router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/dashboard',
  failureRedirect: '/',
  failureFlash: true
}));

router.get('/signup', function(req, res) {
  // render the page and pass in any flash data if it exists
  res.render('index', { title: 'Sign In' });
});

// process the signup form
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/dashboard',
  failureRedirect: '/',
  failureFlash: true
}));

/* GET dashboard. */
router.get('/dashboard', isLoggedIn, function(req, res) {
  res.render('dashboard', { title: 'Dashboard' });
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) {
    return next();
  }

  // if they aren't redirect them to the home page
  res.redirect('/');
}

module.exports = router;
