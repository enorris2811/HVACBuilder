var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secureConnection: false,
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: 'support@ccgohio.com',
        pass: 'Zol30755'
    }

});

const mailOptions = {
    from: 'support@ccgohio.com', // sender address
    to: 'g0nefishin34@gmail.com', // list of receivers
    subject: 'test', // Subject line
    html: '<p>this is a test</p>' // plain text body
};
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
            pass: 'Zol30755'
        }
    
    });
    console.log('found!!! ' + req.email);
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
            pass: 'Zol30755'
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