// App.jsx
import React, { useState } from 'react';
import Footer from './components/Screen_Footer';
import PageHome from './pages/page_Home';
import './App.css';
import HomeLogo from '../src/assets/Footer_HomeLogo.png';


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName.toLowerCase());
  };

  return (
    <div className='outer-container'>
      <div className='mobile-container'>
      
      <div className='header-container'>


      </div>


      <div className='body-container'>
      <main>


      <img src={HomeLogo} alt="HomeLogo" className="HomeLogo"
            style={{ width: '50px', height: 'auto' }}
            />
        {currentPage === 'home' && <PageHome />}
        {/* Add conditions for other pages */}
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







