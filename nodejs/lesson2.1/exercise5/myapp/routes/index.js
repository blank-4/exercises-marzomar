var express = require('express');
var router = express.Router();
const fs = require('fs');
var path = require('path');
var http = require('http')
var fl      = require('node-filelist');
var filess   = [ __dirname + "/../public/images" ];
var option  = { "ext" : "jpeg|jpg|png|gif" };
 
/* fl.read(filess, option , function (results){
    for(var i=0; i<results.length; i++){
      console.log(results[i].path);
      var fil = results[i].path
    }}); */
/* GET home page. */

router.get('/', function(req, res, next) {
  fl.read(filess, option , function (results){
    for(var i=0; i<results.length; i++){
      results[i].path = "/images/" + path.basename(results[i].path);
    /*  var fil = results[i].path */
    }

    res.render('index', { title: 'Images', files: results });
  });
});
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Images', files: results });
// });
// J'implémente les méthodes GET, PUT, UPDATE et DELETE
// GET
/* router.get(function(req,res){

    let files = fs.readdirSync(__dirname + "/../public/images");

    console.log(path.dirname(files[0]))
    for(let file in files) {

      console.log(FileList);
      file = 'ok' + file;
    }

    res.render({
      message : "Liste les fichiers",
      files : files,
    });    
  }) */

module.exports = router;
