var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index.js');
var usersRouter = require('./routes/users.js');


var app = express();

var appEJS = express();

appEJS.set('view engine','ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'C:/Users/Eric Norris/ahu/HVACBuilder/public')));

appEJS.use(logger('dev'));
appEJS.use(express.json());
appEJS.use(express.urlencoded({extended: false}));
appEJS.use(cookieParser());
appEJS.use(express.static(path.join(__dirname,'views')));

app.use('/', indexRouter);
app.use('/cv', indexRouter);
app.use('/vav', indexRouter);
app.use('/users', usersRouter);
app.use('/vavModel', indexRouter);
app.use('/cvModel', indexRouter);
app.use('/points',indexRouter);
app.use('/pointsModel',indexRouter);
app.use('/sequence',indexRouter);
app.use('/options', indexRouter);
app.use('/options/vav',indexRouter);
app.use('/options/cv',indexRouter);
app.use('/newProject',indexRouter);
app.use('/options/name/:ahu',indexRouter);
app.use('/points/name/:option', indexRouter);
app.use('/sequence/name/:ahu',indexRouter);

appEJS.use('/ejs', indexRouter);

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
}


module.exports = app;
