import React, { useState } from 'react';
import InvalidEmailModal from '../account_popUp/InvalidEmailModal'; // Adjust the path as needed
import InvalidPasswordModal from '../account_popUp/InvalidPasswordModal'; // Adjust the path as needed
import "./accountPage.css";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isInvalidEmailModalOpen, setInvalidEmailModalOpen] = useState(false);
  const [isInvalidPasswordModalOpen, setInvalidPasswordModalOpen] = useState(false);

  const handleCreateAccount = () => {
    // Check for invalid email
    if (!isValidEmail(email)) {
      setInvalidEmailModalOpen(true);
      return;
    }

    // Check for invalid password
    if (!isValidPassword(password1)) {
      setInvalidPasswordModalOpen(true);
      return;
    }

    // Continue with account creation logic
    console.log('Account created!');
  };

  const isValidEmail = (email) => {
    // Implement your email validation logic here
    // For simplicity, this example checks for the presence of '@'
    return email.includes('@');
  };

  const isValidPassword = (password) => {
    // Implement your password validation logic here
    // For simplicity, this example checks for a minimum length of 8 characters
    return password.length >= 8;
  };

  const closeInvalidEmailModal = () => {
    setInvalidEmailModalOpen(false);
  };

  const closeInvalidPasswordModal = () => {
    setInvalidPasswordModalOpen(false);
  };

  return (
    <div>
      <div className="createAccount-container">
        {/* WHERE LOGO HERE */}
        <div className="enter-new-email-field">
          <input
            type="text"
            className="newAccountEmailField"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
        <div className="confirm-new-password-field">
          <input
            type="password"
            className="newAccountPassword2"
            placeholder="Confirm Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <div className="captcha-field">
          {/* Replace the text with a checkbox */}
          <input type="checkbox" id="robotCheckbox" />
          <label htmlFor="robotCheckbox">I am not a robot</label>
        </div>
        <div className="create-account-field">
          <button onClick={handleCreateAccount}>CREATE ACCOUNT</button>
        </div>
      </div>

      {/* Modals */}
      <InvalidEmailModal isOpen={isInvalidEmailModalOpen} onClose={closeInvalidEmailModal} />
      <InvalidPasswordModal isOpen={isInvalidPasswordModalOpen} onClose={closeInvalidPasswordModal} />
    </div>
  );
}
