import { createRoot } from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import MoviesCardList from './components/MoviesCardList';
import ActorDetails from './components/ActorDetails';   

const router = createBrowserRouter([
  {
    path: '/',           
    element: <App />,
    children: [
      {
        path: "/" , 
        element: <MoviesCardList />,
      },
      {
        path: '/moviedetail/:id',  
        element: <MovieDetails />,
      },
      {
        path :'//actor/:actorId',
        element: <ActorDetails />
      }
    ],
  }
]);

const root = createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={router} />);
