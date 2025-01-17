const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();
const Schema = mongoose.Schema;
const router = express.Router();


router.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
  console.log('connected to mongodb');
}).catch((error) => {
  console.error('error connecting to mongodb:', error);
});

const reviewSchema = new Schema({
  title: String,
  review: String,
  name: String,
  email: String,
  verified: String,
  stars: Number,
  date: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', reviewSchema);

router.post('/api/reviews', async (req, res) => {
  try {
    const { title, review, name, email, verified, stars } = req.body;
    const newReview = new Review({ title, review, name, email, verified, stars });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews.map(review => ({ ...review.toObject(), stars: review.stars }))); // Include the stars field in the response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/api/reviews/count', async (req, res) => {
    try {
        const count = await Review.countDocuments();
        res.json({ count });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/api/reviews/average-rating', async (req, res) => {
    try {
        const reviews = await Review.find();
        let totalStars = 0;
        reviews.forEach(review => {
            totalStars += review.stars;
        });
        const averageRating = reviews.length > 0 ? totalStars / reviews.length : 0;
        res.json({ averageRating });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;
