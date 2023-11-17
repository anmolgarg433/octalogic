const express = require('express');
const sequelize = require('./src/db/db');
const vehicleRoutes = require('./src/routes/vehicleRoutes');
const bookingRoutes = require('./src/routes/bookingRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(vehicleRoutes);

// Sync Sequelize models with the database
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});