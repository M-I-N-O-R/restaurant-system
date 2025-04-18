const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

router.post('/', async (req, res) => {
  const reservation = new Reservation(req.body);
  await reservation.save();
  res.json(reservation);
});

router.get('/', async (req, res) => {
  const reservations = await Reservation.find()
    .populate('customer')
    .populate('restaurant');
  res.json(reservations);
});

module.exports = router;