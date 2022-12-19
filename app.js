var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dbConnect = require('./connections/mongodb')
const Vehiculo = require('./controllers/vehiculos')
// TODO: RUTAS
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var vehiculosRouter = require('./routes/vehiculos');
var loginRouter = require('./routes/login');
var authRouter = require('./routes/auth');
var vehiclesRouter = require('./routes/vehicles');
var cartRouter = require('./routes/cart');
require("dotenv").config();
// const Vehiculos = require('./models/mongodb/vehiculos')

// const crear = async () => {
//   const vehiculo = new Vehiculos({name:'prueba', placa:'1111', marca:'prueba', ocupantes:7, km:10, modelo:2012, precio:100, status:'Dis'})
//   const VehiculoSave = await vehiculo.save()
//   console.log(VehiculoSave);
//   console.log('CREANDO USER');
// }

// const buscarTodo = async () =>{
//   const vehiculos = await Vehiculos.find()
//   console.log(vehiculos);
// }

// crear()
// buscarTodo()  

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/vehiculos', vehiculosRouter);
app.use('/login', loginRouter);
app.use('/auth', authRouter);
app.use('/vehicles', vehiclesRouter);
app.use('/cart', cartRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
//conection Mongo
// 
dbConnect();
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
