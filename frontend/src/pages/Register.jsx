import { useState } from "react";
import axios from "axios";
import validator from 'validator';

import './register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!validator.isEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const formData = {
      name,
      email,
    };

    setError('');
    setLoading(true); // Set loading to true during form submission

    axios
      .post('https://ethioh.onrender.com/api/newsletter/subscribe-newsletter', formData)
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
          <h2>Request sent successfully!</h2>
          <p>Check your email for more instructions.</p>
        </div>
      ) : (
            <div className="form-container newsletter">
                <h2 className="form-title">Newsletter</h2>
                <form onSubmit={handleSubmit}>
                    <div className="name-email">
                        <div>
                            <label htmlFor="name">Full Name:</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" name="checkbox" id="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} required />
                        <label htmlFor="checkbox">Subscribe to our newsletter for exciting hiking and camping updates!</label>
                    </div>
                    <div className="newsletter-btn">
                      {error && <p>{error}</p>}
          {loading ? (
            <button type="submit" disabled>
              Loading...
            </button>
          ) : (
            <button className="btn" type="submit">Submit</button>
          )}
                    </div>
                    
                </form>
            </div>)}
        </div>
    );
};

export default Register;
