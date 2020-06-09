var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index.js');
var usersRouter = require('./routes/users.js');
var projectRouter = require('./routes/projects.js');



var app = express();
var db = require('./db.js')
var email = require('./controllers/email.js');

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

app.use('/newProject',indexRouter);

app.use('/sequence/name/:ahu',indexRouter);
app.use('/saveProject',indexRouter);
app.use('/getStarted',indexRouter);
app.use('/getAHU', indexRouter);
app.use('/addAHU',indexRouter);
app.use('/user',usersRouter);
app.use('/getGroups',indexRouter);
app.use('/getProjects', indexRouter);
app.use('/getUnits',indexRouter);
app.use('/newuser', indexRouter);
app.use('/login', indexRouter);
app.use('/addNewGroup',indexRouter);
app.use('/overview',indexRouter);
app.use('/overview/project/:project/group/:group',indexRouter);
app.use('/overview/project/:project/unit/:unit',indexRouter);
app.use('/overview/project/:project',indexRouter);
app.use('/options', indexRouter);
app.use('/options/project/:project/group/:group',indexRouter);
app.use('/options/project/:project/unit/:unit',indexRouter);
app.use('/options/project/:project',indexRouter);
app.use('/points/project/:project/group/:group',indexRouter);
app.use('/points/project/:project/unit/:unit',indexRouter);
app.use('/points/project/:project',indexRouter);
app.use('/sequence/project/:project/group/:group',indexRouter);
app.use('/sequence/project/:project/unit/:unit',indexRouter);
app.use('/sequence/project/:project',indexRouter);
app.use('/updateUnitOptions',indexRouter);
app.use('/getUserProjects',indexRouter);
app.use('/removeProject',indexRouter);
app.use('/removeGroup',indexRouter);
app.use('/removeUnit',indexRouter);
app.use('/resetPassword',indexRouter);
app.use('/sendSupport',indexRouter);
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
}


module.exports = app;
