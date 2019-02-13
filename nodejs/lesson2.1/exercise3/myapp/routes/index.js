var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Acceuil' });
});

router.get('/blank', function(req, res, next) {
  res.render('blank', { title: 'Blank' });
});


module.exports = router;
