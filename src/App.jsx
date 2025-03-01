import { useState } from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout2 from './MiniProjects/Titanic/AppLayout2';
import About from './MiniProjects/Titanic/About';
import getMovieData from './MiniProjects/Titanic/ApiData';
import Movies from './MiniProjects/Titanic/Movies';

function App() {

  const router = createBrowserRouter([

   {
    path: '/',
    element: <AppLayout2/>,
    children: [
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/movie',
        element: <Movies/>,
        loader: getMovieData,
      },
    ]
   }

  ]);


  return <RouterProvider router={router} />
}


export default App
