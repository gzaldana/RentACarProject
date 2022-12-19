const express = require('express');
const router = express.Router();
// const user = require("../controllers/auth");

// Get all users
// router.get('/', (req, res) => {
//   user.list(req, res);
// });


router.get('/', function(req, res, next) {
  res.render('cart', { title: 'QuickGO Rent A Car' });
});



module.exports = router;


