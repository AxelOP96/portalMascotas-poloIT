const mongoose = require('mongoose');
const Peludito = require('./models/Peludito');
const fs = require('fs');
require('dotenv').config();

// 1. Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log("Conectado a MongoDB");

  // 2. Leer JSON desde el archivo
  const rawData = fs.readFileSync('./data/peluditos.json', 'utf-8');
  const peluditos = JSON.parse(rawData);

  // 3. Limpiar colección y agregar nuevos
  await Peludito.deleteMany();
  await Peludito.insertMany(peluditos);
  console.log("Peluditos cargados correctamente!");

  mongoose.connection.close();
})
.catch(err => {
  console.error("Error al cargar datos:", err);
});
