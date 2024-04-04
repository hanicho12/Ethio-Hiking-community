const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const Schema = mongoose.Schema;
const router = express.Router();


mongoose.connect('mongodb+srv://EthioHiking:Ethiohikinghun12@cluster0.whictqk.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('connected to mongodb');
}).catch((error) => {
  console.error('error connecting to mongodb:', error);
});

const requestSchema = new Schema({
  title: String,
  name: String,
  email: String,
  phoneNumber: String,
  numberOfHikers: Number,
  preferences: String,
});
const TripReqest = mongoose.model('TripReqest', requestSchema);

router.use(express.json());

router.post('/submit-request', (req, res) => {
    const { name, email, phoneNumber, numberOfHikers, preferences, title, cost } = req.body;

    const newRequest = new TripReqest({
    name,
    email,
    phoneNumber,
    numberOfHikers,
    preferences,
    title,
    cost
  });

  newRequest.save()
    .then(() => {
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'hanichowubet12@gmail.com',
          pass: 'epkx koyl jxpq kyuo',
        },
      });

      const mailOptions = {
        from: 'hanichowubet12@gmail.com',
        to: email,
        subject: 'Request confirmation',
        text: `Dear ${name},\n\nWe have received your trip request to ${title}. After careful consideration of your request, we will proceed with the next steps for your reservation.\n\nThank you for choosing our services, and we look forward to assisting you further.\n\nBest regards,`
      };
      const senderMailOptions = {
        from: 'hanichowubet12@gmail.com',
        to: 'ethiohikingandcampingc@gmail.com',
        subject: 'New Trip Request',
        text: `Dear EHACC team,\n\nYou have received a new trip request from ${name}. Please review the details and proceed accordingly.\n\nThe details are as follows:\n\nName: ${name}\n\nEmail: ${email}\n\nPhone Number: ${phoneNumber}\n\nNumber of Hikers: ${numberOfHikers}\n\nDetail about their request: ${preferences}\n\nBest regards,`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          res.status(500).json({ error: 'Error sending email' });
        } else {
          console.log('Email sent:', info.response);
          res.status(200).json({ message: 'trip request saved successfully' });
        }
      });
      transporter.sendMail(senderMailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          res.status(500).json({ error: 'Error sending email' });
        } else {
          console.log('Email sent:', info.response);
          res.status(200).json({ message: 'trip request saved successfully' });
        }
      });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error saving booking' });
    });
});

module.exports = router;