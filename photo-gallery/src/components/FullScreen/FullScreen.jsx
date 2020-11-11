import React from 'react';
import './FullScreen.css';

export const FullScreen = ({
  fullScreenImg,
  openFullScreen,
  closeFullScreen
}) => {
  return (
    <div
      className="full-screen"
      style={{ display: openFullScreen ? 'flex' : 'none' }}
      onClick={closeFullScreen}
    >
      <img src={fullScreenImg} alt="full-img" />
    </div>
  );
};
