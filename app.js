var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.(__djoinirname, 'public')));

app.use('/', routes);
app.use('/users', users);

/****测试代码 ****************  开始 ******************/
//var main = require('./test/main');
//app.use('/testJs',main);

//var events = require('./test/events');
//app.use('/events',events);

//var events2 = require('./test/events2');
//app.use(events2);

//var events3 = require('./test/events3');
//app.use(events3);

//var events4 = require('./test/events4');
//app.use(events4);

//var  httpPathURL= require('./test/httpPathURL');
//httpPathURL.httpPathURL();

var utilInherits  = require('./test/util.inherits');


/****测试代码 ***************** 结束 *****************/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
