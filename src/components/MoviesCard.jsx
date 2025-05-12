import React from 'react'
import { Link } from 'react-router-dom'
import CircularRating from './CircularRating'

export default function MoviesCard({ movieImg, title, date, popularity , movieID}) {


  return (
  <Link className="movies-card" to={`/moviedetail/${movieID}`}>
      <div className='flag-container'>
        <img src={movieImg} alt="movie-poster" />
           <div className="rating-circle">
        <CircularRating popularity={popularity} />
        </div>
      </div>
      <div className="card-text">
        <h3 className="card-title">{title || "title not found"}</h3>
        <p className='release-date'> {date 
            ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) 
            : "1999"}</p>
      </div>
    </Link>
  )
}
