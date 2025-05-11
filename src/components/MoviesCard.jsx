
import React from 'react'
import { Link } from 'react-router-dom'


export default function MoviesCard({flag,title,date}) {
  return (

    <Link className="movies-card"  to="/moviedetail">
      <div className='flag-container'>
        <img src={flag||"https://image.tmdb.org/t/p/w1280/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg"} alt="movie-poster" />
      </div>
      <div className="card-text">
        <h3 className="card-title">{title ||" title not found"}</h3>
        <p className='release-date'> {date ||" 1999"}</p>
      </div>
    </Link>
  )
}
