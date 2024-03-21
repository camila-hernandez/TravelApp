// Screen1.jsx
import React from 'react';
import '../App.css'; // Import your CSS file for styling

function page_Home({ headerText }) {
  return (
    <div className="screen-container">
      <h2>Screen 1 Content</h2>
      <p>{headerText}</p>
    </div>
  );
}

export default page_Home;
