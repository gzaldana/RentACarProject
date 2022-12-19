var express = require('express');
var router = express.Router();
const Vehiculo = require('../controllers/vehiculos')

// router.get("/", function (req, res) {   
//   Vehiculo.list({}, function (err, allDetails) {
//       if (err) {
//           console.log(err);
//       } else {
//           res.render("index", { details: allDetails })
//       }
//   })
//   })

// router.get('/', (req, res) => {
//   Vehiculos.find((err, product) => {
//     res.render('index', {
//       title: 'Shop',
//       products: product
//     });
//   });
// });


/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('index', { title: 'QuickGO Rent A Car'});
});

/* GET AUTH page. */
// router.get('/auth', function(req, res, next) {
//   res.render('auth', { title: 'QuickGO Rent A Car - Auth' });
// });

// router.get('/',Vehiculo.list)
// router.post('/',Vehiculo.create)
// router.put('/:id',Vehiculo.update)
// router.patch('/:id',Vehiculo.update)
// router.delete('/:id',Vehiculo.destroy)

module.exports = router;
