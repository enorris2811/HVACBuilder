var mongoose = require('mongoose').MongoClient;
var user = require('../models/user');

exports.create_user = function (req, res) {
    var tempUserName = req.body.tempUserName;
    var tempPassword = req.body.tempPassword;
    var tempEmail = req.body.tempEmail
    console.log(req.body);
    var tempUser = new user();
    tempUser.userName = tempUserName;
    tempUser.password = tempPassword;
    tempUser.email = tempEmail;
    console.log(tempUser);
    tempUser.save(function (err) {
        if (err) { console.log(err); } else { res.json({ 'saved': true }); }
    });

}

exports.get_user = function (req, res) {
    var tempUserName = req.body.tempUserName;
    var tempPassword = req.body.tempPassword;
    
    console.log(tempPassword + tempUserName);
    console.log(req.body);
    if ((tempUserName != "") || (tempUserName != undefined)) {
        user.find({'email': tempUserName }, function (err, result) {
            if (err) { console.log(err) } else {
                console.log('the results of the login query are:' + result[0]);

                if (tempPassword == result[0].password) {
                    console.log('true');
                    res.json({ 'result': result[0], 'auth': true });
                } else {

                    console.log('false');
                    res.json({ 'auth': false });

                }
            }
        });
    }
}