var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');
var dbModels=require('./models/db');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//database connection
mongoose.connect(process.env.DB_URL,()=>{console.log('connected to database')},{ useNewUrlParser:true });
const db=mongoose.connection
db.on('error',(error)=>console.error(error));
db.once('open',()=>console.log("connection successfull"));

//---
var bodyParser=require('body-parser');
app.use(bodyParser.json())


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//printing from database
const model=dbModels.testUsers;
async function runDb(){
  try{
  
  const allUser=await model.find()

  console.log(allUser)
  }catch(e){
    console.log(e.message)
  }
}
runDb()

module.exports = app;
