var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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

app.use('/points/:option', indexRouter);
module.exports = app;
