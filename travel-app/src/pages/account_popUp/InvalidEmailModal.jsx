// InvalidEmailModal.jsx
import React from 'react';
import Modal from 'react-modal';

const InvalidEmailModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Invalid Email Modal"
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
          backgroundColor: 'orange', // Change color as needed
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        },
      }}
    >
      <h2>INVALID EMAIL</h2>
      <p>Please enter a valid email address.</p>
      <div style={{ margin: '20px 0' }}>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default InvalidEmailModal;
