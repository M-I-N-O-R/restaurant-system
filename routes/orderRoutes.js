const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json(order);
});

router.get('/', async (req, res) => {
  const orders = await Order.find()
    .populate({
      path: 'reservation',
      populate: [{ path: 'customer' }, { path: 'restaurant' }]
    })
    .populate('items.menuItem');
  res.json(orders);
});

module.exports = router;
