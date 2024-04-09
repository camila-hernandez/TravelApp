import React, { useState } from 'react';
import "./page_Account.css";

const SignUp = ({ onCreateAccount }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);

  const handleCreateAccount = () => {
    // Reset error message
    setError(null);

    // Check for empty fields
    if (!firstName || !lastName || !email || !password1 || !password2) {
      setError('Please fill in all fields');
      return;
    }

    // Check for matching passwords
    if (password1 !== password2) {
      setError('Passwords do not match');
      return;
    }

    // Perform account creation logic
    onCreateAccount({
      firstName,
      lastName,
      email,
      password: password1 // Assuming you only need one password field
    });

    onCreateAccount();
  };

  return (
    <div className="createAccount-container">
      <div className="sign-up-header">
        <h4>Sign Up</h4>
      </div>

      <div className="detail-headers">
        <p>Enter Your First Name</p>
      </div>
      <div className="enterFirstName-box">
        <input
          type="text"
          className="first-name-textfield"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="detail-headers">
        <p>Enter Your Last Name</p>
      </div>
      <div className="enterLastName-box">
        <input
          type="text"
          className="last-name-textfield"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="detail-headers">
        <p>Enter Your Email Address</p>
      </div>
      <div className="enter-new-email-field">
        <input
          type="text"
          className="newAccountEmailField"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="detail-headers">
        <p>Enter Your Password</p>
      </div>
      <div className="enter-new-password-field">
        <input
          type="password"
          className="newAccountPassword1"
          placeholder="Password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
      </div>

      <div className="detail-headers">
        <p>Re-enter Your Password</p>
      </div>
      <div className="confirm-new-password-field">
        <input
          type="password"
          className="newAccountPassword2"
          placeholder="Confirm Password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </div>

      <div className="container">
        <div className="captcha-field">
          <input type="checkbox" id="robotCheckbox" />
          <label htmlFor="robotCheckbox">I am not a robot</label>
        </div>
      </div>

      <div className="create-account-field">
        <button onClick={handleCreateAccount}>Create Account</button>
      </div>

      {/* Error message */}
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
    </div>
  );
};

export default SignUp;

