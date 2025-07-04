import React, { useState, useEffect } from 'react';

function TrafficLight() {
  const [light, setLight] = useState('green');
  const [autoMode, setAutoMode] = useState(true);

  useEffect(() => {
    if (!autoMode) return;

    let timer;
    if (light === 'green') timer = setTimeout(() => setLight('yellow'), 15000);
    else if (light === 'yellow') timer = setTimeout(() => setLight('red'), 5000);
    else if (light === 'red') timer = setTimeout(() => setLight('green'), 10000);

    return () => clearTimeout(timer);
  }, [light, autoMode]);

  const handleManual = (color) => {
    setAutoMode(false);
    setLight(color);
  };

  const handleStart = () => {
    setAutoMode(true);
    setLight('green');
  };

  return (
    <div>
      <h2>Traffic Light</h2>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <div style={{ width: 50, height: 50, borderRadius: '50%', background: light === 'red' ? 'red' : '#ccc' }}></div>
        <div style={{ width: 50, height: 50, borderRadius: '50%', background: light === 'yellow' ? 'yellow' : '#ccc' }}></div>
        <div style={{ width: 50, height: 50, borderRadius: '50%', background: light === 'green' ? 'green' : '#ccc' }}></div>
      </div>
      <button onClick={handleStart}>Start Auto</button>
      <button onClick={() => handleManual('red')}>Red</button>
      <button onClick={() => handleManual('yellow')}>Yellow</button>
      <button onClick={() => handleManual('green')}>Green</button>
    </div>
  );
}

export default TrafficLight;
