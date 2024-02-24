import React from 'react';
import './App.css';
import HomePage from './HomePage';
import MeowPage from './MeowPage';

function App() {
  // Event handler function
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="app-container">
      {/* <HomePage handleClick={handleClick} /> */}
      <MeowPage/>
    </div>
  );
}

export default App;
