var express = require('express');
var path = require('path');
var router = express.Router();
var cvModel = require('../models/cv.js');
var vavModel = require('../models/vav.js');
var projectModel = require('../models/project.js');
var pointsModel = require('../models/points.js');
var projectController = require('../controllers/project.js');

router.get('/getProjects',  function(req,res,next){
    console.log('hmmmm dude!!');
});

module.exports = router;
