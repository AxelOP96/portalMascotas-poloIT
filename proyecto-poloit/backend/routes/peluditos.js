const express = require('express');
const router = express.Router();
const Peludito = require('../models/Peludito');
const verifyPostulante = require("../middleware/verifyTokenAndRole")("postulante");
const verifyToken = require("../middleware/verifyToken");
router.get('/', async (req, res) => {
  const peluditos = await Peludito.find();
  res.json(peluditos);
});
router.get('/:id', async (req, res) => {
  try {
    const peludito = await Peludito.findById(req.params.id);
    if (!peludito) return res.status(404).json({ msg: "No encontrado" });
    res.json(peludito);
  } catch (err) {
    res.status(500).json({ msg: "Error al obtener el peludito" });
  }
});
router.post('/', verifyPostulante, async (req, res) => {
  try {
    const nuevoPeludito = new Peludito({
      ...req.body,
      creadoPor: req.user._id
    });

    await nuevoPeludito.save();
    res.status(201).json(nuevoPeludito);
  } catch (err) {
    res.status(400).json({ msg: "Error al guardar el peludito" });
  }
});
router.get('/mis-peluditos', verifyToken, async (req, res) => {
  try {
    const peluditos = await Peludito.find({ creadoPor: req.user._id });
    res.json(peluditos);
  } catch (err) {
    res.status(500).json({ msg: "Error al obtener tus mascotas" });
  }
});

module.exports = router;
