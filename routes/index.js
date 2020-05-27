var express = require('express');
var path = require('path');
var router = express.Router();
var cvModel = require('../models/cv.js');
var vavModel = require('../models/vav.js');
var projectModel = require('../models/project.js');
var pointsModel = require('../models/points.js');
var projectController = require('../controllers/project.js');
var ahu = require('../models/ahu.js');
var userController = require('../controllers/userController.js');
/* GET home page. */


router.get('/', function (req, res, next) {
  console.log('hmmmmm');
  res.type('html');
  res.sendFile(path.resolve('./public/getStarted.html'));
});

router.get('/cv', function (req, res, next) {
  res.type('html');
  res.send(path.resolve('./public/cv.html'));
});

router.get('/vav', function (req, res, next) {
  res.type('html');
  res.sendFile(path.resolve('./public/vav.html'));
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
  res.sendFile(path.resolve('./public/points.html'));
});

router.get('/pointsModel', function (req, res, next) {
  res.type('json');
  res.send({ points: pointsModel });
});

router.get('/sequence', function (req, res, next) {
  res.type('html');
  res.sendFile(path.resolve('./public/sequence.html'));
});

router.get('/options', function (req, res, next) {
  res.type('html');
  res.sendFile(path.resolve('./public/options.html'));

});

router.get('/newProject', function (req, res, next) {
  console.log('found');
  res.type('json');
  res.send({ project: projectModel });
});



router.get('/sequence/name/:ahu',function(req,res,next){
  res.type('html');
  res.sendFile(path.resolve('./public/sequence.html'));
});


router.post('/saveProject', projectController.save_project);


router.get('/getStarted', function(req,res,next){
  res.type('html');
  res.sendFile(path.resolve('./public/getStarted.html'));
});

router.get('/getProjects', projectController.get_projects);

router.get('/getAHU', function(req,res,next){
  res.json({ahu});
});

router.post('/newProject', projectController.create_project);

router.post('/getProjects',projectController.load_project);
router.post('/newUser',userController.create_user);
router.post('/login',userController.get_user);
router.post('/addAHU',projectController.add_ahu);
router.post('/getGroups',projectController.get_groups);
router.post('/getUnits',projectController.get_units);
router.get('/getUnits',projectController.get_all_units);
router.get('/getGroups',projectController.get_all_groups);
router.post('/addNewGroup',projectController.add_new_group);
router.get('/overview',projectController.get_overview);
router.post('/getUserProjects',projectController.get_projects_login);
router.get('/overview/project/:project/group/:group',projectController.get_group_overview);
router.get('/overview/project/:project/group/:group/unit/:unit',projectController.get_unit_overview);
router.get('/overview/project/:project',projectController.get_project_overview);
router.get('/points/project/:project/group/:group',projectController.get_group_points);
router.get('/points/project/:project/group/:group/unit/:unit',projectController.get_unit_points);
router.get('/points/project/:project',projectController.get_project_points);
router.get('/options/project/:project/group/:group',projectController.get_group_options);
router.get('/options/project/:project/group/:group/unit/:unit',projectController.get_unit_options);
router.get('/options/project/:project',projectController.get_project_options);
router.get('/sequence/project/:project/group/:group',projectController.get_group_sequence);
router.get('/sequence/project/:project/group/:group/unit/:unit',projectController.get_unit_sequence);
router.get('/sequence/project/:project',projectController.get_project_sequence);
router.post('/updateUnitOptions',projectController.updateUnitOptions);
router.post('/removeProject',projectController.remove_project);
router.post('/removeGroup', projectController.remove_group);
router.post('/removeUnit',projectController.remove_unit);
module.exports = router;
