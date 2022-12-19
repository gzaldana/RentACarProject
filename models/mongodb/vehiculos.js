const mongoose = require("mongoose");

const VehiculoSchema = new mongoose.Schema({
  name: String,
  image: String,
  pasajeros: Number,
  km: Number,
  year: Number,
  precio: Number,
  estado: String,
  combustible: String,
  tipo:String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Vehiculo', VehiculoSchema);

