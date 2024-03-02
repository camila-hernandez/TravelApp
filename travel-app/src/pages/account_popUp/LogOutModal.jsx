// LogOutModal.jsx
import React from 'react';
import Modal from 'react-modal';

const LogOutModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Log Out Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '200px',
          backgroundColor: 'blue', // Change color as needed
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        },
      }}
    >
      <h2>LOG OUT?</h2>
      <div style={{ margin: '10px 0' }}>
        <button onClick={onConfirm}>Confirm</button>
      </div>
      <div style={{ margin: '10px 0' }}>
        <button onClick={onClose}>Cancel</button>
      </div>
    </Modal>
  );
};

export default LogOutModal;
