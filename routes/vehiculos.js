var express = require('express');
var router = express.Router();
const db = require('../connections/mysql')
const vehiculo = require("../controllers/vehiculos");

/* GET VEHIVULOS  page. */
router.get('/', function(req, res, next) {
    db.query("SELECT * FROM vehiculos", function(err,results){
    console.log(results);
    res.render('vehiculos', { title: 'QuickGO Rent A Car - Auth',vehiculos:results });
    })
   
  });

  // router.get('/', (req, res) => {
  //   vehiculo.list(req, res);
  // });

  // router.post('/create', (req, res) => {
  //   vehiculo.save(req, res);
  // });

module.exports = router;
