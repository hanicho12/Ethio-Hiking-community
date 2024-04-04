const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const Schema = mongoose.Schema;
const cron = require('node-cron');

const router = express.Router();

mongoose.connect('mongodb+srv://EthioHiking:Ethiohikinghun12@cluster0.whictqk.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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

router.get('/unsubscribe', async (req, res) => {
  const { email } = req.query;

  try {
    // Remove the subscriber from the database based on their email address
    await Newsletter.deleteOne({ email });

    // Respond with a message indicating successful unsubscribe
    res.status(200).json({ message: 'Unsubscribed successfully' });
  } catch (error) {
    // Handle errors
    console.error('Error unsubscribing:', error);
    res.status(500).json({ error: 'Error unsubscribing' });
  }
});

router.post('/subscribe-newsletter', (req, res) => {
    const { name, email } = req.body;

    const newNewsletter = new Newsletter({
    name,
    email,
  });

  newNewsletter.save()
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
        subject: 'Newsletter subscription',
        text: `Dear ${name},\n\n Thank you for subscribing to our newsletter.`
      };
      const senderMailOptions = {
        from: 'hanichowubet12@gmail.com',
        to: 'ethiohikingandcampingc@gmail.com',
        subject: 'New Newsletter subscription',
        text: `Dear EHACC team,\n\nYou have received a new subscription from ${name}. Please review the details and proceed accordingly.\n\nThe details are as follows:\n\nName: ${name}\n\nEmail: ${email}`
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

// Define the schedule for sending the newsletter (e.g., every Monday at 9:00 AM)
cron.schedule('42 12 * * 1', () => {
  // Invoke the function to send the newsletter
  sendNewsletter();
}, {
  timezone: 'Africa/Addis_Ababa' // Specify your timezone here
});

// Function to send the newsletter
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
        user: 'hanichowubet12@gmail.com',
        pass: 'epkx koyl jxpq kyuo',
      },
    });

    for (const subscriber of subscribers) {
      const mailOptions = {
        from: 'hanichowubet12@gmail.com',
        to: subscriber.email,
        subject: 'Your Exciting Newsletter!',
        html: `<h1>Hello dear ${subscriber.name},</h1>
                <p>This is your customized newsletter with exciting updates!</p>
                <p>Here is an image:</p>
                <img src="https://i.ibb.co/Kmp1gxP/thumbnail.jpg" style="max-width: 100%; height: auto;">
                <a href="http://localhost:5001/unsubscribe?email=${subscriber.email}">unsubscribe</a>`

      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Newsletter sent to:', subscriber.email);
    }
  } catch (error) {
    console.error('Error sending newsletter:', error);
  }
}



module.exports = router;
