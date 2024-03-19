// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import './App.css'; // Import your CSS file for styling

function App() {
  const [headerText, setHeaderText] = useState('');

  const handleButtonClick = (text) => {
    switch (text) {
      case 'something':
        setHeaderText('something');
        break;
      case 'meow':
        setHeaderText('meow');
        break;
      case 'cat':
        setHeaderText('cat');
        break;
      case 'dog':
        setHeaderText('dog');
        break;
      default:
        setHeaderText('');
        break;
    }
  };

  return (
    <Router>
      <div className="outer-container">
        <div className="inner-container">
          <div className="header">
            <h1>{headerText}</h1>
          </div>
          <div className="main">
            <Routes>
            <Route path="/screen1" element={<Screen1 onButtonClick={handleButtonClick} />} />
              <Route path="/screen2" element={<Screen2 onButtonClick={handleButtonClick} />} />
              <Route path="/screen3" element={<Screen3 onButtonClick={handleButtonClick} />} />
              <Route path="/screen4" element={<Screen4 onButtonClick={handleButtonClick} />} />
            </Routes>
          </div>
          <div className="footer">
            <Footer handleButtonClick={handleButtonClick} />
          </div>
        </div>
      </div>
    </Router>
  );
}

function Footer({ handleButtonClick }) {
  return (
    <div className="card">
      <button onClick={() => handleButtonClick('something')}>Screen 1</button>
      <button onClick={() => handleButtonClick('meow')}>Screen 2</button>
      <button onClick={() => handleButtonClick('cat')}>Screen 3</button>
      <button onClick={() => handleButtonClick('dog')}>Screen 4</button>
    </div>
  );
}

export default App;
