const mongoose = require('mongoose');
const Menu = require('./models/Menu');

mongoose.connect('mongodb://localhost:27017/restaurant-system')
  .then(async () => {
    await Menu.deleteMany({});
    await Menu.insertMany([
      { name: 'Борщ', price: 80 },
      { name: 'Вареники', price: 100 }
    ]);
    console.log('Меню додано!');
    process.exit();
  })
  .catch(err => console.error(err));
