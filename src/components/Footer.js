import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export const Footer = () => {
  return (
    <div className='footer'>
      <div >
        <FontAwesomeIcon className='social-media' icon={faTwitter} />
        <FontAwesomeIcon className='social-media'  icon={faWhatsapp} />
        <FontAwesomeIcon className='social-media'  icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebook} />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Footer;
