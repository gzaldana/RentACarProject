const express = require('express');
const router = express.Router();
const user = require("../controllers/auth");

router.get('/',function(req, res, next) {
  res.render('login', { title: 'QuickGO Rent A Car'});
});
// // Get all users
// router.get('/', (req, res) => {
//   user.list(req, res);
// });

// // Get single user by id
// router.get('/show/:id', (req, res) => {
//   user.show(req, res);
// });

// // Create user
// router.get('/create', (req, res) => {
//   user.create(req, res);
// });

// // Save user
// router.post('/save', (req, res) => {
//   user.save(req, res);
// });

// // Edit user
// router.get('/edit/:id', (req, res) => {
//   user.edit(req, res);
// });

// // Edit update
// router.post('/update/:id', (req, res) => {
//   user.update(req, res);
// });

// // Edit update
// router.post('/delete/:id', (req, res, next) => {
//   user.delete(req, res);
// });

module.exports = router;
