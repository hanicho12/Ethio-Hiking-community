const express = require('express');
const cors = require('cors');
const bookingRoutes = require('./booking');
const newsletterRoutes = require('./newsletter');
const reviewRoutes = require('./review');
const tripRequestRoutes = require('./tripRequest');

const app = express();
app.use(cors());
app.use(express.json());

// Mounting routes from separate files
app.use('/api/booking', bookingRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api/trip-request', tripRequestRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
