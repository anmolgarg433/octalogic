// src/models/bookingModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Booking = sequelize.define('Booking', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  vehicleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  // Add other fields as needed
});

module.exports = Booking;
