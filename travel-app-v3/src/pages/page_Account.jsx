import React, { useState } from 'react';
import './page_Account.css'; // Import your CSS file for styling

const Page_Account = ({ onLogout }) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isLogOutModalOpen, setLogOutModalOpen] = useState(false);

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const confirmDelete = () => {
    console.log('Account deleted!');
    closeDeleteModal();
  };

  const openLogOutModal = () => {
    setLogOutModalOpen(true);
  };

  const closeLogOutModal = () => {
    setLogOutModalOpen(false);
  };

  const confirmLogOut = () => {
    console.log('User logged out!');
    closeLogOutModal();
    onLogout(); // Call the onLogout function passed as a prop
  };

  return (
    <div>
      <h1 className="account-header">My Account</h1>

      <div className="accountOptions-container">

        <div className="accountOptions-field-changePassword">
          <button>
            Change Password
          </button>
        </div>

        <div className="accountOptions-field-deleteAccount">
          <button onClick={openDeleteModal}>
            Delete Account
          </button>
        </div>

        <div className="accountOptions-field-logOut">
          <button onClick={openLogOutModal}>
            Log Out
          </button>
        </div>
      </div>

      {/* Render the delete account confirmation */}
      {isDeleteModalOpen && (
        <div>
          <h2>Delete Account</h2>
          <p>Are you sure you want to delete your account?</p>
          <button onClick={confirmDelete}>Yes, delete my account</button>
          <button onClick={closeDeleteModal}>Cancel</button>
        </div>
      )}

      {/* Render the log out confirmation */}
      {isLogOutModalOpen && (
        <div>
          <h2>Log Out</h2>
          <p>Are you sure you want to log out?</p>
          <button onClick={confirmLogOut}>Yes, log me out</button>
          <button onClick={closeLogOutModal}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Page_Account;
