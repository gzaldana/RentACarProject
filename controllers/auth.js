const User = require("../models/mongodb/users");

const userController = {};

// Show list of employees
userController.list = (req, res) => {
  User.find({}).exec((err, users) => {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/auth.ejs", {users: users});
    }
  });
};

// Show employee by id
// employeeController.show = (req, res) => {
//   Employee.findOne({_id: req.params.id}).exec((err, employee) => {
//     if (err) {
//       console.log("Error:", err);
//     }
//     else {
//       res.render("../views/employees/show", {employee: employee});
//     }
//   });
// };

// Create new employee'



userController.create = (req, res) => {
  res.render("../views/auth.ejs",{ title: 'QuickGO Rent A Car - Auth' });
  console.log('entreando a CREATE');
};

// Save new employee
userController.save = (req, res) => {
  const user = new User(req.body);

  user.save((err) => {
    if(err) {
      console.log(err);
      res.render("../views/auth.ejs");
    } else {
      console.log("Successfully created an user.");
    //   res.redirect("/employees/show/"+employee._id);
      res.redirect("/");
      
    }
  });
};

// Edit an employee
// employeeController.edit = (req, res) => {
//   Employee.findOne({_id: req.params.id}).exec((err, employee) => {
//     if (err) {
//       console.log("Error:", err);
//     }
//     else {
//       res.render("../views/employees/edit", {employee: employee});
//     }
//   });
// };

// Update an employee
// employeeController.update = (req, res) => {
//   Employee.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, employee) {
//     if (err) {
//       console.log(err);
//       res.render("../views/employees/edit", {employee: req.body});
//     }
//     res.redirect("/employees/show/"+employee._id);
//   });
// };

// Delete an employee
// employeeController.delete = (req, res) => {
//   Employee.remove({_id: req.params.id}, (err) => {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       console.log("Employee deleted!");
//       res.redirect("/employees");
//     }
//   });
// };

module.exports = userController;
