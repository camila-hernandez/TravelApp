// DeleteAccountModal.jsx
import React from 'react';
import Modal from 'react-modal';

const DeleteAccountModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Delete Account Modal"
      style={{
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
          backgroundColor: 'red',
          textAlign: 'center', // Center text horizontally
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Center text vertically
        },

        buttonContainer: {
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '20px',
        }
      }}
    >
      <h2>ARE YOU SURE YOU WISH TO DELETE YOUR ACCOUNT?</h2>
      <div style={{ margin: '10px 0' }}>
        {/* Add some margin or padding here */}
        <button onClick={onConfirm}>Confirm</button>
      </div>
      <div style={{ margin: '5px 0' }}>
        {/* Adjust the margin or padding based on your preference */}
        <button onClick={onClose}>Cancel</button>
      </div>
    </Modal>
  );
};

export default DeleteAccountModal;
