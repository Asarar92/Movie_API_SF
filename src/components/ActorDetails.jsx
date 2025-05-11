import { useParams } from 'react-router-dom';
import movieCast from '../movieCast.js';
import moviesOut from '../moviesOut.js';
import MoviesCard from './MoviesCard';
import './ActorDetails.css';  

const ActorDetails = () => {
  const { actorId } = useParams();
  const id = Number(actorId);

  const credits = movieCast.filter(c => c.castId === id);
  if (!credits.length) return <div>Actor Not Found</div>;

  const { name, profileImage, gender, knownFor } = credits[0];

  const movieIds = [...new Set(credits.map(c => c.movieId))];
  console.log(movieIds)
  const films = moviesOut.filter(m => movieIds.includes(m.id));

  return (
    <div className="actor-page ">
      <aside className="actor-sidebar" >
        <div
          className="actor-image"
        >
          <img
            src={profileImage}
            alt={name}
          />
        </div>
        <div
          className="actor-info"
        >
          <h1 >{name}</h1>
          <p>Gender: {gender}</p>
          <p>Known for: {knownFor}</p>
        </div>
      </aside>
      <main className="actor-films" >
        <h2> Filmography</h2>
        <div className="grid grid-cols-3 gap-4">
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

export default ActorDetails;
