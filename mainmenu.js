import React from 'react';

const MainMenu = ({ onStart }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Color Game</h1>
      <button
        onClick={onStart}
        style={{
          fontSize: '18px',
          padding: '10px 20px',
          marginTop: '20px',
          cursor: 'pointer',
        }}
      >
        Play
      </button>
    </div>
  );
};

export default MainMenu;
