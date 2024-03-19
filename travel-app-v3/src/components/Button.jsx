// Components/Button.jsx
import React from 'react';
import '../App.css'; // Import your CSS file for styling

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;