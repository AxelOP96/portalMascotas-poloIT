const express = require('express');
const router = express.Router();
const Peludito = require('../models/Peludito');

router.get('/', async (req, res) => {
  const peluditos = await Peludito.find();
  res.json(peluditos);
});

module.exports = router;
