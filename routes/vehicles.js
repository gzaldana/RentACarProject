var express = require('express');
var router = express.Router();
const db = require('../connections/mysql')
const vehiculo = require("../controllers/vehicles");


  router.get('/', (req, res) => {
    vehiculo.list(req, res);
  });

  router.get('/create', (req, res) => {
    vehiculo.create(req, res);
  });
 
  router.post('/create', (req, res) => {
    vehiculo.save(req, res);
  });

module.exports = router;
