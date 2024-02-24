import React from 'react';
import './App.css';
import HomePage from './HomePage';

function App() {
  // Event handler function
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="app-container">
      <HomePage handleClick={handleClick} />
    </div>
  );
}

export default App;
