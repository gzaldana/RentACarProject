const express = require('express');
const router = express.Router();
const user = require("../controllers/auth");

// Get all users
// router.get('/', (req, res) => {
//   user.list(req, res);
// });

/* GET AUTH page. */
// router.get('/auth', function(req, res, next) {
//   res.render('auth', { title: 'QuickGO Rent A Car - Auth' });
// });

// router.get('/', function(req, res, next) {
//   res.render('auth', { title: 'QuickGO Rent A Car - Auth' });
// });



router.get('/', (req, res) => {
    user.create(req, res);
  });

router.post('/', (req, res) => {
    user.save(req, res);
  });

// Create user
// router.get('/', (req, res) => {
//   user.create(req, res);
// });

// Save user
// router.post('/save', (req, res) => {
//   user.save(req, res);
// });

module.exports = router;


