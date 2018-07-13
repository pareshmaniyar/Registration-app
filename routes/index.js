var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
// get google auth
router.get('/google', passport.authenticate('google', { 
  scope: ['profile']
}));

module.exports = router;
