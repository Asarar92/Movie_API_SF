import React from 'react';

export default function CircularRating({ popularity }) {
  const radius = 16;
  const fullCircum = 2 * Math.PI * radius; 
  const pct = Math.min(Math.max(popularity, 0), 100) / 100;
  const dashLength = pct * fullCircum;
  const gapLength = fullCircum - dashLength;

 const strokeColor = popularity > 60 ? '#4CAF50' : '#FFC107';

  return (
    // <div className="rating-circle">
    <svg width="36" height="36" viewBox="0 0 36 36">
      <circle
        cx="18"
        cy="18"
        r={radius}
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2"
      />
      <circle
        cx="18"
        cy="18"
        r={radius}
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        strokeDasharray={`${dashLength.toFixed(1)} ${gapLength.toFixed(1)}`}
        transform="rotate(-90 18 18)"
      />
      <text
        x="18"
        y="18"
        textAnchor="middle"
        dominantBaseline="middle"
        className="rating-text"
      >
        {Math.round(popularity)}
      </text>
    </svg>
    // </div>
  );
}

