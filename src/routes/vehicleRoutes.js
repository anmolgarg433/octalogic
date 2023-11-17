const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.get('/api/vehicles', vehicleController.getAvailableVehicles);
router.get('/api/vehicles/:id', vehicleController.getVehicleDetails);

module.exports = router;