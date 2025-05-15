import { useParams } from 'react-router-dom';
import { useEffect, useRef,useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MoviesCard from './MoviesCard.jsx';
import './ActorDetails.css';

const ActorDetail = () => {
  const { actorId } = useParams();
  const containerRef = useRef(null);
    const { castMembers, movies, loading, error } = useContext(MovieContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [actorId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
    const actor = castMembers.find(c => c.Actor_ID__c === actorId);
      if (!actor) return <div className="not-found">Actor Not Found</div>;


    const {
    Actor_Name__c: name,
    Profile_Image__c: profileImage,
    Gender__c: gender,
    Known_For__c: knownFor,
    Actor_ID__c,
  } = actor;

  const credits = castMembers.filter(c => c.Actor_ID__c === Actor_ID__c);
  const movieIds = [...new Set(credits.map(c => c.Movie__c))];
  const films = movies.filter(m => movieIds.includes(m.Id));

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
                      key={movie.Movie__c}
                      movieID={movie.Id}
                      movieImg={movie.Poster_Path__c}
                      title={movie.Title__c}
                      date={movie.Release_Date__c}
                      popularity={movie.Popularity__c}
                    />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ActorDetail;