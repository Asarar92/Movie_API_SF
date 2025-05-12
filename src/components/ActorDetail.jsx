import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import movieCast from '../movieCast.js';
import moviesOut from '../moviesOut.js';
import MoviesCard from './MoviesCard.jsx';
import './ActorDetails.css';

const ActorDetail = () => {
  const { actorId } = useParams();
  const id = Number(actorId);
  const containerRef = useRef(null);
  
  
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
 
    window.scrollTo(0, 0);
  }, [actorId]);

  const credits = movieCast.filter(c => c.id === id);
  if (!credits.length) return <div className="not-found">Actor Not Found</div>;
  
  const { name, profileImage, gender, knownFor } = credits[0];
  const movieIds = [...new Set(credits.map(c => c.movieId))];
  const films = moviesOut.filter(m => movieIds.includes(m.id));
  
  return (
    <div className="actor-page">
      <aside className="actor-sidebar">
        <div className="actor-image">
          <img src={profileImage} alt={name} />
        </div>
        <div className="actor-info">
          <h1>{name}</h1>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Known for:</strong> {knownFor}</p>
        </div>
      </aside>
      <main className="actor-films" ref={containerRef}>
        <h2>Filmography</h2>
        <div className="film-list">
          {films.map(movie => (
            <MoviesCard
              key={movie.id}
              movieImg={movie.posterPath}
              title={movie.title}
              date={movie.releaseDate}
              popularity={movie.popularity}
              movieID={movie.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ActorDetail;