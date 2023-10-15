const express = require('express');
const router = express.Router();
const OTP = require('../models/OTPModel');

// Create a new OTP
router.post('/', async (req, res) => {
  try {
    const otp = new OTP(req.body);
    await otp.save();
    res.status(201).json(otp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a list of all OTPs
router.get('/', async (req, res) => {
  try {
    const otps = await OTP.find();
    res.json(otps);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
