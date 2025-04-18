const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  date: Date,
  people: Number,
  tableNumber: Number
});
module.exports = mongoose.model('Reservation', schema);