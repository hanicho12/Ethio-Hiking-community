const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();

const router = express.Router();
const Schema = mongoose.Schema;

// Middleware
router.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Mongoose Schema and Model
const bookingSchema = new Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  numberOfHikers: { type: Number, required: true },
  preferences: { type: String, default: '' },
  day: { type: String, required: true },
});
const Booking = mongoose.model('Booking', bookingSchema);

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API Routes
router.post('/submit-form', async (req, res) => {
  try {
    const { name, email, phoneNumber, numberOfHikers, preferences, title, cost, day } = req.body;

    // Input Validation
    if (!name || !email || !phoneNumber || !numberOfHikers) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save Booking to Database
    const newBooking = new Booking({
      name,
      email,
      phoneNumber,
      numberOfHikers,
      preferences,
      title,
      cost,
      day
    });
    await newBooking.save();

    // Prepare Email Options
  const userMailOptions = {
  from: process.env.EMAIL_FROM,
  to: email,
  subject: 'Booking Confirmation - Ethio Hiking Community',
  html: cost
    ? `<p><strong>Dear ${name},</strong></p>
      <p>We are pleased to inform you that your trip to <strong>${title}</strong> on <strong>${day}</strong> has been successfully reserved.</p>
      <p>The total cost for this trip is <strong>${cost} birr</strong>. Please note that this amount is pending payment.</p>
      <p>To complete your reservation, we will send you detailed payment instructions shortly.</p>
      <p>If you have any questions or require further assistance, feel free to reach out to us.</p>
      <br />
      <p>Thank you for choosing Ethio Hiking Community. We look forward to making your trip an unforgettable experience.</p>
      <p>Best regards,</p>
      <span><strong>Ethio Hiking Community Team</strong></span>`
    : `<p><strong>Dear ${name},</strong></p>
      <p>We are pleased to inform you that your trip to <strong>${title}</strong> on <strong>${day}</strong> has been successfully reserved.</p>
      <p>We will send you the total cost of the trip along with payment instructions shortly.</p>
      <p>If you have any specific inquiries about the trip or payment options, please do not hesitate to contact us.</p>
      <br />
      <p>Thank you for choosing Ethio Hiking Community. We look forward to making your trip an unforgettable experience.</p>
      <p>Best regards,</p>
      <span><strong>Ethio Hiking Community</strong></span>`,
};



    const adminMailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER,
      subject: 'New Trip Reservation',
      html: `<p><strong>Dear Ethio Hiking Community,</strong></p>
            <p>You have received a new trip reservation for ${title}, date ${day}. Please review the details and proceed accordingly:</p>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>date:</strong> ${day}</li>
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

    res.status(200).json({ message: 'Booking saved and emails sent successfully' });
  } catch (error) {
    console.error('Error processing booking:', error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});

module.exports = router;