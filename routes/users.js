var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/newUser',userController.create_user);

router.post('/login',userController.get_user);

module.exports = router;
