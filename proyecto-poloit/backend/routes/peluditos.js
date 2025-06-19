const express = require('express');
const router = express.Router();
const Peludito = require('../models/Peludito');

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


module.exports = router;
