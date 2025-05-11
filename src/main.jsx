import { createRoot } from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Moveidetails from './components/Moveidetails'

// import Home from './components/Home'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
  },
  {
    path: '/moviedetail',
    element: <Moveidetails />, 
  }
])

const root = createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={router} />)