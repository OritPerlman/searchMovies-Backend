var createError = require ('http-errors');
var express= require ('express');
const jwt= require('jsonwebtoken');
var router = express.Router();
var path= require ('path');
var cookieParser = require ('cookie-parser');
var logger = require ('morgan');
const session = require ("express-session");

var loginRouter = require ('../midProjectNode.js/routes/login');
var menuRouter = require ('./routes/menu');
var createMovieRouter = require ('./routes/newMovie');
var searchRouter =require ('./routes/search');
var searchResultRouter = require ('./routes/searchResult');
var movieDataRouter = require ('./routes/movieData');
var usersManageRouter = require ('./routes/usersManage');
var userDataRouter = require ('./routes/userData');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:"somesecretkey",
  resave: false, 
  saveUninitialized: false,
  cookie: {maxAge: 1800000 }
}));

  
//login page
app.use('/', loginRouter);
//menu page
app.use('/', menuRouter);
//new movie page
app.use('/',createMovieRouter);
//search movies page
app.use('/', searchRouter);
//search result page
app.use('/', searchResultRouter);
//movie data page
app.use('/', movieDataRouter);
//users management page
app.use('/', usersManageRouter);
//user data page
app.use('/', userDataRouter);

//error 404
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

module.exports = app;