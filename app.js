var createError = require('http-errors');
var express = require('express');
var path = require('path');
const sessions = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(sessions({
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized:true,
  resave: false 
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next)=>{
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  next()
})

app.use('/', indexRouter);
app.use('/users', usersRouter);



app.use(function(req, res) {
  next(createError(404));
});




app.listen(3000,()=>{
  console.log("server started");
})