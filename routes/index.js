var express = require('express');
var router = express.Router();
var cvModel = require('../models/cv');
var vavModel = require('../models/vav');
var pointsModel = require('../models/points');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/cv', function(req,res,next){
  res.type('html');
  res.sendFile('C:/Users/Eric Norris/ahu/HVACBuilder/public/cv.html');
});

router.get('/vav', function(req,res,next){
  res.type('html');
  res.sendFile('C:/Users/Eric Norris/ahu/HVACBuilder/public/vav.html');
});

router.get('/vavModel', function(req, res, next){
  res.type('json');
  res.send({ahu: vavModel});
});

router.get('/cvModel', function(req, res, next){
  res.type('json');
  res.send({ahu: cvModel});
});

router.get('/points', function(req,res,next){
  res.type('html');
  res.sendFile('C:/Users/Eric Norris/ahu/HVACBuilder/public/points.html');
});

router.get('/pointsModel', function(req,res,next){
  res.type('json');
  res.send({points:pointsModel});
});

router.get('/sequence', function(req,res,next){
  res.type('html');
  res.sendFile('C:/Users/Eric Norris/ahu/HVACBuilder/public/sequence.html');
})
module.exports = router;
