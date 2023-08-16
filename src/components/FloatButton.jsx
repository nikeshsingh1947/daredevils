// FloatingButton.js
import React from 'react';
import './FloatButton.css';

const FloatButton = ({ onClick, icon }) => {
  return (
    <button className="floating-button" onClick={onClick}>
      "Cllick Me"
    </button>
  );
};

export default FloatButton;
