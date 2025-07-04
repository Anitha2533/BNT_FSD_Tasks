import React, { useState } from 'react';

function TextTools() {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');

  const reverseCapitalize = (str) =>
    str.split('').reverse().join('').replace(/\b\w/g, (l) => l.toUpperCase());

  const checkStrength = (pwd) => {
    const upper = (pwd.match(/[A-Z]/g) || []).length;
    const lower = /[a-z]/.test(pwd);
    const digit = /\d/.test(pwd);
    const special = /[@/$#]/.test(pwd);
    return pwd.length >= 8 && upper >= 2 && lower && digit && special ? 'Strong' : 'Weak';
  };

  return (
    <div>
      <h2>Text & Password Tools</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" /><br />
      <button onClick={() => setText(text.toUpperCase())}>UPPERCASE</button>
      <button onClick={() => setText(text.toLowerCase())}>lowercase</button>
      <button onClick={() => setText(reverseCapitalize(text))}>Reverse & Capitalize</button><br /><br />
      
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" /><br />
      <p>Password Strength: {checkStrength(password)}</p>
    </div>
  );
}

export default TextTools;
