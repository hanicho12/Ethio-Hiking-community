const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const Schema = mongoose.Schema;

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://EthioHiking:Ethiohikinghun12@cluster0.whictqk.mongodb.net/?retryWrites=true&w=majority', {
}).then(() => {
  console.log('connected to mongodb');
}).catch((error) => {
  console.error('error connecting to mongodb:', error);
});

const bookingSchema = new Schema({
  title: String,
  name: String,
  email: String,
  phoneNumber: String,
  numberOfHikers: Number,
  preferences: String,
});
const Booking = mongoose.model('Booking', bookingSchema);

app.use(express.json());

app.post('/submit-form', (req, res) => {
  const { name, email, phoneNumber, numberOfHikers, preferences, title, cost } = req.body;

  const newBooking = new Booking({
    name,
    email,
    phoneNumber,
    numberOfHikers,
    preferences,
    title,
    cost
  });

  newBooking.save()
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
        subject: 'Booking Confirmation',
        text: `Dear ${name}\n\nThis is to inform you that your trip to ${title} has been reserved successfully and you have a pending payment of ${cost}.`,
      };
      const senderMailOptions = {
        from: 'hanichowubet12@gmail.com',
        to: 'ethiohikingandcampingc@gmail.com',
        subject: 'New Booking Confirmation',
        text: `Dear EHACC team,\n\nYou have received a new trip request from ${name}. Please review the details and proceed accordingly.\n\nThe details are as follows:\n\nName: ${name}\n\nEmail: ${email}\n\nPhone Number: ${phoneNumber}\n\nNumber of Hikers: ${numberOfHikers}\n\nDetail about their request: ${preferences}\n\nBest regards,`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          res.status(500).json({ error: 'Error sending email' });
        } else {
          console.log('Email sent:', info.response);
          res.status(200).json({ message: 'Booking saved successfully' });
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

app.listen(3000, () => {
  console.log('server is running on port 3000');
});