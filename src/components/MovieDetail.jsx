import './MovieDetails.css';
import CastCard from './CastCard';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';




const MovieDetail = () => {
  const { id } = useParams();
  const { movies, castMembers } = useContext(MovieContext)
  console.log("Movies from context:", movies);
  console.log("Cast from context:", castMembers);
  console.log("Movie ID from params:", id);

  if (!castMembers) {
    return <div>Loading...</div>;
  }


  const movie = movies.find((m) => m.Id === id);

  if (!movie) {
    return <div className="movie-not-found">Loading</div>;
  }
  const {
    Title__c: title,
    Release_Date__c: releaseDate,
    Backdrop_Image__c: backdropImage,
    Poster_Path__c: posterPath,
    Genres__c: genres,
    Overview__c: overview,
    Popularity__c: popularity
  } = movie;
  const year = new Date(releaseDate).getFullYear();
  const formattedDate = new Date(releaseDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const popularityPct = Math.round(popularity);
  const castList = castMembers.filter((c) => c.Movie__c === movie.Id);
  console.log(castList)

  return (
    <>
      <section className="movie-header" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${backdropImage})` }}>
        <div className="movie-header-content">
          <div className="poster-container">
            <img
              src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
              alt={title}
              className="movie-poster"
            />
          </div>

          <div className="movie-text">
            <h1 className="movie-title">{title} <span>({year})</span></h1>

            <div className="movie-metadata">
              <span>{formattedDate} (US)</span>
              <span>{genres}</span>
            </div>

            <div className="user-score">
              <div className="score-percent">{popularityPct}%</div>
              <span>User Score</span>
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
                key={cast.Id}
                actorId={cast.Actor_ID__c}
                imageUrl={cast.Profile_Image__c}
                name={cast.Actor_Name__c}
                role={cast.Character__c}
                imageAlt={cast.Actor_Name__c}
                movieId={cast.Movie__c}
              />
            ))}
          </div>
        </div>

      </section>
    </>
  );
};

export default MovieDetail;