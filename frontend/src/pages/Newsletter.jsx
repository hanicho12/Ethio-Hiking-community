import { useState } from "react";
import axios from "axios";
import validator from 'validator';
import './newsletter.css';

const Newsletter = () => {
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
    setLoading(true); 

    axios
      .post('https://ethiohikingcommunity.com/api/newsletter/subscribe-newsletter', formData)
      .then((response) => {
        setSuccess(true);
        setLoading(false); 
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
            setError('You are already subscribed to the newsletter.');
        } else {
            setError('There was an error with your subscription. Please try again later.');
        }
        setLoading(false);
      });
  };

  return (
    <section className="newsletter-section">
          {success ? (
        <div className="success-message">
          <h2>Thank you for subscribing!</h2>
          <p>You’re now part of the Ethio Hiking Community.</p>
        </div>
      ) : (
            <div className="newsletter-form-container">
                <h2 className="form-title">Stay Updated</h2>
                <form onSubmit={handleSubmit} className="newsletter-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Enter your name"
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Enter your email address"
                            required 
                        />
                    </div>
                    <div className="form-group checkbox-group">
                        <input 
                            type="checkbox" 
                            name="checkbox" 
                            id="checkbox" 
                            checked={isChecked} 
                            onChange={(e) => setIsChecked(e.target.checked)} 
                            required 
                        />
                        <label htmlFor="checkbox">Subscribe for exciting travel updates!</label>
                    </div>
                    {error && <p className="error-text">{error}</p>}
                    <div className="form-group btn">
                        <button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? 'Processing...' : 'Subscribe'}
                        </button>
                    </div>
                </form>
            </div>)}
        </section>
    );
};

export default Newsletter;
