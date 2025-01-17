import { NavLink } from "react-router-dom";
import { icons } from './data';
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import './navbar.css';


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [menuIcon, setMenuIcon] = useState(<FaBars />);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
        setMenuIcon(showLinks ? <FaBars /> : <IoCloseSharp />);
    };

    return (
        <nav>
            <div className="nav-container">
                <div className={`nav-header ${showLinks ? 'fixed-nav' : ''}`}>
                    <div>
                        <NavLink to='/'>
                            <picture>
                                <source srcSet='/assets/logo/logo.avif' type='image/avif' />
                                <img src='/assets/logo/favicon.png' alt='Ethio Hiking Community Logo' />
                            </picture>
                        </NavLink>

                    </div>
                    <div>
                        <button onClick={toggleLinks}>
                            {menuIcon}
                        </button>
                    </div>
                </div>
                <div className={`header-links ${showLinks ? 'show' : ''}`}>
                    <div className="nav-links">
                        <NavLink to='/' className='nav-link' onClick={toggleLinks}>
                            home
                        </NavLink>
                        <NavLink to='/about' className='nav-link' onClick={toggleLinks}>
                            about
                        </NavLink>
                        <NavLink to='/newsletter' className='nav-link' onClick={toggleLinks}>
                            newsletter
                        </NavLink>
                    </div>
                    <ul className="social-links">
                        {
                            icons
                                .filter((socialIcon) => socialIcon.id <= 5) 
                                .map((socialIcon) => {
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
        </nav>
    );
}

export default Navbar;
