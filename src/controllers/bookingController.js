// src/controllers/bookingController.js
const Booking = require('../models/bookingModel');

exports.submitBooking = async (req, res) => {
  const { userId, vehicleId, startDate, endDate } = req.body;

  try {
    // Check if the vehicle is available for the specified dates
    const isAvailable = await checkAvailability(vehicleId, startDate, endDate);

    if (!isAvailable) {
      return res.status(400).json({ error: 'Vehicle not available for the selected dates' });
    }

    // Create a new booking
    const booking = await Booking.create({
      userId,
      vehicleId,
      startDate,
      endDate,
    });

    res.status(201).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Function to check if the vehicle is available for the specified dates
async function checkAvailability(vehicleId, startDate, endDate) {
  const existingBooking = await Booking.findOne({
    where: {
      vehicleId,
      [Op.or]: [
        {
          startDate: { [Op.between]: [startDate, endDate] },
        },
        {
          endDate: { [Op.between]: [startDate, endDate] },
        },
      ],
    },
  });

  return !existingBooking;
}
