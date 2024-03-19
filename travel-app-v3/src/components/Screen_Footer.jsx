// Components/Screen_Footer.jsx
import React from 'react';
import Footer_Button from './Button';
import '../App.css'; // Import your CSS file for styling
import HomeLogo from '../assets/Footer_HomeLogo.png';
import CalendarLogo from '../assets/Footer_CalendarLogo.png';
import EventsLogo from '../assets/Footer_EventsLogo.png';
import AccountLogo from '../assets/Footer_AccountLogo.png';

const Screen_Footer = ({ onHomeClick, onEventsClick, onCalendarClick, onAccountClick }) => {
  return (
    <footer className='footer-button'>

      <button onClick={onHomeClick} className="footer-button-with-image">
        <span>HOME</span>
        <img src={HomeLogo} style={{ width: '30px', height: 'auto' }}/>
      </button>

      <button onClick={onEventsClick} className="footer-button-with-image">
        <span>EVENTS</span>
        <img src={CalendarLogo} style={{ width: '30px', height: 'auto' }}/>
      </button>

      <button onClick={onCalendarClick} className="footer-button-with-image">
        <span>CALENDAR</span>
        <img src={EventsLogo} style={{ width: '45px', height: 'auto' }}/>
      </button>

      <button onClick={onAccountClick} className="footer-button-with-image">
        <span>ACCOUNT</span>
        <img src={AccountLogo} style={{ width: '30px', height: 'auto' }}/>
      </button>

    </footer>
  );
};

export default Screen_Footer;