import React from 'react';
import './HomePage.css';

function HomePage({ handleClick }) {
  return (
    <div className="content-box">
      <button className="something-button" onClick={handleClick}>
        Something
      </button>
    </div>
  );
}

export default HomePage;
