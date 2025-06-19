const mongoose = require('mongoose');

const PeluditoSchema = new mongoose.Schema({
  nombre: String,
  edad: String,
  barrio: String,
  descripcion: String,
  imagen: String
});

module.exports = mongoose.model('Peludito', PeluditoSchema);
