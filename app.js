var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var helmet = require('helmet');
var bodyParser = require('body-parser');
var $ = require('jquery');


var indexRouter = require('./routes/index');

var app = express();
const aj = 'https://ajax.googleapis.com'
const fb = 'https://connect.facebook.net'
app.use(helmet({
  contentSecurityPolicy: { // <1>
    directives: { // <2>
      "default-src": ["'self'"],
      "base-uri": ["'self'"],
      "block-all-mixed-content": [],
      "font-src": ["'self'", "https:", "data:"],
      "form-action": ["'self'"],
      "frame-ancestors": ["'self'"],
      "img-src": ["'self'", "data:", aj, fb], // <3>
      "object-src": ["'none'"],
      "script-src": ["'self'", aj, fb], // <4>
      "script-src-attr": ["'none'"],
      "style-src": ["'self'", "https:", "'unsafe-inline'"],
      "upgrade-insecure-requests": [],
      "connect-src": ["'self'", aj, fb], // <5>
    },
  },
}));


app.listen(32768);

//モデルの読み込み

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);


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
  //res.status(err.status || 500);
  //res.render('error');
});




module.exports = app;
