const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');

// GET /api/menu
router.get('/', async (req, res) => {
  try {
    const items = await Menu.find().populate('restaurant');
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
