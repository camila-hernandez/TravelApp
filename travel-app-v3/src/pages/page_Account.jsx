import React, { useState } from 'react';
import './page_Account.css'; // Import your CSS file for styling

const Page_Account = ({ onLogout }) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isLogOutModalOpen, setLogOutModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

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

  const openChangePasswordModal = () => {
    setChangePasswordModalOpen(true);
  };

  const closeChangePasswordModal = () => {
    setChangePasswordModalOpen(false);
  };

  const confirmChangePassword = () => {
    console.log('Password changed!');
    closeChangePasswordModal();
  };

  return (
    <div>
      <h1 className="account-header">Account Settings</h1>

      <div className="user-info">
        <h2>Personal Information</h2>
        <p><b>First Name:</b> John</p>
        <p><b>Last Name:</b> Smith</p>
        <p><b>Email:</b> john.smith123@gmail.com</p>
      </div>

      <div className="accountOptions-container">
        <div className="accountOptions-field-changePassword">
          <button onClick={openChangePasswordModal}>
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

      {isChangePasswordModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Change Password</h2>
            <p>Fill out the following fields:</p>
            <input type="password" placeholder="Current Password" />
            <input type="password" placeholder="New Password" />
            <input type="password" placeholder="Confirm New Password" />
            <div className="button-container">
              <button className="button-first" onClick={confirmChangePassword}>Change Password</button>
              <button className="button-second" onClick={closeChangePasswordModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Delete Account</h2>
            <p>Are you sure you want to delete your account?</p>
            <div className="button-container">
              <button className="button-first" onClick={confirmDelete}>Yes, delete my account</button>
              <button className="button-second" onClick={closeDeleteModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {isLogOutModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Log Out</h2>
            <p>Are you sure you want to log out?</p>
            <div className="button-container">
              <button className="button-first" onClick={confirmLogOut}>Yes, log me out</button>
              <button className="button-second" onClick={closeLogOutModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Page_Account;
