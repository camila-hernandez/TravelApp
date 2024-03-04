import React from 'react';
import Modal from 'react-modal';

const DeleteAccountModal = ({ isOpen, onClose, onConfirm }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '300px',
      height: '200px',
      backgroundColor: '#f0f0f0', // Light gray background
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '20px',
    },
    confirmButton: {
      margin: '10px 0',
      padding: '10px',
      backgroundColor: '#007bff', // Blue
      color: '#fff', // White
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    cancelButton: {
      margin: '10px 0',
      padding: '10px',
      backgroundColor: '#6c757d', // Gray
      color: '#fff', // White
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Delete Account Modal"
      style={customStyles}
    >
      <h2>ARE YOU SURE YOU WISH TO DELETE YOUR ACCOUNT?</h2>
      <div style={customStyles.buttonContainer}>
        <button style={customStyles.confirmButton} onClick={onConfirm}>
          Confirm
        </button>
        <button style={customStyles.cancelButton} onClick={onClose}>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default DeleteAccountModal;