var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.user);
  console.log(req.query.password);
  res.render('index');
});

router.get('/form', (req, res, next) => {
  res.json({ user: req.query.user })
})

router.post('/form', function(req, res, next) {
  console.log(req.body.user);
  console.log(req.body.password);
  res.json({ userpost: req.body.user, passpost: req.body.password });
});

module.exports = router;
