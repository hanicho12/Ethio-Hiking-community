const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const router = express.Router();
const Schema = mongoose.Schema;

// Middleware
router.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Mongoose Schema and Model
const requestSchema = new Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  numberOfHikers: { type: Number, required: true },
  preferences: { type: String, default: '' },
});
const TripRequest = mongoose.model('TripRequest', requestSchema);

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API Route
router.post('/submit-request', async (req, res) => {
  try {
    const { name, email, phoneNumber, numberOfHikers, preferences, title, cost } = req.body;

    // Input Validation
    if (!name || !email || !phoneNumber || !numberOfHikers) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save Request to Database
    const newRequest = new TripRequest({
      name,
      email,
      phoneNumber,
      numberOfHikers,
      preferences,
      title,
      cost,
    });
    await newRequest.save();

    // Prepare Email Options
    const userMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Trip Request Confirmation',
      html: `<p><strong>Dear ${name},</strong></p>
            <p>We have received your trip request to <strong>${title}</strong>. After reviewing your request, we will proceed with the next steps to complete your reservation.</p>
            <p>Thank you for choosing our services.We look forward to assisting you further.<p>
            <br />
            <p>Best regards,</p>
            <span><strong>Ethio Hiking Community</strong></span>`,
    };

    const adminMailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER,
      subject: 'New Trip Request',
      html: `<p><strong>Dear Ethio Hiking Community,</strong></p>
            <p>You have received a new trip request for <strong>${title}</strong>. Please review the details and proceed accordingly:</p>
            <ul>
              <li><strong>Name:<strong> ${name}</li>
              <li><strong>Email:<strong> ${email}</li>
              <li><strong>Phone Number:</strong> ${phoneNumber}</li>
              <li><strong>Number of Hikers:</strong> ${numberOfHikers}</li>
              <li><strong>Preferences or Special Requests:</strong> ${preferences}</li>
            </ul>
            <p>Best regards,</p>
            <span>Ethio Hiking Community</span>`,
    };

    // Send Emails in Parallel
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    res.status(200).json({ message: 'Trip request saved and emails sent successfully' });
  } catch (error) {
    console.error('Error processing trip request:', error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});


module.exports = router;