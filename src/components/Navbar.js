import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; 

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='logo'>
        <h1>Jacinda</h1>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
        <li className="nav-item">
          <a href="/services">Services</a>
        </li>
        <li className="nav-item">
          <a href="/contact">Contact<FontAwesomeIcon icon={faPhone}/></a>
        </li>
        <li className="nav-item">
        <a href="/Profile">Profile<FontAwesomeIcon icon={faUser}/></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
