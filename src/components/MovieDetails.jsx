import React from 'react';
import './MovieDetails.css';
import CastCard from './CastCard';
import { useParams } from 'react-router-dom';
import moviesOut from '../moviesOut';
import movieCast from '../movieCast';


const MovieDetails = () => {
  const { id } = useParams();
  const movieId = Number(id);
  const movie = moviesOut.find(m => m.id === movieId);


  if (!movie) {
    return <div className="movie-not-found">Movie Not Found</div>;
  }

  const { title, releaseDate, backdropImage, posterPath, genres, overview, popularity } = movie;
  const year = new Date(releaseDate).getFullYear();
  const formattedDate = new Date(releaseDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const popularityPct = Math.round(popularity);
    const castList = movieCast.filter(cast => cast.movieId === movieId);

  return (
    <>
      <section className="movie-header" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${backdropImage})` }}>
        <div className="movie-header-content">
          <div className="poster-container">
            <img
              src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
              alt= {title}
              className="movie-poster"
            />
          </div>

          <div className="movie-text">
            <h1 className="movie-title">{title} <span>({year})</span></h1>

            <div className="movie-metadata">
              <span>{formattedDate} (US)</span>
              <span>{genres}</span>
              <span>2h 22m</span>
            </div>

            <div className="user-score">
              <div className="score-percent">{popularityPct}%</div>
              <span>User Score</span>
            </div>

            <div className="header-buttons">
              <button className="play-trailer-btn">
                ▶ Play Trailer
              </button>
              <button className="viber-btn">
                What's your Vibe
              </button>
            </div>
            <div className="overview">
              <h2>Overview</h2>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </section>
      <section className='cast-section'>
        <div className="cast-content">
          <h2 className='cast-section-heading'>Top Billed Cast</h2>
          <div className="cast-section-container">
             {castList.map(cast => (
          <CastCard
            key={cast.id}
            actorId={cast.castId}                    
            imageUrl={cast.profileImage}
            name={cast.name}
            role={cast.character}
            imageAlt={cast.name}
          />
          ))}
          </div>
        </div>

      </section>
    </>
  );
};

export default MovieDetails;