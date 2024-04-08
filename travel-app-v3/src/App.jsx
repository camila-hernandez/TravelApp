import React, { useState } from 'react';
import Footer from './components/Screen_Footer';
import Header from './components/Screen_Header';
import Page_Login from './pages/page_Login';
import Page_SignUp from './pages/page_SignUp';
import Page_Home from './pages/page_Home';
import Page_Events from './pages/page_Events';
import Page_Calendar from './pages/page_Calendar';
import Page_Account from './pages/page_Account';
import MiniWeather from './assets/MiniWeather.png';
import whereLogo from './assets/WhereLogoGreen.png';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login'); // Start with login page

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName.toLowerCase());
  };

  const handleLogin = () => {
    setCurrentPage('home'); // Redirect to home page after login
  };

  const handleGuestLogin = () => {
    setCurrentPage('home'); // Redirect to home page after guest login
  }

  const handleSignUp = () => {
    setCurrentPage('sign-up'); // Redirect to home page after sign-up
  }

  const handleLogout = () => {
    setCurrentPage('login'); // Redirect to login page after logout
  }

  return (
    <div className='outer-container'>
      <div className='mobile-container'>
        {/* Conditionally render header */}
        {currentPage !== 'login' && (
          <div className='header-container'>
            <div className="logo-field">
              <img src={whereLogo} alt="whereLogo" className="where-logo" style={{ width: '30px', height: 'auto', marginRight: '10px', marginBottom: '12px'}}/>
            </div>
            <Header pageTitle={'Where Calgary'}></Header>
            <div className="second-logo-field">
              <img src={MiniWeather} alt="miniWeather" className="mini-weather-logo" style={{ height: '40px', width: 'auto'}}/>
            </div>
          </div>
        )}

        <div className='body-container'>
          <main>
            {/* Render different pages based on currentPage */}
            {currentPage === 'login' && <Page_Login onLogin={handleLogin}/>}
            {currentPage === 'sign-up' && <Page_SignUp/>}
            {currentPage === 'home' && <Page_Home />}
            {currentPage === 'events' && <Page_Events />}
            {currentPage === 'calendar' && <Page_Calendar />}
            {currentPage === 'account' && <Page_Account onLogout={handleLogout}/>}
          </main>
        </div>

        {/* Conditionally render footer */}
        {currentPage !== 'login' && (
          <div className='footer-container'>
            <Footer
              onHomeClick={() => handlePageChange('Home')}
              onEventsClick={() => handlePageChange('Events')}
              onCalendarClick={() => handlePageChange('Calendar')}
              onAccountClick={() => handlePageChange('Account')}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
