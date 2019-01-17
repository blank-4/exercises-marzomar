var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.get('user-agent'));
  res.render('index', { title: 'Express', data: req });
});

module.exports = router;
