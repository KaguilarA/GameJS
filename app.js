
const http = require('http');
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require('morgan');

const port = 3000;
// Routes file
const indexRouter = require("./routes/index");
const usersRouter = require('./routes/users');

const app = express();

const server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', port);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Dependencies
app.use("/vendor/jquery.min.js", express.static(path.join(__dirname, "node_modules/jquery/dist/jquery.min.js")));
app.use("/vendor/howler.min.js", express.static(path.join(__dirname, "node_modules/howler/dist/howler.min.js")));
app.use("/vendor/pixi.min.js", express.static(path.join(__dirname, "node_modules/pixi.js/dist/pixi.min.js"))); app.use("/vendor/pixi.min.js", express.static(path.join(__dirname, "node_modules/pixi.js/dist/pixi.min.js")));
app.use("/vendor/pixi.min.js.map", express.static(path.join(__dirname, "node_modules/pixi.js/dist/pixi.min.js.map")));
app.use("/vendor/pixi.spine.js", express.static(path.join(__dirname, "node_modules/pixi-spine/bin/pixi-spine.js")));
app.use("/vendor/pixi-spine.js.map", express.static(path.join(__dirname, "node_modules/pixi-spine/bin/pixi-spine.js.map")));

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

server.listen(port);
