const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

router.post('/', async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.json(customer);
});

router.get('/', async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

module.exports = router;