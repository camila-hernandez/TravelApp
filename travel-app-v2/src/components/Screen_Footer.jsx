// Screen_Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import your CSS file for styling

function Screen_Footer() {
  return (
    <div className="screen-footer">
      <Link to="/home" className="footer-link">HOME</Link>
      <Link to="/events" className="footer-link">EVENTS</Link>
      <Link to="/calendar" className="footer-link">CALENDAR</Link>
      <Link to="/account" className="footer-link">ACCOUNT</Link>
    </div>
  );
}

export default Screen_Footer;
