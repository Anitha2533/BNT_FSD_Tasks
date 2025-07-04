import React, { useState } from 'react';

function PhoneFormatter() {
  const [phone, setPhone] = useState('');

  const format = (value) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  return (
    <div>
      <h2>Phone Formatter</h2>
      <input
        value={phone}
        onChange={(e) => setPhone(format(e.target.value))}
        maxLength={14}
        placeholder="Enter number"
      />
      <p>Formatted: {phone}</p>
    </div>
  );
}

export default PhoneFormatter;
