const Vehiculo = require('../models/mongodb/vehiculos')


const vehiculoController = {};

// Show list of vehiculos
vehiculoController.list = (req, res) => {
  Vehiculo.find({}).exec((err, vehiculos) => {
	// console.log("----------------------");
	// console.log(Vehiculo.find({}));
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/vehicles/index.ejs", {vehiculos: vehiculos});
    }
  });
};

// Show vehiculo by id
vehiculoController.show = (req, res) => {
  Vehiculo.findOne({_id: req.params.id}).exec((err, vehiculo) => {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/vehicles/index.ejs", {vehiculo: vehiculo});
    }
  });
};

// Create new vehiculo
vehiculoController.create = (req, res) => {
  res.render("../views/vehicles/create.ejs");
};

// Save new vehiculo
vehiculoController.save = (req, res) => {
  const vehiculo = new Vehiculo(req.body);

  vehiculo.save((err) => {
    if(err) {
      console.log(err);
      res.render("../views/vehicles/create.ejs");
    } else {
      console.log("Successfully created an vehiculo.");
      res.redirect("/");
    }
  });
};

// Edit an vehiculo
vehiculoController.edit = (req, res) => {
  Vehiculo.findOne({_id: req.params.id}).exec((err, vehiculo) => {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/vehicles/create.ejs", {Vehiculos: vehiculo});
    }
  });
};

// Update an vehiculo
// vehiculoController.update = (req, res) => {
//   Vehiculo.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, employee) {
//     if (err) {
//       console.log(err);
//       res.render("../views/employees/edit", {employee: req.body});
//     }
//     res.redirect("/employees/show/"+employee._id);
//   });
// };

// Delete an vehiculo
vehiculoController.delete = (req, res) => {
  Vehiculo.remove({_id: req.params.id}, (err) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log("Vehiculo deleted!");
      res.redirect("/vehiculos");
    }
  });
};

// const Vehiculo = {
// 	list: async (req, res) => {
// 		const vehiculos = await Vehiculos.find()
// 		res.status(200).send(vehiculos)
// 	},
// 	create: async (req, res) => {
// 		const vehiculo = new Vehiculos(req.body)
// 		await vehiculo.save()
// 		res.status(201).send('Vehiculo creado!')
// 	},
// 	update: async (req, res) => {
// 		res.status(204).send('actualizando Vehiculo')
// 	},
// 	destroy: async (req, res) => {
// 		const { id } = req.params
// 		const vehiculo = await Vehiculos.findOne({ _id: id })
//     await vehiculo.remove()
// 		res.status(204).send('eliminando Vehiculo')
// 	}
// }


module.exports = vehiculoController
