import { useOutletContext } from 'react-router-dom'
import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MoviesCard from './MoviesCard';



const MoviesCardList = () => {

  const { query } = useOutletContext()
    const { movies, loading, error } = useContext(MovieContext);
      if (loading) return <p>Loading…</p>;
  if (error)   return <p>Error: {error}</p>;


  return (
       <div className='movies-container'>
      {movies
        .filter(m => m.Title__c.toLowerCase().includes(query))
        .map(movie => (
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
  )
}

export default MoviesCardList