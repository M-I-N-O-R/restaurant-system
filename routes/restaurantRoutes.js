const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// 🔹 GET: отримати всі ресторани
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
    