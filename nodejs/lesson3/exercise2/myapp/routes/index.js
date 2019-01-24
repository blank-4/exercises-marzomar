var express = require('express');
var router = express.Router();
var tab = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/form', function(req, res, next) {
  console.log(req.body.nom);
  console.log(req.body.prenom);
  console.log(req.body.age);
  console.log(req.body.mail);
  if( req.body.mail == undefined ||  req.body.mail == '' ||  req.body.mail == null) {
    tab.push('Email is empty') 
  }
  if (req.body.nom == "" && req.body.nom.length > 30) {
    tab.push("name empty")
  }
  if (req.body.prenom == "" && req.body.prenom.length > 30) {
    tab.push("prenom null")
  }
  if (req.body.age < 0 || req.body.age > 99) {
    tab.push("t chelou")
  }
    res.send(500, {tab :tab})
  res.json({ nom: req.body.nom, prenom: req.body.prenom, age: req.body.age, mail: req.body.mail  });
});

module.exports = router;
