var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var name = 'CookieDate';
  var value = returnDate();
  var options = {
    expires: new Date(Date.now() + 900000),
    httpOnly: true
  };
  res.cookie(name, value, options);
  var cookieTheme = req.cookies['CookieDate'];
  console.log(cookieTheme);
  if (cookieTheme) {
    res.send(cookieTheme)
  } else {
      res.send("jamais")
  }
  /* res.render('index', { title: cookieTheme}); */
});

function returnDate() {
  var d = new Date();
  return d.getDate() + "/" + d.getMonth()+1 + "/" + d.getFullYear()
}

module.exports = router;
