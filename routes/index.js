var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Sign In', message: req.flash('loginMessage') });
});

router.get('/login', function(req, res) {
  // render the page and pass in any flash data if it exists
  res.render('index', { title: 'Sign In', message: req.flash('loginMessage') });
});

// process the login form
// router.post('/login', do all our passport stuff here);

router.get('/signup', function(req, res) {
  // render the page and pass in any flash data if it exists
  res.render('index', { title: 'Sign In', message: req.flash('signupMessage') });
});

// process the signup form
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/dashboard',
  failureRedirect: '/signup',
  failureFlash: true
}));

/* GET dashboard. */
router.get('/dashboard', function(req, res) {
  res.render('dashboard', { title: 'Dashboard' });
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
