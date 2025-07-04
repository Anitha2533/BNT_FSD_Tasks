import React, { useState } from 'react';

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h2>Star Rating</h2>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => setRating(i + 1)} style={{ fontSize: 30, cursor: 'pointer', color: i < rating ? 'gold' : 'gray' }}>
          *
        </span>
      ))}
      <p>Rating: {rating} / 5</p>
      <button onClick={() => setRating(0)}>Reset</button>
    </div>
  );
}

export default StarRating;
