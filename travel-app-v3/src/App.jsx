import React, { useState } from 'react';
import Footer from './components/Screen_Footer';

import Page_Home from './pages/page_Home';
import Page_Events from './pages/page_Events';
import Page_Calendar from './pages/page_Calendar';
import Page_Account from './pages/page_Account';

import './App.css';


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName.toLowerCase());
  };

  return (
    <div className='outer-container'>
      <div className='mobile-container'>
        <div className='header-container'></div>

        <div className='body-container'>
          <main>
            {currentPage === 'home' && <Page_Home />}
            {currentPage === 'events' && <Page_Events />}
            {currentPage === 'calendar' && <Page_Calendar />}
            {currentPage === 'account' && <Page_Account />}
          </main>
        </div>

        <div className='footer-container'>
          <Footer
            onHomeClick={() => handlePageChange('Home')}
            onEventsClick={() => handlePageChange('Events')}
            onCalendarClick={() => handlePageChange('Calendar')}
            onAccountClick={() => handlePageChange('Account')}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
