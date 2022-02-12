import React from 'react';

export default function Die({ isHeld, holdDice, value }) {
  const styles = {
    backgroundColor: isHeld ? '#59e391' : 'white',
  };
  return (
    <div className="die-face" style={styles} onClick={holdDice}>
      <h2 className="die-num">{value}</h2>
    </div>
  );
}
