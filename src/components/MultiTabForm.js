import React, { useState } from 'react';

function MultiTabForm() {
  const [tab, setTab] = useState('profile');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [notification, setNotification] = useState('');
  const [preferences, setPreferences] = useState({ email: false, sms: false });

  const handleSubmit = () => alert(`${tab} Form Submitted!`);

  return (
    <div>
      <h2>Multi Tab Form</h2>
      <button onClick={() => setTab('profile')}>Profile</button>
      <button onClick={() => setTab('interest')}>Interest</button>
      <button onClick={() => setTab('settings')}>Settings</button>

      {tab === 'profile' && (
        <div>
          <input placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} /><br />
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          <button onClick={handleSubmit}>Submit Profile</button>
        </div>
      )}

      {tab === 'interest' && (
        <div>
          <select value={interest} onChange={(e) => setInterest(e.target.value)}>
            <option value="">--Choose--</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
          </select><br />
          <button onClick={handleSubmit}>Submit Interest</button>
        </div>
      )}

      {tab === 'settings' && (
        <div>
          <label><input type="radio" checked={notification === 'on'} onChange={() => setNotification('on')} /> On</label>
          <label><input type="radio" checked={notification === 'off'} onChange={() => setNotification('off')} /> Off</label><br />
          {Object.keys(preferences).map(pref => (
            <label key={pref}>
              <input
                type="checkbox"
                checked={preferences[pref]}
                onChange={() =>
                  setPreferences({ ...preferences, [pref]: !preferences[pref] })
                }
              />
              {pref.toUpperCase()}
            </label>
          ))}<br />
          <button onClick={handleSubmit}>Submit Settings</button>
        </div>
      )}
    </div>
  );
}

export default MultiTabForm;
