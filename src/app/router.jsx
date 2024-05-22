import {createBrowserRouter} from 'react-router-dom'
import {
    GamePage,
    CreateGame
} from "../components/pages"

export const router = createBrowserRouter([
  { 
    path: '/',
    element: <CreateGame />
  },
  {
    path: '/gamepage',
    element: <GamePage/>    
  },
//   {
//     path: '/*',
//     element: <NoPage />
//   },

])
