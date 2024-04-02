import React, { useState } from 'react';
import '../App.css'; // Import your CSS file for styling

const Page_Account = ({ onLogout }) => {
  const [showLogoutPanel, setShowLogoutPanel] = useState(false);

  const handleLogout = () => {
    setShowLogoutPanel(true);
  };

  const handleCancel = () => {
    setShowLogoutPanel(false);
  };

  const handleConfirm = () => {
    // Call the onLogout function passed as a prop
    onLogout();
  };

  return (
    <div>
      <h1>Welcome to Account Page</h1>

      <button onClick={handleLogout}>
        Log Out
      </button>

      {/* Logout panel */}
      {showLogoutPanel && (
        <div className="logout-panel">
          <div className="overlay"></div>
          <div className="panel">
            <h2>Are you sure you want to log out?</h2>
            <div className="buttons">
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={handleConfirm}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page_Account;
