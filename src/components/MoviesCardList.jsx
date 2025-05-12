import MoviesCard from './MoviesCard.jsx'
import moviesOut from '../moviesOut';
import { useOutletContext } from 'react-router-dom'

const MoviesCardList = () => {

  const { query } = useOutletContext()

  return (
    <div className='movies-container'>  
     {moviesOut .filter((movie) =>
            movie.title.toLowerCase().includes(query)
          ).map((movie) => {
        return (
          < MoviesCard
            key={movie.id}
            movieID={movie.id}
            movieImg={movie.posterPath}
            title={movie.title}
            date={movie.releaseDate}
            popularity={movie.popularity}
          />
        )
      })}
    </div>
  )
}

export default MoviesCardList