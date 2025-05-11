import MoviesCard from './MoviesCard.jsx'
import moviesOut from '../moviesOut';
import { useOutletContext } from 'react-router-dom'

const MoviesCardList = () => {

  const { query } = useOutletContext()

  return (
    <div className='movies-container'>  
     {moviesOut .filter((movies) =>
            movies.title.toLowerCase().includes(query)
          ).map((movies) => {
        return (
          < MoviesCard
            key={movies.id}
            movieID={movies.id}
            movieImg={movies.posterPath}
            title={movies.title}
            date={movies.releaseDate}
            popularity={movies.popularity}
          />
        )
      })}
    </div>
  )
}

export default MoviesCardList