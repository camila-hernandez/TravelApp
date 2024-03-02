// AccountOptionsPage.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./accountPage.css";
import DeleteAccountModal from '../account_popUp/DeleteAccountModal';
import LogOutModal from '../account_popUp/LogOutModal';
import React, { useState } from 'react';

export default function AccountOptionsPage() {
  const spaceBetweenStyle = {
    margin: '15px',
  };

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
  };

  return (
    <div className="accountOptions-container">
      <div className="accountOptions-field-details">
        <button>
          <h3> Account Details</h3>
          <h4> Email: john.smith@ucalgary.ca</h4>
        </button>
      </div>

      <div className="accountOptions-field-changePassword" style={spaceBetweenStyle}>
        <button>
          Change Password
        </button>
      </div>

      <div className="accountOptions-field-deleteAccount" style={spaceBetweenStyle}>
        <button onClick={openDeleteModal}>
          Delete Account
        </button>
      </div>

      <div className=".accountOptions-field-logOut" style={spaceBetweenStyle}>
        <button onClick={openLogOutModal}>
          LOG OUT
        </button>
      </div>

      {/* Render the modals */}
      <DeleteAccountModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
      />

      <LogOutModal
        isOpen={isLogOutModalOpen}
        onClose={closeLogOutModal}
        onConfirm={confirmLogOut}
      />
    </div>
  );
}
