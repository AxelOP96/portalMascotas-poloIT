const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  telefono: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["adoptante", "postulante"], default: "adoptante" }
});

module.exports = mongoose.model("User", UserSchema);
