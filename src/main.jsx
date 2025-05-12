import { createRoot } from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';
import MoviesCardList from './components/MoviesCardList';
import ActorDetail from './components/ActorDetail';   

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
        element: <MovieDetail />,
      },
      {
        path :'//actor/:actorId',
        element: <ActorDetail />
      }
    ],
  }
]);

const root = createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={router} />);
