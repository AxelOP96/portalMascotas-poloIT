const mongoose = require('mongoose');

const PeluditoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: String, required: true },
  barrio: { type: String, required: true },
  personalidad: { type: String, required: true },
  descripcion: { type: String, required: true },
  imagen: { type: String, required: true },
  peso: { type: String, required: true },
  estatura: { type: String, required: true },
  estadoSalud: { type: String, required: true },
  sexo: { type: String, enum: ["Macho", "Hembra"], required: true },
  raza: { type: String, required: true },
  etapaDeVida: { type: String, required: true },
  creadoPor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model('Peludito', PeluditoSchema);
