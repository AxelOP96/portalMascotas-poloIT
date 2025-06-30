const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "claveultrasecreta";
router.post('/register', async (req, res) => {
  const { nombre, apellido, telefono, email, password, role } = req.body;

  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ msg: "El usuario ya existe" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    nombre,
    apellido,
    telefono,
    email,
    password: hashedPassword,
    role
  });

  await newUser.save();

  const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: "1d" });

  res.json({ token, user: { id: newUser._id, nombre, email, role } });
});

module.exports = router;

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "Email inválido" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Contraseña incorrecta" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });

    res.json({ token, user: { id: user._id, nombre: user.nombre, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

const verifyToken = require("../middleware/verifyToken");

router.get("/me", verifyToken, (req, res) => {
  const { nombre, apellido, email, role } = req.user;
  res.json({ nombre, apellido, email, role });
});