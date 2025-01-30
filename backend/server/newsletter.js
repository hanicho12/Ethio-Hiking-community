const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const Schema = mongoose.Schema;
const cron = require('node-cron');
require('dotenv').config();
const router = express.Router();


mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
  console.log('connected to mongodb');
}).catch((error) => {
  console.error('error connecting to mongodb:', error);
});
const newsletterSchema = new Schema({
  name: String,
  email: String,
});

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

router.use(express.json());

router.post('/subscribe-newsletter', async (req, res) => {
  const { name, email } = req.body;

  try {
    const existingSubscriber = await Newsletter.findOne({ email });

    if (existingSubscriber) {
      return res.status(409).json({ message: 'You are already subscribed to the newsletter.' });
    }

    const newNewsletter = new Newsletter({
      name,
      email,
    });

    await newNewsletter.save();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Welcome to the Ethio Hiking Community Newsletter!',
      html: `<strong>Dear ${name || 'Valued Subscriber'},</strong>
        <p>Thank you for subscribing to our newsletter! We're thrilled to have you with us.</p>
        <p>By joining our community, you'll receive the latest updates on upcoming hikes, exclusive tips, and insider knowledge about the best hiking spots. Stay tuned for exciting content, trip recommendations, and special offers!</p>
        <br /><p>Best regards,</p> 
        <span><strong>Ethio Hiking Community</strong></span>`
    };

    const senderMailOptions = {
      from:  process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER,
      subject: 'New Newsletter subscription',
      html: `<p> <strong>Dear Ethio Hiking Community,</strong></p>
        <p>You have received a new subscription from ${name}. Please review the details and proceed accordingly.<br />
        The details are as follows:</p> <p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p>
        <br />
        <br />
        <p>Best regards,</p>
        <span><strong>Ethio Hiking Community</strong></span>`
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(senderMailOptions);

    res.status(200).json({ message: 'Subscribed successfully' });

  } catch (error) {
    console.error('Error subscribing:', error);
    res.status(500).json({ error: 'Error subscribing' });
  }
});


router.get('/unsubscribe', async (req, res) => {
  const { email } = req.query;

  try {
    await Newsletter.deleteOne({ email });
        res.status(200).send('You have successfully unsubscribed from the newsletter.');

  } catch (error) {
    console.error('Error unsubscribing:', error);
    res.status(500).json({ error: 'Error unsubscribing' });
  }
});


// schedule for sending the newsletter 

// cron.schedule('14 13 * * 2', () => {
//   sendNewsletter();
// }, {
//   timezone: 'Africa/Addis_Ababa' 
// });

async function sendNewsletter() {
  try {
    const subscribers = await Newsletter.find({}, 'email name').exec();

    if (subscribers.length === 0) {
      console.log('No subscribers found');
      return;
    }

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    for (const subscriber of subscribers) {
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: subscriber.email,
        subject: 'Exciting Updates from Ethio Hiking Community!',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: #4CAF50;">Hello ${subscriber.name || 'Valued Subscriber'},</h1>

        <p>We are thrilled to bring you the latest updates from the <strong>Ethio Hiking Community</strong>!</p>

        <h2 style="color: #555;">What’s New This Week:</h2>
        <ul>
          <li>🌄 <strong>Exclusive Hiking Spots</strong> - Discover new and hidden trails.</li>
          <li>🎒 <strong>Gear Tips</strong> - The must-have equipment for your next adventure.</li>
          <li>🗓️ <strong>Upcoming Events</strong> - Join us for group hikes and special activities.</li>
        </ul>

        <h3 style="color: #4CAF50;">Featured Image of the Week:</h3>
        <p>Here’s a sneak peek of our latest adventure:</p>
        <img src="https://i.ibb.co/Kmp1gxP/thumbnail.jpg" alt="Hiking Adventure" style="max-width: 100%; height: auto; border-radius: 8px;">

        <p>We hope you’re as excited as we are about these updates. Keep an eye on your inbox for more tips, stories, and hiking inspiration!</p>

        <p style="font-size: 14px; color: #777;">
          If you wish to stop receiving these emails, you can <a href="http://localhost:3000/unsubscribe?email=${subscriber.email}" style="color: #d9534f;">unsubscribe here</a>.
        </p>

        <p>Best regards,<br><strong>The Ethio Hiking Community Team</strong></p>
      </div>
    `
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Newsletter sent to:', subscriber.email);
    }
  } catch (error) {
    console.error('Error sending newsletter:', error);
  }
}

module.exports = router;
