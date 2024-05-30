import React from 'react';
import './styles/styles.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='contacts' id="contacts">
        <h3>Contact Us</h3>
        <p>Email: contact@travelwebsite.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Travel St, City, Country</p>
      </div>

      {/* Social Media Links */}
      <div className='social-links'>
        <h3>Follow Us</h3>
        <a href="#" style={{ color: 'white', textDecoration: 'none', padding: '5px' }}>Facebook</a> |
        <a href="#" style={{ color: 'white', textDecoration: 'none', padding: '5px' }}>Twitter</a> |
        <a href="#" style={{ color: 'white', textDecoration: 'none', padding: '5px' }}>Instagram</a>
      </div>

      {/* Legal and Copyright Information */}
      <div className='copy-right'>
        <p>&copy; 2024 Travel Website. All Rights Reserved.</p>
        <a href="/privacy-policy" style={{ color: 'white', textDecoration: 'none', padding: '5px' }}>Privacy Policy</a> |
        <a href="/terms-of-service" style={{ color: 'white', textDecoration: 'none', padding: '5px' }}>Terms of Service</a>
      </div>
    </div>
  );
};

export default Footer;