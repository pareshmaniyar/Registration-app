var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', (req, res, next) => { //doubt
  res.render('login');
});
// get google auth
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));
// google redirect
router.get('/google-redirect', passport.authenticate('google'), (req, res) => {
  res.render('home', {req: req});
});

module.exports = router;