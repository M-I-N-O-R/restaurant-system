const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());

// MongoDB підключення
mongoose.connect('mongodb://localhost:27017/restaurant-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB підключено'))
  .catch(err => console.error('❌ Помилка підключення до MongoDB:', err));

// Простий root маршрут (щоб перевірити, що сервер працює)
app.get('/', (req, res) => {
  res.send('API працює!');
});

// Підключення роутів
const customerRoutes = require('./routes/customerRoutes');
const menuRoutes = require('./routes/menuRoutes');  // ← перевір, що файл існує!
const orderRoutes = require('./routes/orderRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');

app.use('/api/customers', customerRoutes);
app.use('/api/menu', menuRoutes);  // ← головне меню
app.use('/api/orders', orderRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/restaurants', restaurantRoutes);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер слухає на http://localhost:${PORT}`);
});
