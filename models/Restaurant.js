const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  name: String,
  address: String,
  cuisine: String,
  tables: Number
});
module.exports = mongoose.model('Restaurant', schema);