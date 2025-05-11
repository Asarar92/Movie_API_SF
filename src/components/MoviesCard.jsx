import React from 'react'
import { Link } from 'react-router-dom'

export default function MoviesCard({ movieImg, title, date, popularity }) {
  // 0 ≤ popularity ≤ 100
  const radius       = 16;
  const fullCircum   = 2 * Math.PI * radius;         // ≈100.53
  const pct          = Math.min(Math.max(popularity, 0), 100) / 100;
  const dashLength   = pct * fullCircum;
  const gapLength    = fullCircum - dashLength;

  // when popularity > 60% → green, else amber
  const strokeColor  = popularity > 60 ? '#4CAF50' : '#FFC107';

  return (
    <Link className="movies-card" to="/moviedetail">
      <div className='flag-container'>
        <img src={movieImg || "https://image.tmdb.org/t/p/w1280/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg"} alt="movie-poster" />
        <div className="rating-circle">
          <svg width="36" height="36" viewBox="0 0 36 36">
            {/* grey background track */}
            <circle
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke="#e0e0e0"
              strokeWidth="2"
            />
            {/* colored progress */}
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
            {/* numeric label */}
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
        </div>
      </div>
      <div className="card-text">
        <h3 className="card-title">{title || "title not found"}</h3>
        <p className='release-date'>{date || "1999"}</p>
      </div>
    </Link>
  )
}
