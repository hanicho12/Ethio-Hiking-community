import './footer.css';
import { icons } from './data';
import axios from 'axios';
import validator from 'validator';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


function Footer() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId) => {
    navigate('/'); 
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'auto' });
      }
    }, 100); 
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    if (!validator.isEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setLoading(true);

    axios
      .post('http://localhost:3000/api/newsletter/subscribe-newsletter', { email })
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
    <footer className="footer">
      <div className="footer-container">
        {/*About and Contact Info */}
        <div className="footer-about">
          <NavLink to='/'>
            <img src="assets/logo/favicon.png" className="footer-logo" alt="Ethio Hiking Community Logo"  />
          </NavLink>
          <p className="footer-description">
            Ethio Hiking Community offers guided hiking and travel adventures through the breathtaking landscapes of Ethiopia. Join us to explore the beauty of nature, experience the culture, and make unforgettable memories.
          </p>
          <div className="footer-contact">
            <p>Email: <a href="mailto:ethiohikingcommunity@gmail.com">ethiohikingcommunity@gmail.com</a></p>
            <p>Phone: +251-91-385-7494</p>
            <p>Address: S Africa St, Addis Ababa 1165</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to='/' className='nav-link' >
                Home</NavLink> </li>
            <li> <NavLink to='/about' className='nav-link' >About Us</NavLink> </li>
            <li onClick={() => handleScrollToSection('destination')}>Request a trip</li>
            <li onClick={() => handleScrollToSection('next-destination')}>Book a trip</li>
            <li><NavLink to={'/reviewPage'}>Write/Read Review</NavLink></li>
            <li><NavLink to={'https://www.google.com/search?hl=en-ET&gl=et&q=Ethio+Hiking+community,+S+Africa+St,+Addis+Ababa+1165&ludocid=877864100642163029&lsig=AB86z5X8V9xflQlw1LbtWn8tNKrj#ip=1'}>
              Reviews on Google
            </NavLink></li> 
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-newsletter">
          <h4>Join Our Community!</h4>
          <p>Subscribe to receive updates on new hiking trips, tips, and special offers.</p>
          {success ? (
            <p className="success-message">Thank you for subscribing! You’re now part of the Ethio Hiking Community.</p>
          ) : (
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              {error && <p className="error-text">{error}</p>}
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Processing...' : 'Subscribe'}
              </button>
            </form>
          )}
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul className="footer-social-links">
                        {
                            icons.map((socialIcon) => {
                                const { id, url, icon } = socialIcon;
                                return (
                                    <li key={id} className="icons">
                                        <a href={url}>
                                            {React.cloneElement(icon, { className: 'blue-icon' })}
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2024 Ethio Hiking Community. All Rights Reserved.</p>
        <p><NavLink to="/privacy">Privacy Policy</NavLink> | <NavLink to="/terms">Terms of Service</NavLink></p>
      </div>
    </footer>
  );
}

export default Footer;
