import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import './bookingForm.css'

function BookingForm({ selectedData }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numberOfHikers, setNumberOfHikers] = useState(1);
  const [preferences, setPreferences] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // New loading state
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phoneNumber || !numberOfHikers) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!validator.isEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (numberOfHikers < 1) {
      setError('Number of hikers must be at least 1.');
      return;
    }

    const formData = {
      name,
      email,
      phoneNumber,
      numberOfHikers,
      preferences,
      title: selectedData.title,
      cost: selectedData.cost * numberOfHikers
    };

    setError('');
    setLoading(true); // Set loading to true during form submission

    axios
      .post('http://localhost:3000/api/booking/submit-form', formData)
      .then((response) => {
        console.log(response.data.message); // Booking saved successfully
        // Perform any additional actions, such as displaying a success message or redirecting
        setSuccess(true);
        setLoading(false); // Set loading to false after successful form submission
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors that occurred during form submission
        setLoading(false); // Set loading to false if an error occurred
      });
  };

  return (
    <div>
      {success ? (
        <div>
          <h2>Booking saved successfully!</h2>
          <p>Check your email for payment instructions.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='form-container booking-form'>
          <div className='trip-title'>
            <h2>book/reserve a trip to {selectedData.title}</h2>
          </div>
          <div className="name-email form-input">
            <div>
            <label htmlFor="name">
              Name:{" "}
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div  >
            <label htmlFor="number">Number of Hikers:</label>
            <input
              type="number"
              id="number"
              value={numberOfHikers}
              onChange={(e) => setNumberOfHikers(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="request" >Preferences or Special Requests:</label>
            <textarea
            
              type="text"
              id="request"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
            />
          </div>
          </div>
          {error && <p>{error}</p>}
          {loading ? (
            <button type="submit" disabled>
              Loading...
            </button>
          ) : (
            <button className='reserve' type="submit">Submit</button>
          )}
        </form>
      )}
    </div>
  );
}

export default BookingForm;