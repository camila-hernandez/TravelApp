import React, { useState } from 'react';
import whereLogo from '../assets/WhereLogoGreen.png';
import "./page_Account.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here (e.g., call an API)
    // For simplicity, let's assume authentication succeeds if username and password are not empty
    if (username && password) {
      onLogin(); // Call the onLogin function passed as a prop
    } else {
      setError('Please enter both email and password');
    }
  };

  return (
    <div className="login-container">
      <div className="header-container">
        <h1 className="header-title">Where Calgary</h1>
      </div>
      <div className="login-field-logo">
        <img src={whereLogo} alt="whereLogo" className="whereLogo" style={{ width: '100px', height: 'auto' }} />
      </div>
      <div className="login-field-email">
        <input
          type="text"
          className="emailField"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="login-field-password">
        <input
          type="password"
          className="passwordField"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="login-field-forgotPassword">
        <a href="/forgot-password" className="forgot-password-link">
          Forgot Password?
        </a>
      </div>
      <div className="login-field-loginbutton">
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
      <div className="login-field-signUp">
        <div className="sign-up-text">Don't have an account?</div>
        <a href="/sign-up" className="sign-up-link">Sign Up</a>
      </div>
    </div>
  );
};

export default Login;
