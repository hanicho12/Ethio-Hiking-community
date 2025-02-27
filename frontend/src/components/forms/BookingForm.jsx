import React, { useRef, useState } from 'react';
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
  const successMessageRef = useRef(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 
  
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
    setLoading(true); 

    axios
      .post('https://ethiohikingcommunity.com/api/booking/submit-form', formData)
      .then((response) => {
        console.log(response.data.message); 
        setSuccess(true);
        setLoading(false); 
        setTimeout(() => {
          if (successMessageRef.current) {
            successMessageRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      })
      .catch((error) => {
        console.error(error);
        setError('There was an error with your booking. Please try again later.');
        setLoading(false); 
      });
  };

  return (
    <section className='form-section'>
      {success ? (
        <div className='success-message' ref={successMessageRef}>
          <h2>Your trip has been successfully reserved!</h2>
          <p>You will receive a confirmation email with all the details and payment instructions shortly.</p>
        </div>
      ) : (
        <div className="form-container">
          <h2 className="form-title">Book/Reserve a Trip to the {selectedData.title}</h2>
          <form onSubmit={handleSubmit} className='form'>
            <div className="form-group">
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
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group" >
            <label htmlFor="number">Group Size:</label>
            <input
              type="number"
              id="number"
              value={numberOfHikers}
              onChange={(e) => setNumberOfHikers(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="request" >Preferences or Special Requests(optional):</label>
            <textarea           
              type="text"
              id="request"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
            />
          </div>
          
          {error && <p className="error-text">{error}</p>}
          {loading ? (
            <button className="submit-btn" type="submit" disabled>
              Processing...
            </button>
          ) : (
            <button className='reserve' type="submit">Submit</button>
          )}
        </form>
        </div>
      )}
    </section>
  );
}

export default BookingForm;