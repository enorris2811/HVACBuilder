


var nodemailer = require('nodemailer');
const cryptoRandomString = require('crypto-random-string');
var mongoose = require('mongoose').MongoClient;
var user = require('../models/user');



var transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secureConnection: false,
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: 'support@ccgohio.com',
        pass: process.env.SUPPORT_EMAIL_PASSWORD
    }

});


// verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});


exports.resetPassword = function (req, res) {
    var transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secureConnection: false,
        tls: {
            ciphers: 'SSLv3'
        },
        auth: {
            user: 'support@ccgohio.com',
            pass: process.env.SUPPORT_EMAIL_PASSWORD
        }
    
    });
    var newPassword = cryptoRandomString({length:10});

    var mailOptions = {
        from: 'support@ccgohio.com',
        to: req.body.email,
        subject: req.body.subject,
        html: '<p> Your New Password is:'+ newPassword  + '<p>'
    }

    console.log('found!!! ' + req.body.email);
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
    transporter.close();
}

exports.sendSupport = function (req, res) {
    var transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secureConnection: false,
        tls: {
            ciphers: 'SSLv3'
        },
        auth: {
            user: 'support@ccgohio.com',
            pass: process.env.SUPPORT_EMAIL_PASSWORD
        }
    
    });
    console.log(req.body);
    var mailOptions = {
        from: 'support@ccgohio.com, ' + req.body.email,
        to: 'support@ccgohio.com',
        subject: req.body.subject,
        html: '<p>' + req.body.message + '<p>'
    }
    console.log(mailOptions);
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
            res.json({
                "Auth": "Success"
            });
        }
    });
    transporter.close();
}
