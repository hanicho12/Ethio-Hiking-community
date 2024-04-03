import './footer.css'
import { icons } from './data';
import React, { useRef } from 'react'
import { FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Footer() {
  

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info">
          <div>
          <h2>Connect With Us</h2>
          <h3>Ethio Hiking community</h3>
            <h4>S Africa St, Addis Ababa 1165</h4>
            <h4 className='gmail'>Ethiohcommunity@gmail.com</h4>
        </div>
      <div>
        <h2>Follow Us</h2>
        <ul className="social-links">
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
            <div className='footer-call'></div>
            <h3>Call Us Now:</h3>
            <h4>+251913857494</h4>
      </div>
          <div className='footer-reviews'>
        <h2>Reviews</h2>
  <NavLink to={'/reviewPage'}>
    <h3>Write/Give Review<FaStar className="star-btn"/> </h3>
  </NavLink>
  <NavLink to={'https://www.google.com/search?hl=en-ET&gl=et&q=Ethio+Hiking+community,+S+Africa+St,+Addis+Ababa+1165&ludocid=877864100642163029&lsig=AB86z5X8V9xflQlw1LbtWn8tNKrj#ip=1'}>
    <h3>Reviews on Google<FaStar className="star-btn"/> </h3>
  </NavLink>
      </div>
        </div>    
      <div className='footer-line'>
        <p>© 2023 Ethio Hiking Community. All Rights Reserved. 
</p>
      </div>
      </div>
    </footer>
  )
}

export default Footer
