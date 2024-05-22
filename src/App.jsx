import { useState } from 'react'
import { RouterProvider, Router } from 'react-router-dom'
import {router} from './app/index';


import './common.css'

function App() {
  return (
  <RouterProvider router={router} />
  )
}

export default App
