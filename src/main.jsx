// main.jsx
import { createRoot } from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MovieDetails from './components/Moveidetails'
import MoviesCardList from './components/MoviesCardList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MoviesCardList />,
      },
      {
        path: '/:country',
        element: <MovieDetails />,
      },
    ],
  },
  {
    path: '/moviedetail',
    element: <MovieDetails />,
  },
])

const root = createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={router} />)
