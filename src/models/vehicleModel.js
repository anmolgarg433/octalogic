// src/models/vehicleModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Vehicle = sequelize.define('Vehicle', {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['hatchback', 'suv', 'sedan', 'cruiser', 'sports']],
    },
  },
  // Add other fields as needed
});

module.exports = Vehicle;
