var express = require('express');
var router = express.Router();
var cvModel = require('../models/cv.js');
var vavModel = require('../models/vav.js');
var projectModel = require('../models/project.js');
var pointsModel = require('../models/points.js');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/cv', function (req, res, next) {
  res.type('html');
  res.sendFile('https://hvacbuiler.azurewebsites.net/public/cv.html');
});

router.get('/vav', function (req, res, next) {
  res.type('html');
  res.sendFile('https://hvacbuiler.azurewebsites.net/public/vav.html');
});

router.get('/vavModel', function (req, res, next) {
  res.type('json');
  res.send({ ahu: vavModel });
});

router.get('/cvModel', function (req, res, next) {
  res.type('json');
  res.send({ ahu: cvModel });
});

router.get('/points', function (req, res, next) {
  res.type('html');
  res.sendFile('https://hvacbuiler.azurewebsites.net/public/points.html');
});

router.get('/pointsModel', function (req, res, next) {
  res.type('json');
  res.send({ points: pointsModel });
});

router.get('/sequence', function (req, res, next) {
  res.type('html');
  res.sendFile('https://hvacbuiler.azurewebsites.net/public/sequence.html');
});

router.get('/options', function (req, res, next) {
  res.type('html');
  res.sendFile('https://hvacbuiler.azurewebsites.net/public/options.html');

});
router.get('/options/cv', function (req, res, next) {
  res.type('html');
  res.sendFile('https://hvacbuiler.azurewebsites.net/public/cv.html');

});
router.get('/options/vav', function (req, res, next) {
  res.type('html');
  res.sendFile('https://hvacbuiler.azurewebsites.net/public/vav.html');

});
router.get('/newProject', function (req, res, next) {
  console.log('found');
  res.type('json');
  res.send({ project: projectModel });
});

router.get('/points/:option',function(req,res,next){
  var x = req.params.option;
  console.log(x);
  //res.send({ahu:x});
  res.sendFile('https://hvacbuiler.azurewebsites.net/public/points.html');
})
module.exports = router;
